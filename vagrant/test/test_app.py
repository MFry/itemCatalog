import pytest
import app
import models
from test.testEnvironment import DBSetup
import json
import sys


@pytest.fixture(scope='module')
def test_app():
    test_db = DBSetup()
    app.app.config['TESTING'] = True
    app.app.config['PIPELINE'] = test_db.get_pipeline()
    test_app = app.app.test_client()
    yield test_app
    test_db.clear_database()
    del test_app


def response_helper(response):
    if sys.version_info > (3, 6):
        json_data = json.loads(response.data)
    else:
        json_data = json.loads(response.data.decode(encoding='utf-8'))
    return json_data


def test_root(test_app):
    response = test_app.get('/')
    print(response)
    print(response.headers)
    print(response.data)
    assert response.status_code < 400
    assert response.data


def test_get_json_items(test_app):
    pipeline = test_app.application.config['PIPELINE']
    item = pipeline.create_item
    category = pipeline.create_category
    pipeline.add_category(category('Soccer'))
    pipeline.add_category(category('Hockey'))
    pipeline.add_category(category('Snowboarding'))
    with pipeline.get_session() as session:
        soccer_category = session.query(models.Category).filter_by(name='Soccer').one()
        hockey_category = session.query(models.Category).filter_by(name='Hockey').one()
        snowboard_category = session.query(models.Category).filter_by(name='Snowboarding').one()
        pipeline.add_item(item('Two shinguards', soccer_category.id))
        pipeline.add_item(item('Snowboard', snowboard_category.id))
        pipeline.add_item(item('Goggles', snowboard_category.id))
        pipeline.add_item(item('Stick', hockey_category.id))
    r = test_app.get('/j/items')
    assert r.status_code < 300
    json_data = response_helper(r)
    assert len(json_data) == 4


def test_get_json_categories(test_app):
    pipeline = test_app.application.config['PIPELINE']
    category = pipeline.create_category
    with pipeline.get_session() as session:
        count = session.query(models.Category).count()
        r = test_app.get('/j/categories')
        assert r.status_code < 300
        json_data = response_helper(r)
        assert len(json_data) == count
        pipeline.add_category(category('Skiing'))
        r = test_app.get('/j/categories')
        assert r.status_code < 300
        json_data = response_helper(r)
        assert len(json_data) == count+1

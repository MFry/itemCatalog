import pytest
import settings as settings
import models
from model_pipeline import ItemCatalogPipeline
from sqlalchemy import create_engine
from sqlalchemy.engine.url import URL


@pytest.fixture(scope='module')
def models_pipeline():
    settings.database['database'] = 'items_test'
    models.db_connect = create_engine(URL(**settings.database))
    engine = models.db_connect
    models.DeclarativeBase.metadata.bind = engine
    models.DeclarativeBase.metadata.drop_all()
    pipeline = ItemCatalogPipeline()
    yield pipeline
    models.DeclarativeBase.metadata.bind = pipeline.engine
    pipeline.session.close_all()
    models.DeclarativeBase.metadata.drop_all()
    del pipeline


def test_models_add_category(models_pipeline):
    create_category = models_pipeline.create_category
    models_pipeline.add_category(create_category("Outdoors"))
    session = models_pipeline.session()
    total_categories = session.query(models.Category).count()
    assert total_categories == 1
    models_pipeline.add_category(create_category('kitchen'))
    total_categories = session.query(models.Category).count()
    assert total_categories == 2


def test_models_add_item(models_pipeline):
    session = models_pipeline.session()
    outdoors_category = session.query(models.Category).filter_by(category='Outdoors').first()
    create_item = models_pipeline.create_item
    models_pipeline.add_item(create_item('Snowboard', outdoors_category.id))
    total_items = session.query(models.Items).count()
    assert total_items == 1
    session.delete(outdoors_category)
    ItemCatalogPipeline.finalize_session(session)
    total_items = session.query(models.Items).count()
    assert total_items == 0

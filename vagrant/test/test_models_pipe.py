import pytest
from test.testEnvironment import TestDBSetup
import models
from model_pipeline import ItemCatalogPipeline


@pytest.fixture(scope='module')
def models_pipeline():
    test_db = TestDBSetup()
    engine, pipeline = test_db.set_fresh_database()
    yield pipeline
    models.DeclarativeBase.metadata.bind = pipeline.enginete
    models.DeclarativeBase.metadata.drop_all()
    del pipeline


def test_models_add_category(models_pipeline):
    create_category = models_pipeline.create_category
    models_pipeline.add_category(create_category("Outdoors"))
    with models_pipeline.get_session() as session:
        total_categories = session.query(models.Category).count()
        assert total_categories == 1
        models_pipeline.add_category(create_category('kitchen'))
        total_categories = session.query(models.Category).count()
        assert total_categories == 2


def test_models_add_item(models_pipeline):
    with models_pipeline.get_session() as session:
        outdoors_category = session.query(models.Category).filter_by(category='Outdoors').first()
        create_item = models_pipeline.create_item
        models_pipeline.add_item(create_item('Snowboard', outdoors_category.id))
        total_items = session.query(models.Items).count()
        assert total_items == 1
        session.delete(outdoors_category)
    with models_pipeline.get_session() as session:
        total_items = session.query(models.Items).count()
        assert total_items == 0

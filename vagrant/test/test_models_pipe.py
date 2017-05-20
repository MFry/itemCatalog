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
    pipeline = ItemCatalogPipeline()
    yield pipeline
    del pipeline


def test_models_add_category(models_pipeline):
    models_pipeline.add_category({'category': "Outdoors"})


@pytest.mark.skip(reason="Not Implemented")
def test_models_add_item():
    pass

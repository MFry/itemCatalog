import settings
import models
from model_pipeline import ItemCatalogPipeline
from sqlalchemy import create_engine
from sqlalchemy.engine.url import URL


class DBSetup:
    _pipeline = None
    _engine = None

    def __init__(self):
        # Changing the settings to use test database when creating the pipeline
        settings.database['database'] = 'items_test'
        models.db_connect = create_engine(URL(**settings.database))
        engine = models.db_connect
        models.DeclarativeBase.metadata.bind = engine
        models.DeclarativeBase.metadata.drop_all()
        self._engine, self._pipeline = engine, ItemCatalogPipeline()

    def get_pipeline(self):
        return self._pipeline

    def clear_database(self):
        models.DeclarativeBase.metadata.bind = self._engine
        models.DeclarativeBase.metadata.drop_all()

    def __del__(self):
        self._pipeline._session.close_all()
        del self._pipeline
        del self._engine

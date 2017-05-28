import settings
import models
from model_pipeline import ItemCatalogPipeline
from sqlalchemy import create_engine
from sqlalchemy.engine.url import URL


class TestDBSetup:
    _pipeline = None
    _engine = None

    def set_fresh_database(self):
        settings.database['database'] = 'items_test'
        models.db_connect = create_engine(URL(**settings.database))
        engine = models.db_connect
        models.DeclarativeBase.metadata.bind = engine
        models.DeclarativeBase.metadata.drop_all()
        self._engine, self._pipeline = engine, ItemCatalogPipeline()
        return self._engine, self._pipeline

    def get_session(self):
        return self._pipeline.session()

    def clear_database(self):
        self._pipeline.session.close_all()
        models.DeclarativeBase.metadata.drop_all()

    def __del__(self):
        self._pipeline.session.close_all()
        del self._pipeline
        del self._engine
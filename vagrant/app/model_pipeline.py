from sqlalchemy.orm import sessionmaker
from models import Items, Category, db_connect, create_tables
from contextlib import contextmanager


class ItemCatalogPipeline:

    def __init__(self):
        """
        Initialize database connection and sessionmaker
        """
        engine = db_connect()
        create_tables(engine)
        self._session = sessionmaker(bind=engine)
        self.engine = engine

    @staticmethod
    def _finalize_add_session(session, to_add):
        try:
            session.add(to_add)
            session.commit()
        except:
            session.rollback()
            raise
        finally:
            session.close()

    @contextmanager
    def get_session(self):
        session = self._session()
        try:
            yield session
            session.commit()
        except:
            session.rollback()
            raise
        finally:
            session.close()

    @staticmethod
    def create_category(category):
        return {
            'name': category
        }

    @staticmethod
    def create_item(name, category_id, description=None):
        return {
            'name': name,
            'category_id': category_id,
            'description': description
        }

    def add_category(self, category):
        with self.get_session() as session:
            category = Category(**category)
            session.add(category)
            return category

    def add_item(self, item):
        with self.get_session() as session:
            item = Items(**item)
            session.add(item)
            return item



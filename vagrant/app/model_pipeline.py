from sqlalchemy.orm import sessionmaker
from models import Items, Category, db_connect, create_tables


class ItemCatalogPipeline:

    def __init__(self):
        """
        Initialize database connection and sessionmaker
        """
        engine = db_connect()
        create_tables(engine)
        self.session = sessionmaker(bind=engine)

    @staticmethod
    def __finalize_add_session(session, to_add):
        try:
            session.add(to_add)
            session.commit()
        except:
            session.rollback()
            raise
        finally:
            session.close()

    def add_category(self, category):
        session = self.session()
        category = Category(**category)
        self.__finalize_add_session(session, category)
        return category

    def add_item(self, item):
        session = self.session()
        item = Items(**item)
        self.__finalize_add_session(session, item)
        return item



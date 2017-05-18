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

    def add_category(self):
        pass

    def add_item(self):
        pass

import settings
from sqlalchemy import create_engine, Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.engine.url import URL

DeclarativeBase = declarative_base()


def db_connect():
    """
    Creates a database engine to connect to from settings.py file
    :return: sqlalchemy engine instance
    """
    return create_engine(URL(**settings.database))


def create_tables(engine):
    DeclarativeBase.metadata.create_all(engine)


class Category(DeclarativeBase):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True)
    category = Column(String)
    items = relationship('Items', cascade="all, delete, delete-orphan")


class Items(DeclarativeBase):
    __tablename__ = "items"
    id = Column(Integer, primary_key=True)
    title = Column(String)
    description = Column(Text, nullable=True)
    category = Column(Integer, ForeignKey('categories.id'))

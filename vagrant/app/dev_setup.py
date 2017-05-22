import models
import model_pipeline

def clean_dev_server():
    pipeline = model_pipeline.ItemCatalogPipeline()
    models.DeclarativeBase.metadata.bind = pipeline.engine
    pipeline.session.close_all()
    models.DeclarativeBase.metadata.drop_all()


def populate_dev_server():
    pipeline = model_pipeline.ItemCatalogPipeline()
    session = pipeline.session()
    item = pipeline.create_item
    category = pipeline.create_category
    pipeline.add_category(category('Soccer'))
    pipeline.add_category(category('Hockey'))
    pipeline.add_category(category('Snowboarding'))
    soccer_category = session.query(models.Category).filter_by(category='Soccer').one()
    hockey_category = session.query(models.Category).filter_by(category='Hockey').one()
    snowboard_category = session.query(models.Category).filter_by(category='Snowboarding').one()
    pipeline.add_item(item('Two shinguards', soccer_category.id))
    pipeline.add_item(item('Snowboard', snowboard_category.id))
    pipeline.add_item(item('Goggles', snowboard_category.id))
    pipeline.add_item(item('Stick', hockey_category.id))

clean_dev_server()
populate_dev_server()

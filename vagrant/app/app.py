from flask import Flask, render_template
import app_helper
import models
from model_pipeline import ItemCatalogPipeline

app = Flask(__name__)


def set_config(config):
    app.config.update(config)
    if app.config['DEV']:
        app.config.update(dict(
            DEBUG=True,
            PIPELINE=ItemCatalogPipeline()
        ))

@app.route('/j/items', methods=['GET'])
def get_all_items():
    with app.config['PIPELINE'].get_session() as session:
        query = session.query(models.Items).all()
        json_object = app_helper.create_json(query)
        return json_object


@app.route('/item/<int:item_id>', methods=['GET'])
def get_item(item_id):
    with app.config['PIPELINE'].get_session() as session:
        query = session.query(models.Items).filter_by(id=item_id).all()
        json_object = app_helper.create_json(query)
        return json_object

@app.route('/j/categories', methods=['GET'])
def get_all_categories():
    with app.config['PIPELINE'].get_session() as session:
        query = session.query(models.Category).all()
        json_object = app_helper.create_json(query)
        return json_object


@app.route('/')
def hello():
    return render_template('index.html')


if __name__ == '__main__':
    set_config({'DEV': True})
    app.run(host='0.0.0.0', port=5000)


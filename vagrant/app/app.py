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


@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/j/items', methods=['GET'])
def get_all_items():
    with app.config['PIPELINE'].get_session() as session:
        query = session.query(models.Items).all()
        json_object = app_helper.create_json(query)
        return json_object

if __name__ == '__main__':
    set_config({'DEV': True})
    app.run(host='0.0.0.0', port=5000)


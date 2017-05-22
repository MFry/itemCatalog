from flask import Flask, render_template
import app_helper
import models
from model_pipeline import ItemCatalogPipeline


app = Flask(__name__)

app.config.update(dict(
    DEBUG=True,
    PIPELINE=ItemCatalogPipeline()
))


@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/j/items', methods=['GET'])
def get_all_items():
    session = app.config['PIPELINE'].session()
    end_session = app.config['PIPELINE'].finalize_session
    query = session.query(models.Items).all()
    # end_session(session)
    return app_helper.create_json(query)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


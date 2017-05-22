import app


def test_app():
    app.set_config(dict(TESTING=True))
    test_app = app.app.test_client()
    response = test_app.get('/')
    print(response)
    print(response.headers)
    print(response.data)
    assert response.status_code < 400
    assert response.data

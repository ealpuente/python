import flask

app = flask.Flask(__name__)

@app.route('/')
def Hello():
	return 'Hello word'

if __name__ == '__main__':
	app.run()
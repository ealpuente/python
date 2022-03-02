from flask import Flask, redirect, url_for
from flask import render_template
from flask import request

from forms import PostForm, SignupForm

app = Flask(__name__)

app.config['SECRET_KEY'] = '7110c8ae51a4b5af97be6534caef90e4bb9bdcb3380af008f90b23a5d1616bf319bc298105da20fe'

posts = []

@app.route('/')
def index():
	print(len(posts))
	return render_template("index.html", posts = posts)

@app.route('/p/<string:slug>/')
def show_post(slug):
	return render_template("post_view.html", slug_title = slug)

@app.route("/admin/post/", methods=['GET', 'POST'], defaults={'post_id': None})
@app.route("/admin/post/<int:post_id>/", methods=['GET', 'POST'])
def update_post(post_id = None):

	form = PostForm()
	if request.method == 'POST':

		title = form.title.data
		slug = form.slug.data
		content = form.content.data

		post = {'title': title, 'title_slug': slug, 'content': content}
		posts.append(post)

		return redirect(url_for('index'))

	return render_template('/admin/post_form.html', form=form)



@app.route('/signup/', methods=["GET", "POST"])
def signup():

	print("Signup Init")
	form = SignupForm()
	if form.validate_on_submit():

		name = form.name.data
		email = form.email.data
		password = form.password.data

		next = request.args.get('next', None)
		if next:
			return redirect(next)
		return redirect(url_for('index'))
	print("Signup GET")
	return render_template("signup_form.html", form=form)
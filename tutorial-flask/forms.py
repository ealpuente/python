from cgitb import text
from email import contentmanager
from logging.handlers import SYSLOG_UDP_PORT
from turtle import title
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField
from wtforms.validators import DataRequired, Email, Length

class SignupForm(FlaskForm):
    name = StringField('Nombre', validators=[DataRequired(), Length(max=64)])
    password = PasswordField('Password', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    submit = SubmitField('Registrar')

class PostForm(FlaskForm):
	title = StringField('Titulo', validators=[DataRequired(), Length(max=64)])
	slug = StringField('Slug', validators=[DataRequired(), Length(max=20)])
	content = StringField('Texto', validators=[DataRequired(), Length(max=1000)])
	submit = SubmitField('Alta')

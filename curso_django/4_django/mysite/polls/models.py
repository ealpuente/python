from django.db import models
from django.db.models.base import Model

# Create your models here.

'''
**** HACER CAMBIOS EN EL MODELO ***
Cambie sus modelos (en models.py).
Ejecute el comando python manage.py makemigrations para crear migraciones para esos cambios
Ejecute el comando python manage.py migrate para aplicar esos cambios a la base de datos.
'''


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('publication date')

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=120)
    votes = models.IntegerField(default=0)
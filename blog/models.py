from operator import mod
from unicodedata import category
from django.db import models

# Create your models here.





class Article (models.Model):
    title = models.CharField(max_length=1000)
    picture = models.CharField(max_length=2000)
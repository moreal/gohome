from django.db import models
from django_countries.fields import CountryField

class School(models.Model):
    name = models.CharField(max_length=100, default='')
    site = models.URLField()
    country = CountryField()

class HomeComingDay(models.Model):
    school = models.ForeignKey(School, on_delete=models.DO_NOTHING)
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()

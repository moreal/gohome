from django.db import models
from django_countries.fields import CountryField

class School(models.Model):
    site = models.CharField(max_length=2083)
    country = CountryField()

class HomeComingDay(models.Model):
    school_id = models.ForeignKey(to="School", on_delete=models.DO_NOTHING)
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()

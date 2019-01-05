from django.urls import path
from . import views
from .views.api import time


urlpatterns = [
    path('', views.index, name='index'),
    path('api/time', time.TimeView, name='time_view'),
]
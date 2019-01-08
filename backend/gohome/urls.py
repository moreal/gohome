from django.urls import path
from . import views
from .views.api import time


urlpatterns = [
    path('', views.serve_index, name='serve_index'),
    path('<path>', views.serve_index, name='serve_index'),
    path('api/time', time.TimeView.as_view(), name='time_view'),
]
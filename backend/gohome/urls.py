from django.urls import path, include
from . import views
from .views.api import time, schools
from rest_framework import routers

router = routers.DefaultRouter()
router.register('schools', schools.SchoolView)


urlpatterns = [
    path('schools', include(router.urls)),
    path('', views.serve_index, name='serve_index'),
    path('<path>', views.serve_index, name='serve_index'),
    path('api/time', time.TimeView.as_view(), name='time_view'),
]
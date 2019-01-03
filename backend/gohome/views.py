from django.shortcuts import render
from django.http import HttpResponse
from django.views.static import serve

def index(request):
    return serve(request, 'index.html', 'static')


def serve_static(request, path):
    return serve(request, path, 'static')
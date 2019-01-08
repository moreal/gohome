from django.shortcuts import render
from django.http import HttpResponse
from django.views.static import serve


def serve_index(request, path='index.html'):
    return serve(request, path, 'static')


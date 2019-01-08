from django.views import View
from django.http import HttpRequest, HttpResponse


class TimeView(View):

    def get(self, request: HttpRequest, *args, **kwargs):
        return HttpResponse("{'time':'test'}")

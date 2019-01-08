from django.views import View
from django.http import HttpRequest, HttpResponse
import json, time


class TimeView(View):

    def get(self, request: HttpRequest, *args, **kwargs):
        return HttpResponse(json.dumps({
            'time': time.time(),
            'school_name': '대마고앙조아용',
        }))

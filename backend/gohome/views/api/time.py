from django.views import View
from django.http import HttpRequest, HttpResponse
import json
import time
from gohome.models import HomeComingDay


class TimeView(View):

    def get(self, request, *args, **kwargs):
        school_name = request.COOKIES.get('school_name', '대덕소프트웨어마이스터고등학교')
        day = HomeComingDay.objects.select_related('school').get(school__name=school_name)

        return HttpResponse(json.dumps({
            'time': int(day.end_datetime.timestamp()) * 1000,
            'school_name': day.school.name,
        }))

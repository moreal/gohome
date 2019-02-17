from django.views import View
from django.http import HttpRequest, HttpResponse

import json

from gohome.models import School


class SchoolView(View):

    def get(self, request, *args, **kwargs):
        school_name = request.params.get('school_name', '')
        school: School = School.objects.all().filter(name=school_name)[0]

        return HttpResponse(json.dumps({
            'name': school.name,
            'country': school.country,
            'site': school.site,
        }))

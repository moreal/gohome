from django.views import View
from django.http import HttpRequest, HttpResponse
from typing import List
import json

from rest_framework import viewsets
from ...serializers import SchoolSerializer

from gohome.models import School

class SchoolView(viewsets.ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

# class SchoolView(View):
#
#     def get(self, request, *args, **kwargs):
#         school_name = request.params.get('school_name', '')
#
#         schools: List[School] = School.objects.all().filter(name=school_name)
#
#         data = {
#             'name': schools[0].name,
#             'country': schools[0].country,
#             'site': schools[0].site,
#         } if len(schools) > 0 else {}
#
#         return HttpResponse(json.dumps(data))

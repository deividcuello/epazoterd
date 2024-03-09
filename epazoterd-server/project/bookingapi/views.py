from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.pagination import PageNumberPagination
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class BookingApiView(APIView, PageNumberPagination):
    
    page_size = 5

    # 1. List all
    def get(self, request, *args, **kwargs):
        
        curriculum = curriculum.filter(hidden=False).order_by('-created_at')

        results = self.paginate_queryset(curriculum, request, view=self)
        serializer = CurriculumSerializer(results, many=True)
        return Response({
            'curriculum': serializer.data,
            'count': curriculumCount}, status=status.HTTP_200_OK)

     # 2. Create
    def post(self, request, *args, **kwargs):
 
        data = {
            'name': request.data.get('name'), 
        }

        get_user = AppUser.objects.all().filter(id=request.user.id)[0]

        serializer = CurriculumSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            curriculum_id = list(Curriculum.objects.all().values_list('id', flat=True))[-1]
            print(list(Curriculum.objects.all().values_list('id', flat=True)))
            log = Log(description=f"{get_user} creo un curriculum con ID {curriculum_id}")
            log.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
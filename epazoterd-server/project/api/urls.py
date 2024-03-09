from django.urls import path, include
from rest_framework import routers
# from users.views import UserViewSet

urlpatterns = [
    path("booking/", include("bookingapi.urls")),
    path('api-auth/', include('rest_framework.urls')),
]
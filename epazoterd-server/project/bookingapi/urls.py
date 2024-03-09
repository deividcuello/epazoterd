from django.urls import path, include
from .views import (
    BookingApiView,
)

urlpatterns = [
    path('', BookingApiView.as_view()),
]
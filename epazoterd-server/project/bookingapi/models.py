from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.conf import settings

class Booking(models.Model):

    name = models.CharField(max_length=128, blank=False, null=False)
    
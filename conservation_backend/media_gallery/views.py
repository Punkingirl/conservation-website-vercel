from django.shortcuts import render
from rest_framework import viewsets
from .models import GalleryImage
from .serializers import GalleryImageSerializer

# Create your views here.

class GalleryImageViewSet(viewsets.ModelViewSet):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer

from rest_framework import serializers
from .models import GalleryImage
 
class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = ['id', 'title', 'image', 'caption', 'category', 'created_at'] 
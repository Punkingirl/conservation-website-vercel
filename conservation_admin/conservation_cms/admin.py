from django.contrib import admin
from .models import BlogPost, GalleryImage

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at', 'published')
    list_filter = ('published', 'created_at')
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'created_at'

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploaded_at', 'featured')
    list_filter = ('featured', 'uploaded_at')
    search_fields = ('title', 'description')
    date_hierarchy = 'uploaded_at'

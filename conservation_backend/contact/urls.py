from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'messages', views.ContactMessageViewSet)
router.register(r'subscribers', views.NewsletterSubscriberViewSet)

urlpatterns = [
    path('', include(router.urls)),
] 
from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import ContactMessage, NewsletterSubscriber
from .serializers import ContactMessageSerializer, NewsletterSubscriberSerializer

# Create your views here.

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def get_permissions(self):
        if self.action in ['create']:
            return [AllowAny()]
        return [IsAuthenticated()]

    @action(detail=True, methods=['post'])
    def mark_as_read(self, request, pk=None):
        message = self.get_object()
        message.is_read = True
        message.save()
        return Response({'status': 'message marked as read'})

class NewsletterSubscriberViewSet(viewsets.ModelViewSet):
    queryset = NewsletterSubscriber.objects.all()
    serializer_class = NewsletterSubscriberSerializer

    def get_permissions(self):
        if self.action in ['create']:
            return [AllowAny()]
        return [IsAuthenticated()]

    def create(self, request, *args, **kwargs):
        email = request.data.get('email')
        if NewsletterSubscriber.objects.filter(email=email).exists():
            return Response(
                {'error': 'This email is already subscribed'},
                status=status.HTTP_400_BAD_REQUEST
            )
        return super().create(request, *args, **kwargs)

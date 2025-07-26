from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from contact.models import ContactMessage, NewsletterSubscriber
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate

@csrf_exempt
def contact_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            # Always save the message to the database
            ContactMessage.objects.create(name=name, email=email, message=message)

            # Try to send an email, but don't let it block saving
            try:
                send_mail(
                    subject=f"New Contact Message from {name}",
                    message=f"From: {name} <{email}>\n\n{message}",
                    from_email=None,  # Uses DEFAULT_FROM_EMAIL
                    recipient_list=['sophiagg712@gmail.com'],  # Or use settings.ADMIN_EMAIL
                    fail_silently=True,  # Don't crash if email fails
                )
            except Exception as e:
                # Optionally log the error
                print(f"Email send failed: {e}")

            return JsonResponse({'success': True})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=405)

@csrf_exempt
def newsletter_signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        if not email:
            return JsonResponse({'error': 'Email required'}, status=400)
        obj, created = NewsletterSubscriber.objects.get_or_create(email=email)
        return JsonResponse({'success': True, 'created': created})
    elif request.method == 'GET':
        return JsonResponse({'info': 'Please POST your email as JSON to sign up for the newsletter. Example: {\"email\": \"your@email.com\"}'})
    return JsonResponse({'error': 'Invalid request'}, status=400)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            # Optionally, return a token here if using token auth
            return Response({"success": True, "message": "Login successful"})
        return Response({"success": False, "message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED) 
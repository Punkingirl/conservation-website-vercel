from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import NewsletterSignup

@csrf_exempt
def contact_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        send_mail(
            f"Contact Form: {subject}",
            f"From: {name} <{email}>\n\n{message}",
            'your_email@example.com',  # Replace with your email
            ['your_email@example.com'],  # Replace with your email
        )
        return JsonResponse({'success': True})
    return JsonResponse({'error': 'Invalid request'}, status=400)

@csrf_exempt
def newsletter_signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        if not email:
            return JsonResponse({'error': 'Email required'}, status=400)
        obj, created = NewsletterSignup.objects.get_or_create(email=email)
        return JsonResponse({'success': True, 'created': created})
    elif request.method == 'GET':
        return JsonResponse({'info': 'Please POST your email as JSON to sign up for the newsletter. Example: {"email": "your@email.com"}'})
    return JsonResponse({'error': 'Invalid request'}, status=400) 
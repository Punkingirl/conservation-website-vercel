from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage

@receiver(post_save, sender=ContactMessage)
def send_contact_notification(sender, instance, created, **kwargs):
    if created:  # Only send email for new messages
        subject = f'New Contact Message from {instance.name}'
        message = f'''
New contact message received:

From: {instance.name} ({instance.email})
Time: {instance.created_at}

Message:
{instance.message}

You can view and manage this message in the admin interface.
'''
        # Send email to admin
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.ADMIN_EMAIL],
            fail_silently=False,
        ) 
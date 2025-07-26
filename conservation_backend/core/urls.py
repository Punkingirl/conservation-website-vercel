from django.urls import path
from .views import contact_view, newsletter_signup, LoginView
 
urlpatterns = [
    path('contact/', contact_view, name='contact'),
    path('newsletter/', newsletter_signup, name='newsletter-signup'),
    path('auth/login/', LoginView.as_view(), name='api-login'),
] 
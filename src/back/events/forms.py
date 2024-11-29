from django import forms
from .models import Event
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class SignupForm(UserCreationForm):
    ROLE_CHOICES = [
        ('athlete', 'Athlete'),
        ('coach', 'Coach'),
        ('partner', 'Partner'),
        ('administrator', 'Administrator'),
    ]
    role = forms.ChoiceField(choices=ROLE_CHOICES, required=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2', 'role']


class LoginForm(AuthenticationForm):
    username = forms.CharField(label="Username", max_length=254)


class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = ['title', 'description', 'start_date', 'end_date', 'location']

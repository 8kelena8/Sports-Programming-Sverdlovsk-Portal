from rest_framework.response import Response
from .models import Event, Calendar, Category, Contact, Discipline, Document, News, Partner
from .serializers import eMailSerializer, EventSerializer, CalendarSerializer, CategorySerializer, ContactSerializer, DisciplineSerializer, DocumentSerializer, NewsSerializer, PartnerSerializer, UserSerializer
from rest_framework import generics, status
from rest_framework.reverse import reverse 
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import AuthenticationForm
from .forms import SignupForm
from django.contrib.auth import logout
from django.shortcuts import redirect
from django.core.mail import send_mail


def signup_view(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            user = form.save()
            # Save the role in the user's profile if you extend user data later
            return redirect('/api')
    else:
        form = SignupForm()
    return render(request, 'signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = authenticate(
                request, 
                username=form.cleaned_data['username'], 
                password=form.cleaned_data['password']
            )
            if user is not None:
                login(request, user)
                return redirect('/api')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})


def logout_view(request):
    logout(request)
    return redirect('login') 

from django.contrib.auth import get_user_model

def activate_view(request, user_id):
    User = get_user_model()
    user = User.objects.get(pk=user_id)
    user.is_active = True
    user.save()
    return redirect('login')



class ApiRoot(APIView):
    name = 'api-root'
    permission_classes = [AllowAny]
    def get(self, request, *args, **kwargs): 
        return Response({ 
            'event-list': reverse(EventListApiView.name, request=request),
            'category-list': reverse(CategoryListApiView.name, request=request),
            'contact-list': reverse(ContactListApiView.name, request=request),
            'calendar-list': reverse(CalendarListApiView.name, request=request),
            'discipline-list': reverse(DisciplineListApiView.name, request=request),
            'document-list': reverse(DocumentListApiView.name, request=request),
            'news-list': reverse(NewsListApiView.name, request=request),
            'partner-list': reverse(PartnerListApiView.name, request=request),
            'email-send': reverse(eMailView.name, request=request)
            })  
    
class EventListApiView(generics.ListCreateAPIView): 
    permission_classes = [AllowAny]
    queryset = Event.objects.all() 
    serializer_class = EventSerializer 
    name = 'event-list'

class EventDetail(generics.RetrieveUpdateDestroyAPIView): 
    permission_classes = [AllowAny]
    queryset = Event.objects.all() 
    serializer_class = EventSerializer 
    name = 'event-detail'

class CalendarListApiView(generics.ListCreateAPIView): 
    permission_classes = [AllowAny]
    queryset = Calendar.objects.all() 
    serializer_class = CalendarSerializer 
    name = 'calendar-list'


class CalendarDetail(generics.RetrieveUpdateDestroyAPIView): 
    permission_classes = [AllowAny]
    queryset = Calendar.objects.all() 
    serializer_class = CalendarSerializer 
    name = 'calendar-detail'


class CategoryListApiView(generics.ListCreateAPIView): 
    permission_classes = [AllowAny]
    queryset = Category.objects.all() 
    serializer_class = CategorySerializer 
    name = 'category-list'

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView): 
    permission_classes = [AllowAny]
    queryset = Category.objects.all() 
    serializer_class = CategorySerializer
    name = 'category-detail'


class ContactListApiView(generics.ListCreateAPIView): 
    permission_classes = [AllowAny]
    queryset = Contact.objects.all() 
    serializer_class = ContactSerializer 
    name = 'contact-list'

class ContactDetail(generics.RetrieveUpdateDestroyAPIView): 
    permission_classes = [AllowAny]
    queryset = Contact.objects.all() 
    serializer_class = ContactSerializer 
    name = 'contact-detail'


class DocumentListApiView(generics.ListCreateAPIView): 
    permission_classes = [AllowAny]
    queryset = Document.objects.all() 
    serializer_class = DocumentSerializer 
    name = 'document-list'

class DocumentDetail(generics.RetrieveUpdateDestroyAPIView): 
    permission_classes = [AllowAny]
    queryset = Document.objects.all() 
    serializer_class = DocumentSerializer 
    name = 'document-detail'


class DisciplineListApiView(generics.ListCreateAPIView): 
    permission_classes = [AllowAny]
    queryset = Discipline.objects.all() 
    serializer_class = DisciplineSerializer# 
    name = 'discipline-list'


class DisciplineDetail(generics.RetrieveUpdateDestroyAPIView): 
    permission_classes = [AllowAny]
    queryset = Discipline.objects.all() 
    serializer_class = DisciplineSerializer 
    name = 'discipline-detail'


class PartnerListApiView(generics.ListCreateAPIView): 
    permission_classes = [AllowAny]
    queryset = Partner.objects.all() 
    serializer_class = PartnerSerializer 
    name = 'partner-list'

class PartnerDetail(generics.RetrieveUpdateDestroyAPIView): 
    permission_classes = [AllowAny]
    queryset = Partner.objects.all() 
    serializer_class = PartnerSerializer 
    name = 'partner-detail'


class NewsListApiView(generics.ListCreateAPIView): 
    permission_classes = [AllowAny]
    queryset = News.objects.all() 
    serializer_class = NewsSerializer
    name = 'news-list'

class NewsDetail(generics.RetrieveUpdateDestroyAPIView): 
    permission_classes = [AllowAny]
    queryset = News.objects.all() 
    serializer_class = NewsSerializer
    name = 'news-detail'


class eMailView(APIView):
    permission_classes = [AllowAny]
    name = 'email-send'
    def post(self, request):
        serializer = eMailSerializer(data=request.data)
        if serializer.is_valid():
            # Extract validated data
            email = serializer.validated_data['email']
            subject = serializer.validated_data['subject']
            message = serializer.validated_data['message']

            # Compose the email content
            full_message = f"Message from: {email}\n\n{message}"

            # Send the email
            try:
                send_mail(
                    subject=subject,
                    message=full_message,
                    from_email=email,  # Sender's email
                    recipient_list=['sverdlovsk@fsp-russia.com'],  # Recipient's email
                    fail_silently=False,
                )
                return Response({"message": "Your message has been sent successfully."}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({"error": f"Failed to send email. {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework import serializers
from .models import Calendar, Category, Contact, Discipline, Document, Event, News, Partner, User

class CalendarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calendar
        fields = ["event", "date", "category"]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name"]

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["user", "name", "email", "subject", "message", "submission_date"]

class DisciplineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discipline
        fields = ["name", "history", "rules"]

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ["title", "category", "upload_date", "file_link"]

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ["title", "description", "start_date", "end_date", "location", "category", "discipline", "guest", "age"]

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ["title", "summary", "publication_date", "full_content", "main_image"]      

class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ["name", "logo", "promotional_content"]    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "password", "role"]                                              

from rest_framework import serializers

class eMailSerializer(serializers.Serializer):
    email = serializers.EmailField()
    subject = serializers.CharField(max_length=100)
    message = serializers.CharField()

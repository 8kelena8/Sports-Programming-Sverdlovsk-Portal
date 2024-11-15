from django.db import models

class User(models.Model):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('user', 'User'),
        ('guest', 'Guest'),
    ]
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    def __str__(self):
        return self.username

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Discipline(models.Model):
    name = models.CharField(max_length=100)
    history = models.TextField(blank=True, null=True)
    rules = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    location = models.CharField(max_length=150, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    discipline = models.ForeignKey(Discipline, on_delete=models.CASCADE, null=True)
    guest = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.title

class Calendar(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    date = models.DateField()
    category = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.event.title} - {self.date}"

class Contact(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=150, blank=True, null=True)
    message = models.TextField()
    submission_date = models.DateField()

    def __str__(self):
        return self.subject or "Contact Inquiry"

class News(models.Model):
    title = models.CharField(max_length=150)
    summary = models.TextField(blank=True, null=True)
    publication_date = models.DateField()
    full_content = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title

class Partner(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='partners/', blank=True, null=True)
    promotional_content = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Document(models.Model):
    title = models.CharField(max_length=150)
    category = models.CharField(max_length=100)
    upload_date = models.DateField()
    file_link = models.URLField()

    def __str__(self):
        return self.title

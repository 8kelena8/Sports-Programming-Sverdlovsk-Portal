from django.contrib import admin
from .models import User, Category, Discipline, Event, Calendar, Contact, News, Partner, Document

# admin.site.register(User)
admin.site.register(Category)
admin.site.register(Discipline)
admin.site.register(Event)
admin.site.register(Calendar)
admin.site.register(Contact)
admin.site.register(News)
admin.site.register(Partner)
admin.site.register(Document)

from django.urls import path
from .views import signup_view, login_view, activate_view, logout_view
from .views import (
    EventListApiView, ApiRoot, CalendarListApiView, CategoryListApiView, ContactListApiView, 
    DisciplineListApiView, DocumentListApiView, NewsListApiView, PartnerListApiView, ApiRoot,
    EventDetail, CalendarDetail, CategoryDetail, ContactDetail, DisciplineDetail, DocumentDetail,
    NewsDetail, PartnerDetail, eMailView
)

urlpatterns = [

    path('api/', ApiRoot.as_view(), name=ApiRoot.name),

    path('event-list/', EventListApiView.as_view(), name='event-list'),
    path('category-list/', CategoryListApiView.as_view(), name='category-list'),
    path('contact-list/', ContactListApiView.as_view(), name='contact-list'),
    path('calendar-list/', CalendarListApiView.as_view(), name='calendar-list'),
    path('discipline-list/', DisciplineListApiView.as_view(), name='discipline-list'),
    path('document-list/', DocumentListApiView.as_view(), name='document-list'),
    path('news-list/', NewsListApiView.as_view(), name='news-list'),
    path('partner-list/', PartnerListApiView.as_view(), name='partner-list'),

    path('event-detail/<int:pk>/', EventDetail.as_view(), name='event-detail'),
    path('category-detail/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('contact-detail/<int:pk>/', ContactDetail.as_view(), name='contact-detail'),
    path('calendar-detail/<int:pk>/', CalendarDetail.as_view(), name='calendar-detail'),
    path('discipline-detail/<int:pk>/', DisciplineDetail.as_view(), name='discipline-detail'),
    path('document-detail/<int:pk>/', DocumentDetail.as_view(), name='document-detail'),
    path('news-detail/<int:pk>/', NewsDetail.as_view(), name='news-detail'),
    path('partner-detail/<int:pk>/', PartnerDetail.as_view(), name='partner-detail'),

    path('email-send/', eMailView.as_view(), name='email-send'),

]
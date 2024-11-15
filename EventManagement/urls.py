from django.contrib import admin
from django.urls import include, path
from events import views  # Import views from the events app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('events/', include('events.urls')),  # Include URLs from the events app
    path('', views.create_event, name='home'),  # Set the root URL to the create_event view
]

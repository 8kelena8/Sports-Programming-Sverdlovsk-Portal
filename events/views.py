from django.shortcuts import render, get_object_or_404, redirect
from .models import Event
from .forms import EventForm
#for testing
# Create Event
from django.shortcuts import render, redirect
from .forms import EventForm

def create_event(request):
    if request.method == 'POST':
        form = EventForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')  
    else:
        form = EventForm()
    return render(request, 'events/create_event.html', {'form': form})


# Update Event
def update_event(request, event_id):
    event = get_object_or_404(Event, id=event_id)
    if request.method == 'POST':
        form = EventForm(request.POST, instance=event)
        if form.is_valid():
            form.save()
            return redirect('event_list')
    else:
        form = EventForm(instance=event)
    return render(request, 'events/update_event.html', {'form': form})

# Delete Event
def delete_event(request, event_id):
    event = get_object_or_404(Event, id=event_id)
    event.delete()
    return redirect('event_list')

###for testing
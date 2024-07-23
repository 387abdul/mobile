import os
import json
from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):

    # Define the path to the JSON file
    json_file_path = os.path.join(settings.BASE_DIR, 'mysite', 'items.json')

    # Load the JSON data
    with open(json_file_path, 'r') as json_file:
        items = json.load(json_file)

    # Pass the data to the template
    context = {'items': items}
    
    return render(request, 'mysite/index.html', context)

def  seeMore(request):
    return render(request, 'mysite/seeMore.html')
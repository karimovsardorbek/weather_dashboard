from django.http import JsonResponse
from rest_framework.decorators import api_view
import requests

@api_view(['GET'])
def get_weather(request):
    city = request.GET.get('city', 'New York')  # Default to New York if no city provided
    api_key = '0258248a2f493261f57a28c34635480c'
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'

    response = requests.get(url)
    data = response.json()

    return JsonResponse({
        'city': city,
        'temperature': data['main']['temp'],
        'weather_condition': data['weather'][0]['main'],
    })

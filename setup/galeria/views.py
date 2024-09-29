from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def pagina_2(request):
    return render(request, '2pagina.html')
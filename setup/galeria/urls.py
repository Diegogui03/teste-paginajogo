from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('2pagina/', views.pagina_2, name='2pagina'),
]
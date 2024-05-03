from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    path('', views.index, name='home'),
    path('Menu/', views.Menu, name='Menu'),
    path('contacts/', views.contacts, name='about'),
    path('Order_Now/', views.Order_Now, name='Order_Now'),
    path('place-order/', views.place_order, name='place_order')
   
]

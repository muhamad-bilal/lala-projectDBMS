"""
URL configuration for my_DBMS project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include 
from . import view

admin.site.site_header = "My_DBMS Admin"
admin.site.site_title = "My_DBMS Admin Portal"  
admin.site.index_title = "Welcome to My_DBMS Portal"        

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls_home')),
    path('Menu/', include('home.urls_home')),
    path('contacts/', include('home.urls_home')),
    path('Order_Now/', include('home.urls_home')),
    path('place_order/', include('home.urls_home')),
    path('restaurant/', view.restaurant, name='restaurant'),
    path('checkout/', view.checkout, name='checkout'),
    path('orderconfrimed/', view.order, name='orderconfrimed'),



]

# views.py

from django.shortcuts import render

def restaurant(request):
    return render(request, 'restaurant.html')

def checkout(request):
    return render(request, 'checkout.html')

def order(request):
    return render(request, 'orderconfrimed.html')


from django.shortcuts import render, HttpResponse


# Create your views0 here.

def index(request):
    return render(request, 'index.html')

def Menu(request):
    return render(request, 'Menu.html')


def contacts(request):
    return HttpResponse("Hello, World! This is the contacts page of my_DBMS.")

def Order_Now(request):
    return render(request, 'Order_Now.html')

def place_order(request):
    return render(request, 'place_order.html')


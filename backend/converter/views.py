from django.shortcuts import render
from rest_framework import generics
from .models import Currency
from .serializer import CurrencySerializer
# Create your views here.

class CurrencyList(generics.ListAPIView):
    queryset = Currency.objects.all()
    serializer_class = CurrencySerializer
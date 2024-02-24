from .views import CurrencyList
from django.urls import path

urlpatterns = [
    path("currencies/", CurrencyList.as_view(), name='currency_list')
]
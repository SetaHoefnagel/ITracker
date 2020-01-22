from django.shortcuts import render, get_object_or_404
from itracker.models import Parcel
from rest_framework import viewsets, generics
from rest_framework.response import Response
from .serializers import ParcelSerializer


# ViewSets define the view behavior.
class ParcelViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Parcel.objects.all()
    serializer_class = ParcelSerializer


class ParcelItem(viewsets.ReadOnlyModelViewSet):
    def retrieve_by_barcode(self, request, barcode=None):
        return Response(ParcelSerializer(get_object_or_404(Parcel, barcode=barcode)).data)

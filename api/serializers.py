from itracker.models import (Parcel, Recipient)
from rest_framework import serializers


class RecipientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipient
        fields = ['id', 'first_name', 'last_name', 'address', 'zip']


# Serializers define the API representation.
class ParcelSerializer(serializers.HyperlinkedModelSerializer):
    recipient = RecipientSerializer()

    class Meta:
        model = Parcel
        fields = ['id', 'barcode', 'status_code', 'signature', 'recipient']

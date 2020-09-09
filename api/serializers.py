from itracker.models import (Parcel, Recipient, ShippingStatus)
from rest_framework import serializers


class RecipientSerializer(serializers.HyperlinkedModelSerializer):
    zip = serializers.SerializerMethodField()
    full_name = serializers.SerializerMethodField()
    address = serializers.SerializerMethodField()
    telephone = serializers.SerializerMethodField()
    l = lambda self,x: ''.join(['*' for y in x])

    def get_zip(self, obj):
        return obj.zip[:4]

    def get_full_name(self, obj):
        return '%s. %s' % (obj.first_name[:1], obj.last_name)

    def get_address(self, obj):
        return '%s%s%s' % (obj.address[:1], self.l(obj.address[1:-4]), obj.address[-4::1])

    def get_telephone(self, obj):
        return '%s%s' % (self.l(obj.telephone[:4]), obj.telephone[4:])

    class Meta:
        model = Recipient
        fields = ['id', 'full_name', 'telephone', 'address', 'zip']



# Serializers define the API representation.
class ShippingStatusSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ShippingStatus
        fields = ['status', 'updated', 'description']


# Serializers define the API representation.
class ParcelSerializer(serializers.HyperlinkedModelSerializer):
    recipient = RecipientSerializer()
    shipping_statuses = ShippingStatusSerializer(many=True)

    class Meta:
        model = Parcel
        fields = ['id', 'barcode', 'signature_required', 'recipient', 'shipping_statuses']


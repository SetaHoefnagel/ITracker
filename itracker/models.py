from django.db import models

from uuid import uuid4
import random

parcel_status = (
    ('not_shipped', 'Not shipped'),
    ('sent_distribution', 'sent to distribution center'),
    ('sorted_distribution', 'sorted at distribution center'),
    ('shipped', 'Shipped'),
    ('delivered', 'Delivered'),
)


# A function that will generate a barcode, e.g. SDHL_112233445566AAFF, this should come close to being unique.
def generate_barcode():
    return 'SDHL_%s' % ('%016x' % random.randrange(16 ** 16))


# The class that will store the parcel data.
class Parcel(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True)
    barcode = models.CharField(default=generate_barcode, max_length=21)
    recipient = models.ForeignKey('Recipient', on_delete=models.CASCADE)
    status_code = models.CharField(choices=parcel_status, max_length=32)
    signature = models.BooleanField()

    def __str__(self):
        return '%s %s ' % (self.barcode, self.status_code)


class Recipient(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True)
    first_name = models.CharField(max_length=63)
    last_name = models.CharField(max_length=63)
    address = models.CharField(max_length=63)
    zip = models.CharField(max_length=7)

    def __str__(self):
        return '%s %s - %s' % (self.first_name, self.last_name, self.address)

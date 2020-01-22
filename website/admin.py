from django.contrib import admin

from itracker.models import (Parcel, Recipient)

# Register your models here.
admin.site.register(Parcel)
admin.site.register(Recipient)

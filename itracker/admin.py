from django.contrib import admin

# Register your models here.
from itracker.models import (Parcel, Recipient, ShippingStatus)

class InlineShippingStatus(admin.TabularInline):
    model = ShippingStatus

class ParcelAdmin(admin.ModelAdmin):
    inlines = [InlineShippingStatus]

# Register your models here.
admin.site.register(Parcel, ParcelAdmin)
admin.site.register(Recipient)
admin.site.register(ShippingStatus)

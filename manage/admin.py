from django.contrib import admin
from .models import User, Mill, Buyer, Transport, Item, Entry, Product

# Register your models here.

admin.site.register(User)
admin.site.register(Mill)
admin.site.register(Buyer)
admin.site.register(Transport)
admin.site.register(Item)
admin.site.register(Entry)
admin.site.register(Product)
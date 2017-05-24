from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=220)
    password = models.CharField(max_length=8)
    entries = models.IntegerField()

    def __str__(self):
        return self.username



class Product(models.Model):

    name = models.CharField(max_length=220)
    price = models.IntegerField()


    def __str__(self):
        return self.name


class Mill(models.Model):

    name = models.CharField(max_length=220)
    code = models.CharField(max_length=10)
    address = models.TextField()
    product = models.ManyToManyField(Product)

    def __str__(self):
        return self.name
    
class Buyer(models.Model):
    name = models.CharField(max_length=220)
    code = models.CharField(max_length=10)
    address = models.TextField()

    def __str__(self):
        return self.name
   
class Transport(models.Model):

    name = models.CharField(max_length = 220)

    def __str__(self):
        return self.name
    
class Item(models.Model):

    sno = models.IntegerField()
    name = models.CharField(max_length=220)
    type = models.CharField(max_length=220)
    no = models.IntegerField()
    bail = models.IntegerField()
    quantity = models.IntegerField()
    price = models.IntegerField()
    total = models.IntegerField()

    def __str__(self):
        return self.name

class Entry(models.Model):

    no = models.IntegerField()
    invoice_no = models.IntegerField()
    date = models.DateField()
    mill = models.ForeignKey(Mill, on_delete=models.CASCADE,)
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE)
    transport = models.ForeignKey(Transport, on_delete=models.CASCADE)
    l_no = models.IntegerField()
    l_date = models.DateField()
    item = models.ManyToManyField(Item)



    def __str__(self):  
        return str(self.invoice_no)


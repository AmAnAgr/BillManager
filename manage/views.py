from django.shortcuts import render, redirect
from django.http import HttpResponse
import json

from .models import User, Entry, Mill, Buyer, Transport, Item
# Create your views here.

def home(request):
    return render(request, 'manage/home.html', {})


def login(request):
    if request.POST:
        m = User.objects.get(username=request.POST['uname'])
        if m.password == request.POST['pass']:
            request.session['member_id'] = m.id
            return redirect('/account/')
        else:
            return ("try again")
    else:
        return render(request, 'manage/login.html')

def account(request):


    user = User.objects.get(id=request.session['member_id'])
    last_entry = Entry.objects.get(no=user.entries)
    mills = Mill.objects.filter()
    buyer = Buyer.objects.filter()
    transport = Transport.objects.filter()

    context = {

        "entry_no" : user.entries + 1,          # 1 added to the no of enteries already made
        "date"     : str(last_entry.date),
        "last"     : last_entry,
        "mills"    : mills,
        "buyer"    : buyer,
        "transp"    : transport,
        

    }

    return render(request, 'manage/bill.html', context)     




def save(request):

    data = (request.POST['data'])
    dic  = json.loads(data)
    mill = Mill.objects.get(code=dic['mill'])
    buyer = Buyer.objects.get(code=dic['buyer'])
    trans = Transport.objects.get(name=dic['trans'])
    item = dic['item']
    i = Item.objects.create(

            sno = item['sno'],
            name = item['name'],
            type = item['type'],
            no = item['no'],
            bail = item['bail'],
            quantity = item['quantity'],
            price = item['price'],
            total = item['total']
        )

    e = Entry.objects.create(


        no = dic['entry_no'],
        invoice_no = dic['invoice'],
        date = dic['date'],
        mill=mill,
        buyer=buyer,
        transport=trans,
        l_no=dic['lno'],
        l_date=dic['ldate'],

        )

    e.item.add(i)

    return HttpResponse(data)
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User,CustomUser,Plan

# from IPython.display import Markdown
from django.http import JsonResponse


    

@api_view(['GET', 'POST'])
def user_data(request):
    if request.method == 'POST':
        # Handle POST request: saving new student data
        parts=[]

        email = request.data.get('email')
        password= request.data.get('password')
       
        # Save the student data
        
        user = User.objects.create(email=email,password=password)
        return Response({"message": "user data saved", "password": password, "email": email})

    elif request.method == 'GET':
        # Handle GET request: retrieving all students data
        
        users = User.objects.all()
        user_list = [{"email": user.email,"password": user.password} for user in users]
        
        return Response({"users": user_list})
    



@api_view(['GET', 'POST'])
def personalinfo(request):
    if request.method == 'POST':
        # Handle POST request: saving new student data
        parts=[]

        age = request.data.get('age')
        weight = request.data.get('weight')
        height=request.data.get('height')
        name = request.data.get('name')
        phone_no=request.data.get('phone_no')
        dob=request.data.get('dob')
        planname = request.data.get('planname')
        

       
        # Save the student data
        
        customuser = CustomUser.objects.create(name=name,phone_no=phone_no,dob=dob,age=age,weight=weight,height=height,planname=planname)
        return Response({"message": "user data saved", "name":name,"phone_no":phone_no,"dob":dob,"age":age, "weight":weight,'height':height, "planname":planname})

    elif request.method == 'GET':
        # Handle GET request: retrieving all students data
        customusers = CustomUser.objects.all()
        customuser_list = [{"name":customuser.name,"phone_no":customuser.phone_no,"dob":customuser.dob,"age": customuser.age, "weight": customuser.weight ,'height':customuser.height,"planname":customuser.planname} for customuser in customusers]
        
        return Response({"customusers": customuser_list})
    






@api_view(['GET', 'POST'])
def plan_data(request):
    if request.method == 'POST':
        
        planname = request.data.get('planname')
        price=request.data.get('price')
        features=request.data.get('features')
        

        plandetail= Plan.objects.create(planname=planname,price=price,features=features)
        return Response({"message": "user data saved", "planname":planname,"price":price,"features":features})

    elif request.method == 'GET':
        # Handle GET request: retrieving all students data
        plandetails = Plan.objects.all()
        plan_list = [{"planname":i.planname,"price":i.price,"features":i.features} for i in plandetails]
        
        return Response({"plans": plan_list})

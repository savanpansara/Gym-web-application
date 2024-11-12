from django.urls import path
from api import views

urlpatterns = [
    path('user/', views.user_data,name='user_data'),
    path('member/', views.personalinfo,name='member'),
    path('plan/', views.plan_data,name='plan'),

]
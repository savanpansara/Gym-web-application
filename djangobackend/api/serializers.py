from rest_framework import serializers
from .models import User,CustomUser,Plan


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = '__all__'





class CustomUserCreationForm(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'


class PlanCreationForm(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = '__all__'

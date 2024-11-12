from django.db import models

# Create your models here.
class User(models.Model):
  # uname = models.CharField(max_length=100)
  email = models.CharField(max_length=100)
  password=models.CharField(max_length=128,default="non")
  def __str__(self):
        return self.email





class CustomUser(models.Model):
    name=models.CharField(max_length=100,blank=True)
    phone_no=models.CharField(max_length=10,blank=True,null=True)
    dob=models.DateField(null=True)
    age = models.PositiveIntegerField(null=True, blank=True)
    weight = models.FloatField(null=True, blank=True)
    height = models.FloatField(null=True, blank=True)
    planname=models.CharField(max_length=100,null=True)
    

    def __str__(self):
        return self.name
    




class Plan(models.Model):
   planname=models.CharField(max_length=100)
   price=models.IntegerField (default=0)
   features=models.TextField()

   def __str__(self):
        return self.planname


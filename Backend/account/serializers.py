from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        # User.objects.create = save the password in a plain text
        # User.objects.create_user = automatically hash the password
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        # user = User.objects.create_user(**validated_data)  --> only for  ['username', 'email', 'password']
        return user


# In Django REST Framework, validation is usually written in the serializer because the serializer is responsible 
# for validating and converting incoming data. The view's responsibility is to receive the request, call the serializer,
#  and return the response. This separation of responsibilities keeps the code clean, reusable, and easier to maintain.
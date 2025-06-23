from rest_framework import serializers
from .models import Car, Category, Service, Application


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class CarSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Car
        fields = "__all__"


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        read_only_fields = ("status", "created_at")
        fields = "__all__"

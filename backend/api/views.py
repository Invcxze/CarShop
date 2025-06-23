from rest_framework import viewsets, mixins
from .models import Car, Category, Service, Application
from .serializers import CarSerializer, CategorySerializer, ServiceSerializer, ApplicationSerializer


class ReadOnlyCarViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer


class ReadOnlyCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ReadOnlyServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class ApplicationCreateViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

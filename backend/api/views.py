from rest_framework import viewsets, mixins, filters
from rest_framework.permissions import AllowAny

from .models import Car, Category, Service, Application
from .serializers import CarSerializer, CategorySerializer, ServiceSerializer, ApplicationSerializer
from django_filters.rest_framework import DjangoFilterBackend


class ReadOnlyCarViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Car.objects.select_related("category").all()
    serializer_class = CarSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = {
        'category': ['exact'],
        'price': ['gte', 'lte'],
    }
    ordering_fields = ['title']


class ReadOnlyCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ReadOnlyServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class ApplicationCreateViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Application.objects.select_related("car", "service").all()
    serializer_class = ApplicationSerializer
    permission_classes = [AllowAny]

from rest_framework.routers import DefaultRouter
from .views import ReadOnlyCarViewSet, ReadOnlyCategoryViewSet, ReadOnlyServiceViewSet, ApplicationCreateViewSet

router = DefaultRouter()
router.register(r"cars", ReadOnlyCarViewSet, basename="car")
router.register(r"categories", ReadOnlyCategoryViewSet, basename="category")
router.register(r"services", ReadOnlyServiceViewSet, basename="service")
router.register(r"applications", ApplicationCreateViewSet, basename="application")

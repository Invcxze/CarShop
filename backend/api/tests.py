from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Car, Category, Service, Application


class PublicAPITests(APITestCase):
    def setUp(self):
        self.category = Category.objects.create(name="Седан")
        self.car = Car.objects.create(
            title="Lada Vesta",
            description="Описание авто",
            horsepower=120,
            max_speed=180,
            category=self.category,
            image="cars/test.jpg",
        )
        self.service = Service.objects.create(title="КАСКО", description="Полное страхование", price=10000.00)

    def test_get_cars_list(self):
        url = reverse("car-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["title"], self.car.title)

    def test_get_categories_list(self):
        url = reverse("category-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["name"], self.category.name)

    def test_get_services_list(self):
        url = reverse("service-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["title"], self.service.title)

    def test_create_application_success(self):
        url = reverse("application-list")
        data = {
            "full_name": "Иван Иванов",
            "phone": "+79001112233",
            "email": "ivan@example.com",
            "message": "Хочу услугу",
            "car": self.car.id,
            "service": self.service.id,
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        app = Application.objects.get()
        self.assertEqual(app.status, "new")
        self.assertEqual(app.full_name, data["full_name"])

    def test_create_application_status_ignored(self):
        url = reverse("application-list")
        data = {
            "full_name": "Петр Петров",
            "phone": "+79005556677",
            "email": "petr@example.com",
            "message": "Хочу всё и сразу",
            "car": self.car.id,
            "service": self.service.id,
            "status": "done",
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        app = Application.objects.get()
        self.assertEqual(app.status, "new")

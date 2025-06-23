from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название категории")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"


class Car(models.Model):
    title = models.CharField(max_length=255, verbose_name="Название машины")
    description = models.TextField(verbose_name="Описание машины")
    image = models.FileField(upload_to="cars/")
    horsepower = models.IntegerField(null=True, blank=True, verbose_name="Кол-во лошадиных сил")
    max_speed = models.IntegerField(null=True, blank=True, verbose_name="Максимальная скорость")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="cars", verbose_name="Категория")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Машина"
        verbose_name_plural = "Машины"


class Service(models.Model):
    title = models.CharField(max_length=100, verbose_name="Название услуги")
    description = models.TextField(verbose_name="Описание услуги")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена услуги")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Услуга"
        verbose_name_plural = "Услуги"


class Application(models.Model):
    STATUS_CHOICES = [
        ("new", "Новая"),
        ("in_progress", "В работе"),
        ("done", "Завершена"),
        ("rejected", "Отклонена"),
    ]

    full_name = models.CharField(max_length=255, verbose_name="ФИО")
    phone = models.CharField(max_length=20, verbose_name="Номер телефона")
    email = models.EmailField(verbose_name="Почта пользователя")
    message = models.TextField(blank=True, verbose_name="Сообщение")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Создана")
    car = models.ForeignKey(Car, on_delete=models.SET_NULL, null=True, blank=True, verbose_name="Машина")
    service = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True, blank=True, verbose_name="Услуга")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="new", verbose_name="Статус заявки")

    def __str__(self):
        return f"Заявка от {self.full_name} [{self.get_status_display()}]"

    class Meta:
        verbose_name = "Заявка"
        verbose_name_plural = "Заявки"

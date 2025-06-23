from django.contrib import admin
from .models import Car, Category, Service, Application


@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "horsepower", "max_speed")
    search_fields = ("title",)
    list_filter = ("category",)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "price")
    search_fields = ("title",)


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "phone", "status", "created_at")
    list_filter = ("status", "created_at")
    search_fields = ("full_name", "email", "phone")
    readonly_fields = ("created_at",)

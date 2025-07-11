# Generated by Django 5.2.3 on 2025-06-23 08:54

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='application',
            options={'verbose_name': 'Заявка', 'verbose_name_plural': 'Заявки'},
        ),
        migrations.AlterModelOptions(
            name='car',
            options={'verbose_name': 'Машина', 'verbose_name_plural': 'Машины'},
        ),
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': 'Категория', 'verbose_name_plural': 'Категории'},
        ),
        migrations.AlterModelOptions(
            name='service',
            options={'verbose_name': 'Услуга', 'verbose_name_plural': 'Услуги'},
        ),
        migrations.AddField(
            model_name='car',
            name='price',
            field=models.PositiveIntegerField(default=0, verbose_name='Цена машины'),
        ),
        migrations.AlterField(
            model_name='application',
            name='car',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.car', verbose_name='Машина'),
        ),
        migrations.AlterField(
            model_name='application',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Создана'),
        ),
        migrations.AlterField(
            model_name='application',
            name='email',
            field=models.EmailField(max_length=254, verbose_name='Почта пользователя'),
        ),
        migrations.AlterField(
            model_name='application',
            name='full_name',
            field=models.CharField(max_length=255, verbose_name='ФИО'),
        ),
        migrations.AlterField(
            model_name='application',
            name='message',
            field=models.TextField(blank=True, verbose_name='Сообщение'),
        ),
        migrations.AlterField(
            model_name='application',
            name='phone',
            field=models.CharField(max_length=20, verbose_name='Номер телефона'),
        ),
        migrations.AlterField(
            model_name='application',
            name='service',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.service', verbose_name='Услуга'),
        ),
        migrations.AlterField(
            model_name='application',
            name='status',
            field=models.CharField(choices=[('new', 'Новая'), ('in_progress', 'В работе'), ('done', 'Завершена'), ('rejected', 'Отклонена')], default='new', max_length=20, verbose_name='Статус заявки'),
        ),
        migrations.AlterField(
            model_name='car',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cars', to='api.category', verbose_name='Категория'),
        ),
        migrations.AlterField(
            model_name='car',
            name='description',
            field=models.TextField(verbose_name='Описание машины'),
        ),
        migrations.AlterField(
            model_name='car',
            name='horsepower',
            field=models.IntegerField(blank=True, null=True, verbose_name='Кол-во лошадиных сил'),
        ),
        migrations.AlterField(
            model_name='car',
            name='max_speed',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальная скорость'),
        ),
        migrations.AlterField(
            model_name='car',
            name='title',
            field=models.CharField(max_length=255, verbose_name='Название машины'),
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Название категории'),
        ),
        migrations.AlterField(
            model_name='service',
            name='description',
            field=models.TextField(verbose_name='Описание услуги'),
        ),
        migrations.AlterField(
            model_name='service',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Цена услуги'),
        ),
        migrations.AlterField(
            model_name='service',
            name='title',
            field=models.CharField(max_length=100, verbose_name='Название услуги'),
        ),
    ]

# Generated by Django 3.1.1 on 2020-09-09 11:41

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('itracker', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShippingStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('not_shipped', 'Not shipped'), ('sent_distribution', 'sent to distribution center'), ('warehouse_distribution', 'Warehouse of distribution center'), ('sorted_distribution', 'sorted at distribution center'), ('shipped', 'Shipped'), ('delivered', 'Delivered')], max_length=32)),
                ('updated', models.DateTimeField(default=datetime.datetime.now)),
                ('description', models.TextField()),
            ],
        ),
        migrations.AlterField(
            model_name='parcel',
            name='status_code',
            field=models.CharField(choices=[('not_shipped', 'Not shipped'), ('sent_distribution', 'sent to distribution center'), ('warehouse_distribution', 'Warehouse of distribution center'), ('sorted_distribution', 'sorted at distribution center'), ('shipped', 'Shipped'), ('delivered', 'Delivered')], max_length=32),
        ),
        migrations.AddField(
            model_name='parcel',
            name='status',
            field=models.ManyToManyField(to='itracker.ShippingStatus'),
        ),
    ]

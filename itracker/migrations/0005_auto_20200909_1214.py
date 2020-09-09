# Generated by Django 3.1.1 on 2020-09-09 12:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('itracker', '0004_auto_20200909_1153'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shippingstatus',
            name='parcel',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shipping_statuses', to='itracker.parcel'),
        ),
        migrations.AlterUniqueTogether(
            name='shippingstatus',
            unique_together={('status', 'parcel')},
        ),
    ]
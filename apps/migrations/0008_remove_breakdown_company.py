# Generated by Django 5.0.4 on 2024-04-16 09:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apps', '0007_alter_localisation_latitude_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='breakdown',
            name='company',
        ),
    ]
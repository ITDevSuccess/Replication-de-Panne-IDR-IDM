# Generated by Django 5.0.4 on 2024-04-15 09:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apps', '0005_alter_localisation_commune_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='localisation',
            name='commune',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='localisation',
            name='district',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='localisation',
            name='latitude',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='localisation',
            name='locality',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='localisation',
            name='longitude',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='localisation',
            name='region',
            field=models.CharField(max_length=100),
        ),
    ]

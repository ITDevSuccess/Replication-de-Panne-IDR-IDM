# Generated by Django 5.0.4 on 2024-04-24 03:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('idr_idm', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='breakdownidridm',
            name='address',
            field=models.CharField(blank=True, max_length=150, null=True, verbose_name='Address'),
        ),
        migrations.AddField(
            model_name='breakdownidridm',
            name='jde',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='JDE'),
        ),
        migrations.AddField(
            model_name='breakdownidridm',
            name='month',
            field=models.CharField(blank=True, choices=[('Janvier', 'Janvier'), ('Fevrier', 'Février'), ('Mars', 'Mars'), ('Avril', 'Avril'), ('Mai', 'Mai'), ('Juin', 'Juin'), ('Juillet', 'Juillet'), ('Aout', 'Août'), ('Septembre', 'Septembre'), ('Octobre', 'October'), ('Novembre', 'Novembre'), ('Decembre', 'Décembre')], max_length=75, null=True, verbose_name='Month'),
        ),
        migrations.AddField(
            model_name='breakdownidridm',
            name='no',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Numero'),
        ),
        migrations.AddField(
            model_name='jointe',
            name='type',
            field=models.CharField(blank=True, choices=[('ID Rental', 'ID Rental'), ('SAV ID Motors', 'SAV ID Motors'), ('Achat Import ID Rental', 'Achat Import ID Rental')], max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='breakdownidridm',
            name='piece',
            field=models.TextField(blank=True, null=True, verbose_name='Eta Piece'),
        ),
    ]
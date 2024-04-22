# Generated by Django 5.0.4 on 2024-04-20 14:36

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('idr_idm', '0003_rename_machine_machineidridm'),
    ]

    operations = [
        migrations.CreateModel(
            name='BreakdownIdrColas',
            fields=[
                ('uid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('month', models.CharField(blank=True, choices=[('Jan', 'January'), ('Feb', 'February'), ('Mar', 'March'), ('Apr', 'April'), ('Mai', 'Mai'), ('Jun', 'June'), ('Jul', 'July'), ('Aug', 'August'), ('Sep', 'September'), ('Oct', 'October'), ('Nov', 'Novembre'), ('Dec', 'December')], max_length=50, null=True)),
                ('jde', models.CharField(blank=True, choices=[('Jan', 'January'), ('Feb', 'February'), ('Mar', 'March'), ('Apr', 'April'), ('Mai', 'Mai'), ('Jun', 'June'), ('Jul', 'July'), ('Aug', 'August'), ('Sep', 'September'), ('Oct', 'October'), ('Nov', 'Novembre'), ('Dec', 'December')], max_length=150, null=True)),
                ('start', models.DateTimeField(blank=True, null=True, verbose_name='Start Breakdown')),
                ('end', models.DateTimeField(blank=True, null=True, verbose_name='Leave Garage')),
                ('prevision', models.DateTimeField(blank=True, null=True, verbose_name='Leave Garage')),
                ('archived', models.BooleanField(default=False)),
                ('works', models.TextField(blank=True, null=True, verbose_name='Work Request')),
                ('commentaire', models.TextField(blank=True, null=True, verbose_name='Commentaire')),
                ('client', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='idr_idm.client')),
                ('historic', models.ManyToManyField(blank=True, to='idr_idm.historic', verbose_name='Historique Breakdown')),
                ('jointe', models.ManyToManyField(blank=True, to='idr_idm.jointe', verbose_name='Piece Jointe')),
                ('localisation', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='idr_idm.localisation')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='MachineIdrColas',
            fields=[
                ('uid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('matriculate', models.CharField(max_length=100, unique=True)),
                ('model', models.CharField(max_length=150)),
                ('breakdown', models.ManyToManyField(blank=True, to='idr_colas.breakdownidrcolas')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
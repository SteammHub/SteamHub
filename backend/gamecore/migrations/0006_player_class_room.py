# Generated by Django 4.1.3 on 2023-01-02 09:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('gamecore', '0005_classroom_map_class_room'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='class_room',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='gamecore.classroom'),
        ),
    ]

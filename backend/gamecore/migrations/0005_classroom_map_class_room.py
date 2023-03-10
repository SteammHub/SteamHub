# Generated by Django 4.1.3 on 2023-01-02 09:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('gamecore', '0004_map_map_url'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClassRoom',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(blank=True, max_length=100)),
                ('image', models.ImageField(blank=True, null=True, upload_to='classrooms')),
                ('creater', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gamecore.mapcreator')),
            ],
        ),
        migrations.AddField(
            model_name='map',
            name='class_room',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='gamecore.classroom'),
        ),
    ]

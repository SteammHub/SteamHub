# Generated by Django 4.1.3 on 2022-12-31 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gamecore', '0003_alter_map_map_creator'),
    ]

    operations = [
        migrations.AddField(
            model_name='map',
            name='map_url',
            field=models.CharField(default=1, max_length=1000),
            preserve_default=False,
        ),
    ]
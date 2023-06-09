# Generated by Django 4.1.7 on 2023-05-12 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="netparamsmodel",
            name="training_size",
            field=models.FloatField(default=0.8),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="netparamsmodel",
            name="wd",
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="netparamsmodel",
            name="loss",
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name="netparamsmodel",
            name="optimizer",
            field=models.IntegerField(),
        ),
    ]

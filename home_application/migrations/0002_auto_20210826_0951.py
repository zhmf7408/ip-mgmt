# -*- coding: utf-8 -*-
"""
This program is named IP Management Center and it is a tool to help network administrators manage enterprise IP resource pool reasonably and conveniently.
Copyright (C) <2021>  <Guangzhou Canway Technology Co.,Ltd.>
Contact details: jackliu@canway.net or 11th Floor, Building A，Fengxing Plaza No. 67 Tianhe East Road Tianhe District, Guangzhou, China 510630. jackliu, 15927493530
This file is part of IP Management Center.
IP Management Center is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
IP Management Center is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License along with Canway software. If not, see <https://www.gnu.org/licenses/>.
"""  # noqa
# Generated by Django 2.2.6 on 2021-08-26 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home_application", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="ips",
            name="member",
            field=models.CharField(default="", max_length=200, verbose_name="运维人员"),
        ),
        migrations.AlterField(
            model_name="ipneteventlog",
            name="event_type",
            field=models.CharField(
                choices=[
                    ("off_line", "ip离线"),
                    ("on_line", "ip在线"),
                    ("create", "创建"),
                    ("update", "更新"),
                    ("delete", "删除"),
                    ("scan", "扫描"),
                    ("expired", "过期"),
                ],
                max_length=100,
            ),
        ),
    ]

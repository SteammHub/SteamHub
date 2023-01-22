from django.contrib import admin

# Register your models here.



from .models import *

admin.site.register(MapCreator)
admin.site.register(Map)
admin.site.register(Player)
admin.site.register(GameLeaderboard)
admin.site.register(MapLeaderboard)
admin.site.register(Game)
admin.site.register(ClassRoom)
admin.site.register(ClassRoomCategory)



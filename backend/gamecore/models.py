from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class MapCreator(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    nickname = models.CharField(max_length=50)

    def __str__(self):
        return self.user.username









class Map(models.Model):
    map_creator = models.ForeignKey(MapCreator, on_delete=models.CASCADE,null=True,blank=True)
    name = models.CharField(max_length=50)
    map_url=models.CharField(max_length=1000)
    description = models.CharField(max_length=100, blank=True)
    image = models.CharField(max_length=10000, null=True, blank=True)
    file = models.CharField(max_length=100, blank=True)
    class_room = models.ManyToManyField("ClassRoom" , blank=True)
    




class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=50,unique=True)
    class_room = models.ManyToManyField("ClassRoom", blank=True)


    def __str__(self):
        return self.user.username




class GameLeaderboard(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    score = models.IntegerField()
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name




class MapLeaderboard(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    map = models.ForeignKey(Map, on_delete=models.CASCADE)
    score = models.IntegerField()
    name = models.CharField(max_length=100)
    spent_time = models.FloatField()

    def __str__(self):
        return self.player.nickname



class Game(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to='games', null=True, blank=True)
    file = models.FileField(upload_to='games', null=True, blank=True)
    creater = models.ForeignKey(MapCreator, on_delete=models.CASCADE)
    leaderboard = models.ForeignKey(GameLeaderboard, on_delete=models.CASCADE)

    def __str__(self):
        return self.name





class GameMap(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    map = models.ForeignKey(Map, on_delete=models.CASCADE)
    leaderboard = models.ForeignKey(MapLeaderboard, on_delete=models.CASCADE)

    def __str__(self):
        return self.game



class ClassRoomCategory(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to='classroom', null=True, blank=True)

    def __str__(self):
        return self.name




class   ClassRoom(models.Model):
    creater = models.ForeignKey(MapCreator, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to='classrooms', null=True, blank=True)
    classroom_category = models.ForeignKey(ClassRoomCategory, on_delete=models.SET_NULL, null=True, blank=True)
    class_room_code = models.CharField(max_length=50,unique=True,blank=True,null=True)





    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        import random
        import string
        self.class_room_code = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(6))

        while ClassRoom.objects.filter(class_room_code=self.class_room_code).exists():
            self.class_room_code = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(6))

        super(ClassRoom, self).save(*args, **kwargs)



from rest_framework import serializers

from gamecore.models import *


class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Map
        fields = '__all__'


class MapCreatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = MapCreator
        fields = '__all__'

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = [
            'user',
            'nickname',
            'class_room'
        ]

class GameLeaderboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameLeaderboard
        fields = '__all__'

class MapLeaderboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = MapLeaderboard
        fields = '__all__'


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'



class ClassRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassRoom
        fields = '__all__'


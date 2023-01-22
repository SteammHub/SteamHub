from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.response import Response


def index(request):
    api_urls = {
        'List_of_Player[GET]': 'game/all_player/',
        'player detail': 'game/player_detail/<int:pk>',
        'player Update[PUT]': 'game/player_update/<str:pk>/',



          # 'Create[POST]': 'game/create_player/',



        'List_of_Map[GET]': 'game/map_list/',
        'Map detail': 'game/map_detail/<int:pk>',
        'map Update[PUT]': 'game/map_update/<str:pk>/',

    }

    return JsonResponse(api_urls)
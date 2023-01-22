from django.http import HttpResponse
from django.shortcuts import render
from django.views import View
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.files.storage import FileSystemStorage

from SteamHub import settings
from gamecore.models import *
from gamecore.serializers import *
from rest_framework.decorators import api_view, renderer_classes
from rest_framework import status






import os

from gamecore.utils import S3Manager


def handle_uploaded_folder(folder, base_path):
    for file in folder:
        if file.is_file():
            # handle the file
            with open(os.path.join(base_path, file.name), 'wb+') as destination:
                for chunk in file.chunks():
                    destination.write(chunk)
        elif file.is_dir():
            # create a new subdirectory in the base path
            subdir_path = os.path.join(base_path, file.name)
            os.mkdir(subdir_path)
            # recursively handle the subdirectory
            handle_uploaded_folder(file, subdir_path)


class upload(View):

    def get(self, request):
        return render(request, 'folderuplade.html')
    def post(self, request):
        map_name = request.POST.get('map_name')
        map = Map.objects.create(name=map_name, description="test")
        file = request.FILES.getlist('file')
        file_path = request.POST.get('path')
        print(file_path)

        path = file_path.split(',')

        path = [os.path.split(f)[0] for f in path]

        s3 = S3Manager()

        for f in range(len(file)):
            contant_type = file[f].content_type
            s3.upload_fileobj(file[f], settings.GAME_BUCKET,
                              'build-v' + str(map.id) + '/' + path[f] + "/" + file[f].name, contant_type)

        map.map_url = 'https://gmaeupload.s3.amazonaws.com/build-v' + str(map.id) + '/STEAM-HUB/index.html'
        map.save()

        return HttpResponse('<a href="https://gmaeupload.s3.amazonaws.com/build-v' + str(
            map.id) + '/'+path[0]+'/index.html">https://gmaeupload.s3.amazonaws.com/build-v' + str(
            map.id) + '/'+path[0]+'/index.html</a>')




























def index(request):
    api_urls = {
        'List': '/map-list/',
         
        'Delete': '/map-delete/<str:pk>/',
    }

    return Response(api_urls)



# Create your views here.
@api_view(['GET'])
def all_player(request):
    players = Player.objects.all()
    serializer = PlayerSerializer(players, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def player_detail(request, pk):
    players = Player.objects.get(id=pk)
    serializer = PlayerSerializer(players, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def player_update(request, pk):
    player = Player.objects.get(id=pk)
    serializer = PlayerSerializer(instance=player, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def create_player(request,*args,**kwargs):
    serializer = PlayerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)



@api_view(['GET'])
def map_list(request):
    maps = Map.objects.all()
    serializer = MapSerializer(maps, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def map_detail(request, pk):
    maps = Map.objects.get(id=pk)
    serializer = MapSerializer(maps, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def map_update(request, pk):
    maps = Map.objects.get(id=pk)
    serializer = MapSerializer(instance=maps, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



@api_view(['POST'])
def test1(request):
    print(request.data)

    return Response({
        "stat": "okay"

    })


def test(request):
    print(request.data)


    return Response({
        "stats": "okay"
    })



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def join_class(request):    
    user=request.user
    print(user)
    class_room_code=request.data.get('class_room_code')
    print(class_room_code)

    print(request.data)
    try:
        
        class_obj=ClassRoom.objects.filter(class_room_code=class_room_code)
        print(class_obj)
        player=Player.objects.get(user=user)
        player.class_room.add(class_obj[0])
        print(player)
        return Response("Joined")
    except:
        print("Class not found")
        return Response("Class not found",status=status.HTTP_400_BAD_REQUEST)
 

 

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_my_class(request):
    user=request.user
    player=Player.objects.get(user=user)
    class_room=player.class_room.all()
    serializer=ClassRoomSerializer(class_room,many=True)
    return Response(serializer.data)






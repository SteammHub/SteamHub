from django.urls import path

from gamecore import views
from gamecore.views import upload


urlpatterns = [

    path ('', views.index),


    path('create_player/', views.create_player),
    path('all_player/', views.all_player),
    path('player_update/<int:pk>/', views.player_update),
    path('player_detail/<int:pk>', views.player_detail),
    path('map_list/', views.map_list),
    path('map_detail/<int:pk>', views.map_detail),
    path('map_update/<int:pk>/', views.map_update),
    
    path('upload/', upload.as_view(), name='upload'),
    path('join_class/', views.join_class,name='join_class'),
    path('get_my_class/', views.get_my_class,name='get_my_class'),

    path('test/', views.test),

    ]
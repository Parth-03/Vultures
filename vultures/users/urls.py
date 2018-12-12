from django.conf.urls import url
from . import views

urlpatterns = [
    url(
        regex=r'^register/$',
        view=views.RegisterView.as_view(),
        name='register'
    ),

    url(
        regex=r'^login/$',
        view=views.LoginView.as_view(),
        name='login'
    ),
    url(
        regex=r'^logout/$',
        view=views.LogoutView.as_view(),
        name='logout'
    ),

    url(
        regex=r'^map/$',
        view=views.MapView.as_view(),
        name='map'
    ),

    url(
        regex=r'^members/$',
        view=views.MembersView.as_view(),
        name='members'
    ),

    url(regex=r'^members/(?P<pk>\d+)/$',
        view=views.ProfileDetailView.as_view(),
        name='user-detail'
    ),

    # url(r'^upvote/(?P<photo_id>[0-9]+)/$', 
    #     views.upvote, 
    #     name='upvote'),

    url(
       regex=r'^post/$',
       view=views.PostView.as_view(),
       name='post'
    ),

    url(
       regex=r'^feed/$',
       view=views.FeedView.as_view(),
       name='feed'
    ),
    url(regex=r'^feed/(?P<pk>\d+)/$',
        view=views.FeedDetailView.as_view(),
        name='post-detail'
    ),

    url(regex=r'^comments/$',
        view=views.CommentListView.as_view(),
        name='comments'
    ),

     url(regex=r'^comments/(?P<pk>\d+)/$',
        view=views.CommentDetailView.as_view(),
        name='comment-detail'
    ),
    url(regex=r'feed/create/', 
        view=views.CreatePost.as_view(), 
        name='post_create'
    ),
    url(regex=r'^feed/(?P<pk>\d+)/update', 
        view=views.UpdatePost.as_view(), 
        name='post_update'
    ),
    url(regex=r'^feed/(?P<pk>\d+)/delete', 
        view=views.DeletePost.as_view(), 
        name='post_delete'
    ),
]

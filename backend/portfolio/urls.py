from django.urls import path
from . import views

urlpatterns = [
    # Profile endpoints
    path('profile/', views.ProfileListCreateView.as_view(), name='profile-list'),
    path('profile/<int:pk>/', views.ProfileDetailView.as_view(), name='profile-detail'),
    path('profile-summary/', views.profile_summary, name='profile-summary'),
    
    # Project endpoints
    path('projects/', views.ProjectListCreateView.as_view(), name='project-list'),
    path('projects/<int:pk>/', views.ProjectDetailView.as_view(), name='project-detail'),
    
    # Skill endpoints
    path('skills/', views.SkillListCreateView.as_view(), name='skill-list'),
    path('skills/<int:pk>/', views.SkillDetailView.as_view(), name='skill-detail'),
    
    # Experience endpoints
    path('experiences/', views.ExperienceListCreateView.as_view(), name='experience-list'),
    path('experiences/<int:pk>/', views.ExperienceDetailView.as_view(), name='experience-detail'),
    
    # Contact endpoints
    path('contact/', views.ContactMessageListCreateView.as_view(), name='contact-list'),
    path('contact/<int:pk>/', views.ContactMessageDetailView.as_view(), name='contact-detail'),
    path('send-message/', views.send_contact_message, name='send-message'),
]

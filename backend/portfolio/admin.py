from django.contrib import admin
from .models import Profile, Project, Skill, Experience, ContactMessage


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'location', 'email', 'created_at')
    list_filter = ('created_at', 'updated_at')
    search_fields = ('name', 'title', 'email')


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'project_type', 'status', 'featured', 'created_at')
    list_filter = ('project_type', 'status', 'featured', 'created_at')
    search_fields = ('title', 'description', 'technologies')
    list_editable = ('featured', 'status')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'proficiency_level', 'created_at')
    list_filter = ('category', 'proficiency_level', 'created_at')
    search_fields = ('name', 'description')


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('title', 'company', 'experience_type', 'current', 'start_date')
    list_filter = ('experience_type', 'current', 'start_date')
    search_fields = ('title', 'company', 'description')


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'read', 'created_at')
    list_filter = ('read', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')
    list_editable = ('read',)

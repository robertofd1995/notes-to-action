from django.contrib import admin
from tasks.models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ['title', 'content', 'user', 'note', 'completed', 'priority', 'deadline', 'created_at']
    list_filter = ['completed', 'priority', 'category', 'created_at']
    search_fields = ['title', 'content', 'category']
    ordering = ['-created_at']

from django.db import models
from django.conf import settings
from notes.models import Note


class Task(models.Model):
    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
    ]

    title = models.CharField(max_length=255, blank=True, null=True)
    content = models.TextField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='tasks'
    )
    note = models.ForeignKey(
        Note,
        on_delete=models.SET_NULL,
        related_name='tasks',
        blank=True,
        null=True
    )
    completed = models.BooleanField(default=False)
    deadline = models.DateTimeField(blank=True, null=True)
    priority = models.CharField(
        max_length=10,
        choices=PRIORITY_CHOICES,
        blank=True,
        null=True
    )
    category = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title or f"Task {self.id}"

    class Meta:
        ordering = ['-created_at']

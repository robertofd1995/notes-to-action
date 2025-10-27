from django.db import models
from django.conf import settings


class Note(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='notes'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # TODO add audio blob in case the note is created with an audio note
    # limted to 2mb (eventually move to s3, but for now it will just stay in the DB)
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-created_at']

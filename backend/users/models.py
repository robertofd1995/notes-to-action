from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """
    Custom User model that extends Django's AbstractUser.
    This allows for easy extension with additional fields in the future.
    """
    # You can add custom fields here as needed
    # For example:
    # bio = models.TextField(max_length=500, blank=True)
    # avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    # phone_number = models.CharField(max_length=15, blank=True)
    
    def __str__(self):
        return self.username

    class Meta:
        db_table = 'users'
        verbose_name = 'User'
        verbose_name_plural = 'Users'

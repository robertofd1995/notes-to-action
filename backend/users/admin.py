from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    """
    Custom admin for the User model.
    Extends Django's default UserAdmin.
    """
    # You can customize the admin interface here
    # For example, if you add custom fields:
    # fieldsets = BaseUserAdmin.fieldsets + (
    #     ('Additional Info', {'fields': ('bio', 'avatar', 'phone_number')}),
    # )
    pass

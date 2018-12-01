from django.contrib import admin
from django.contrib.auth.admin import UserAdmin


from .models import Person, FoodComment, FoodPost


@admin.register(Person)
class PersonAdminModel(UserAdmin):
    pass

@admin.register(FoodComment)
class FoodCommentAdminModel(admin.ModelAdmin):
	pass

@admin.register(FoodPost)
class FoodPostAdminModel(admin.ModelAdmin):
	pass
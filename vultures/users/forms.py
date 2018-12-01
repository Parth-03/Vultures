from django.contrib.auth.forms import UserCreationForm
from django import forms
from users.models import Person, FoodPost


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = Person
        fields = ('username',)

class DateTimeInput(forms.DateTimeInput):
    input_type = 'date'

class CreateForm(forms.ModelForm):
    class Meta:
        model = FoodPost
        fields = ['location', 'roomNum', 'postDate', 'postInfo']
        widgets = {
            'postDate': DateTimeInput(),
        }

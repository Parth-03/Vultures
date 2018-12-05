from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.urlresolvers import reverse


class Person(AbstractUser):
    description = models.TextField(blank=True)

    def __str__(self):
        return self.username

    def get_absolute_url(self):
        """Returns the url to access a particular author instance."""
        return reverse("user-detail", args=[str(self.id)])


class FoodComment(models.Model):

	commenter = models.ForeignKey("Person", on_delete=models.SET_NULL, null=True)

	commentPost = models.ForeignKey("FoodPost", on_delete=models.SET_NULL, null=True)

	commentContent = models.TextField(
		max_length=1000, help_text="Enter comment"
	)

	commentScore = models.IntegerField()

	commentDateTime = models.DateTimeField(null=True, blank=True)

	class Meta:
		ordering = ["commentDateTime"]

	def __str__(self):
		return self.commentContent

	def display_author(self):
		return self.commenter

	def get_absolute_url(self):
		return reverse("comment-detail", args=[str(self.id)])


class FoodPost(models.Model):
	BUILDING_CHOICES = (
    	('library','W.E.B. Du Bois Library'),
    	('hamp', 'Hampshire Dining Hall'),
    	('berk','Berkshire Dining Hall'),
    	('woo','Worcester Dining Hall'),
    	('frank','Franklin Dining Hall'),
		('l','Lederle Tower'),
		('Sc','South College'),
		('rec','Campus Rec Center'),
		('cs','Computer Science Building'),
		('Thom','Thompson'),
		('mor','Morrill 3'),
	)

	roomNum = models.IntegerField("Room Number", default = 0)

	postScore = models.IntegerField("Score", default=0)

	location = models.CharField("Location", max_length=100, choices = BUILDING_CHOICES)

	postUser = models.ForeignKey("Person", on_delete=models.SET_NULL, null=True)

	postDate = models.DateTimeField("Date", null=True, blank=True)

	postInfo = models.TextField("Description", max_length=1000)

	class Meta:
		ordering = ["postDate"]

	def __str__(self):
		return self.postInfo

	def get_absolute_url(self):
		return reverse("post-detail", args=[str(self.id)])

class Map(models.Model):

	location = models.CharField(
		max_length=1000, help_text="Enter coords for the food"
	)

	postUser = models.ForeignKey("Person", on_delete=models.SET_NULL, null=True
	)

	commentPost = models.ForeignKey("FoodPost", on_delete=models.SET_NULL, null=True)



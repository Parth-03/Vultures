from django.contrib.auth.models import User, Group, Permission
from django.contrib.contenttypes.models import ContentType
from faker import Faker
from users.models import Person, FoodComment, FoodPost

# from django.contrib.auth import get_user_model
# User = get_user_model()

fake = Faker()


persons = []
posts= []
comments= []

# Create Food Posts
def create_food_posts(person): 
    for i in range(1,10):
        a_score= fake.random_int(0, 50)
        a_location= fake.address()
        a_date= fake.date()
        a_info= fake.sentence()
        post= FoodPost(postScore= a_score, location= a_location, postUser= person, postDate= a_date, postInfo=  a_info)
        post.save()
        posts.append(post)
        create_food_comments(post, person)
# Create Food Comments
def create_food_comments(post, person):    
    for i in range(1, 10):
        a_content= fake.sentence()
        a_score= fake.random_int(0, 25)
        a_date= fake.date()
        comment= FoodComment(commenter= person, commentPost= post, commentContent= a_content, commentScore= a_score, commentDateTime= a_date)
        comment.save()
        comments.append(comment)

# Create Persons
for i in range(1, 10):
    a_name = fake.name()
    a_password = fake.name()
   # a_score= fake.random_int(0, 100)
    person = Person.objects.create_user(username= a_name, password=a_password)
    person.save()
    persons.append(person)
    create_food_posts(person)

print("\nUser:")
for a in Person.objects.all():
    print(a)

print("\nFood Post:")
for b in FoodPost.objects.all():
    print(b)

print("\nFood Comment:")
for i in FoodComment.objects.all():
    print(i)


username = "admin"
password = "admin"
email = "admin@326.edu"
adminuser = Person.objects.create_user(username=username, password=password)
adminuser.save()
adminuser.is_superuser = True
adminuser.is_staff = True
adminuser.save()
message = f"""
====================================================================
The database has been setup with the following credentials:
  username: {username}
  password: {password}
  email: {email}
You will need to use the username {username} and password {password}
to login to the administrative webapp in Django.
Please visit http://localhost:8080/admin to login to the admin app.
Run the django server with:
  $ python3 manage.py runserver 0.0.0.0:8080
====================================================================
"""
print(message)
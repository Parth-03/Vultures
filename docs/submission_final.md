# Sasquatch5

# Umass Vultures

# Fall 2018

# Team Members

* Conor Meade, Github ConorMeade
* Abhaydeep Singh, Github Ab-hay
* Parth Goel, Github Parth-03
* Garrison Qian, Github GarrisonQian
* Thomas Bui, Github thomasbui1997

# Overview
Our application is a web app that enables users to create a post about free/discounted food and have that post show up in a scrolling feed viewable by anyone accessing the site.  
The intended audience for this is UMass students and faculty, but it of course could be extended to other groups as well.  Each post contains information that helps guide people to
the location of the food, such as time and location.  Users can register to have their own name attached to the posts, but registration is not required to post.  Our application is
innovative because it incorporates the openness of platforms such as twitter or reddit and allows people to share free food with fellow students and faculty.  

# User Interface
![](https://i.gyazo.com/662d3e4a0e389af75f543b2a8f81ed42.png)
Homepage - Contains the purpose of the website as well as descriptions of the feed and member's view.  Additional links to the latter two are included.  This is the initial screen 
someone would see when accessing the site, and thus contains the most information so as to inform the vistor of the purpose.  

![](https://i.gyazo.com/26503a55c7bb5fa637696e6b3a23f75e.png)
User Registration - Allows a visitor to create their own account that is then stored in our database.

![](https://i.gyazo.com/6cba12b5b00d09e958c4ecd1d9da5969.png)
Feed - Scrolling feed of all food posts, brief description is included for each post but a user can click on the hyperlink to a more detailed page. 

![](https://i.gyazo.com/782f8e26f19b287600c134302874a103.png)
Post Detail - Provides more detail about a specific post such as the poster, location, time and room number.

![](https://i.gyazo.com/a285fc70032e3d1f5a1232d9ca246c41.png)
Members View - List of all registered users, only viewable if the user is logged in.  

![](https://i.gyazo.com/e764f1b8908b159212b00b111989ff62.png)
Post Form - Allows a user to create a new post by inputting the information into the forms.

![](https://i.gyazo.com/897f667b0226c04c83755e04395708b5.png)
Post Detail (when viewed by original poster) - Similar to the other post detail but also includes buttons to edit/delete the post.  

![](https://i.gyazo.com/eb4894f5e6e0650db9694bbcb5ac21af.png)
Delete Confirmation - Layer of security so user doesn't accidently delete their post.  


# Data Model


# URL Routes/Mappings
| URL | Description |
| --- | --- |
| /register | This leads to the register page, where users can fill out of a form to create an account. |
| /login | This displays the login page, where users can sign in with their credentials. |
| /logout | This page is shown after the user logs out of their account. |
| /map | This page shows the map, which displays the locations associated with each food post.  |
| /members | This page shows a list of every single member registered on the website. This can only be accessed if the current user is registered on the site and logged in. |
| /feed | The feed page displays a list of every single post created on the site. |
| /feed/(?P<pk>\d+) | This is a detailed view of a food post, accessed by clicking a post on the feed. |
| /comments | This page shows a list of comments created by registered members on the website. |
| /comments/(?P<pk>\d+) | This is a detailed view of a comment, accessed by clicking on a specific comment. |
| /feed/create | This page allows the user to create a post, which will be then added to the feed. |
| /feed/(?P<pk>\d+)/update | This page allows the user to update their post. This path is only accessible to a user who is logged in as the creator of the original post. |
| /feed/(?P<pk>\d+)/delete | This page allows the user to delete their post. Only the original poster is allowed access to this path. |

# Authentication/Authorization
To register for an account on the Vultures website, a user must go to the 'Register' page, which is only accessible on the navbar when the user has not logged in. Once they have entered their desired username and password into the form, which is a UserCreationForm from the Django library, they will be added as a Person in the database.
To login, a registered member can enter their credentials into the designated forms directly on the navbar. 
Once logged in, they will have permission to go to the 'Members View' page, which lists all the other registered members. If the user creates a post, they will automatically listed as the 'Poster' when the post is published on the feed. Upon reviewing their own posts, the user is given the options delete or edit the posts using the buttons displayed at the bottom of a post. These buttons would not be visible to another user who was viewing the post.

# Team Choice
For the team choice portion we decided to implement a profile page that shows a user's name as well as their cumulative score from food posts. We also implemented a way to view comments that show a post, the commenter, the comment content, the data, and the comment score:
![](https://i.imgur.com/5Yb4p7w.jpg) 

We also made our food post form more expansive with additional fields for room number, a drop down menu of UMass buildings, and a food type field:
![](https://i.imgur.com/RMSCqUa.jpg)

# Conclusion
One of the challenges we faced early on in the development process was transitioning from working with React to working in Django. As a team, we spent a lot of time learning different aspects of the framework, as well as getting certain components to work. One example was getting Faker to populate the database with randomly created information, which was difficult because we had different machines. However, we persisted and found that Django abstracted many aspects of the development process, such as building the database and handling views, which helped accelerated the project's completion. Looking back, it would have been useful to have worked on the project in Django from the very beginning, had we known that this was a requirement for our project.

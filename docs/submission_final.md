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

# User Interface

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

# Conclusion

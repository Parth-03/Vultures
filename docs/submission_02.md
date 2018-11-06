# SASQUATCH 5

# UMASS VULTURES

# Overview
Our application aims to give students and faculty at UMass a way to access free or reduced price food. We will have a running feed of posts and a map to display where and what the food is on campus. Users of the site will have an aggregated upvote/downvote metric that will help in determining the reliability of the post. There will also be comments on posts for food and detailed views for comments and posts if a user wishes to learn more.

As for changes from project 1, we have made the change from using React.js to Django as Django falls more in line with the goals of the course. We are currently working through configuring Django and Python as it relates to creating our web application. Aside from that, most of our goal/implementation remains the same in terms of how we want to present where to get food, how users are created/linked to comments and posts, and how comments are organized

# Team Members

* Conor Meade, Github ConorMeade
* Abhaydeep Singh, Github Ab-hay
* Parth Goel, Github Parth-03
* Garrison Qian, Github GarrisonQian
* Thomas Bui, Github thomasbui1997

# Video Link
(Video Link)


# Design Overview

##Data Model
As of right now, our data model consists of three elements: Person, FoodComment, and FoodPost. A Person will have a description (string) where they can spruce up their profile with what food they like, where they live on campus,  what the best kinds of free/reduced food that they know about are, etc. A person will also have an int totalScore that will be an aggregate of their upvotes/downvotes on FoodPost(s) and FoodComment(s). As for multiplicities, a person can have many different FoodPosts so this will be 1...* . A Person can also have many different FoodComments so this will also be 1...*

FoodPost will something made by a Person. It will have a postScore (int) which is an upvote/downvote aggregate. A postLocation (string) which tells where on campus the post is. A postUser which will be a key to the Person class that made the post; this key will be [1] since only one user can make a specific post. There will be a postDate with a custom DateTimeField which users can use to tell how long ago a post was made. Finally, a FoodPost will have a postInfo string that will provide an outline of what food is being posted as well as any additional helpful details. For multiplicities, as previously mentioned, a FoodPost will have a 1:1 relation with a user. For a FoodComment, a post can have many possible comments so this multiplicity will be 1...*.
 
FoodComment will be shown alongside a FoodPost where users can provide input on the post. It will have a commenter which is the Person that commented on the post [1]. It will also have a commentPost which is the corresponding FoodPost that the FoodComment is made on [1]. commentContent will be a string that hold the contents of the comment. commentScore will be a int that is the aggregate of upvotes/downvotes on the post. This score can be used to filter good, bad, helpful, and unhelpful comments. FoodComment will also have a DateTimeField that tells when the comment was made. Multiplicities will be [1] for Person and FoodPost since only a single person can make a comment and a specific comment can only be associated with a single post.

##Important URL Routes
The important URL routes of our project are: register, login, logout, members view, post, feed, comment, and comments. Each of these URLs provide the means to determine what a user should be able to see and access in a certain URL. This division of different parts of our site will help with readability and give users more control when using our site. Additionally, our site will have a home URL where upon going to our site, users will have a base view for the UMass Vultures web app.

##UI Views
Our UI views will directly correspond to the URLs listed above. We have: LoginView, LogoutView, RegisterView, MembersView, PostView, FeedView, FeedDetailView, CommentListView, and CommentDetailView. LoginView and LogoutView will be the different options that are presented to users that are part of the site. For example, a logged out user will not have the option to make a FoodPost while a logged in user's view will see an option/button to do so. RegisterView will be a form of some sort where potential users can fill out a few fields and create their account. MembersView will be a way for special users to get advanced options that may not be available to other normal users. FeedView will give a running list of all FoodPosts, users can scroll down the feed until they see a post that piques their interest. FeedDetailView will when a suer clicks on a specific post, this detailed view will provide additional information about the post that goes deeper than jsut what the food is/where it is on campus. Additional information can be: user, score, comments, etc. CommentListView will be the comments that are part of a specific FoodPost where users can gauge input of a specific FoodPost. CommentDetailView will also be a way for user to view a specific comment/comment thread instead of all comments at once.


# Problems/Successes
Our main problem in this project was pivoting from using react.js to Django. We are early on enough in the process of creating our site that it was not a huge issue. However, we did have to take time to familiarize ourselves with Django/Python when it comes to designing our site. In the same vein, a few team members had trouble running a local server for the app in both vagrant and the local environment; configuring this issues was a challenge and prevented many of us from being on the same page for a portion of the project. We were still able to use our HTML and CSS files from the previous project so we did not have to completely start from scratch. Another issue we had was on the communication front and finding times in our schedules where we would all be free to work on the project. For upcoming projects, we will have to improve on staying on top of things and maintaining communication throughout the entire process. 

For Successes, we did a solid job implementing our model in this project. Much of our design overview for the UMass vultures app that involves a Person, FoodComment, and FoodPost all translated well when it came to creating and implementing our diagram. The video also came together well and we were able to properly describe our model. Also, the example code proved to be very helpful when implementing our own site. In many cases, we did not have to change very much and it was nice having a good foundation in the examples from lecture. Also, we all had used Python before so we did not have to spend much extra time understanding Python syntax to complete this project.

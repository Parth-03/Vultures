# SASQUATCH 5

# UMASS VULTURES

# Team Overview

* Conor Meade, Github ConorMeade
* Abhaydeep Singh, Github Ab-hay
* Parth Goel, Github Parth-03
* Garrison Qian, Github GarrisonQian
* Thomas Bui, Github thomasbui1997

# Innovative Idea

Our application will be focused on giving student and faculty at UMass a way of finding free and reduced price food on campus. Students are consistently in a position where they are hungry and in need of a food break. Options like going to a dining hall, grab n' go, food truck etc. may not always be the most practical option based on factors like cost, time, and appetite. UMass vultures will allow students to be given a running feed of places on campus where free food is being served or there is reduced price food. Our app will relate to other apps like the UMass dining app since it is dealing with food. It will also be similar to Twitter in the sense of having a running feed of the newest posts.

We will be looking to incorporate ways to share these updates on Facebook and Twitter to allow for a wider audience. Also, we will be trying to have the options for free/reduced food show up on a map of campus so users can see exactly where they need to go and be able to see where the closest option is for them.

# Important Data

UMass Vultures will have a page with a form to fill out a new entry for food. This form will include options like: time period, user, location, type of food, etc. These are all different types of data that our app will use. These forms will also be stored in a database. Also, for each individual post we will have options to upvote and downvote individual entries. Upvotes can be used to indicate posts that are trustworthy, high-quality food, consistently available food, and any other reason that a user/post would merit gratification. Downvotes can be used to help filter bad and unwanted posts as well as posts unrelated to UMass Vultures.

Additional types of data we will be using will be a running count of users aggregated upvote/downvote score. This total score can be used as a metric for trustworthy and consistent users and vice versa. Using Google's API for the map portion, we will also be keeping track of the distance from as user's current location to the food spot. The map will parse the food submission form and make a new entry. Also, we can include an entry list/drop down menu for different food options to cut down on time of creating an entry. As more users use the web application, this list will become better defined.

# User Interface

![](https://i.imgur.com/eCe2M1f.jpg)
**Home-** We will have links to all our pages and a login button as well that will all appear on a navigation bar at the top. There will also be an option to login with Facebook/Google. The page itself will contain an about us that explains how the app works and a version of the "What's New" feed so users can start using the app right away. We will also incorporate an interactive Google map using the API for React.js.

![](https://i.imgur.com/Fomqv8I.jpg)
**What's New (Name pending)-** Users will be able to post what their food is that they are giving away, upvote/downvote and comments for each post, also a link to the 'Map' page for each post. Comments will appear under each post in a drop down menu. There will also be a record of how long ago a post was made, the location, and the user.

![](https://i.imgur.com/JNnOZo0.jpg)
**User Man-** A detailed view of the individual view, karma score based on their upvotes/downvotes of their post. A user page will show username, karma (aggregate upvote/downvote score), and whether they are student or faculty. There will also be additional fields for major, bio, favorite food, etc.

![](https://i.imgur.com/pw6C8nw.jpg)
**Map-** A detailed view of the UMass campus with exact locations of where the free and unwanted food is on campus. There will be options to filter by free food, reduced food, type of food, and food within a certain distance.

![](https://i.imgur.com/trZZkF3.jpg)
**Form Maker-** A page for creating a post on food that can be vulture'd. Options will include: time, location, kind of food, etc. This form will be parsed and used in both the Map and What's New section.

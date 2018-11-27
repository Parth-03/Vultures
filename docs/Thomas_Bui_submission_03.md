For part two of the submission, I added post functionality to the application. Users can now create new posts on the 'Post'
page. When they submit the form, a new post will be added to the database and will be displayed on the feed page.

Also, I added functionality for users to delete and edit posts their own posts. Behind the scenes, Django uses user
authentication to check whether or not they have permission to modify a post. When they do modify a post, the relevant changes
will be made to the server.


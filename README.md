# Assignment 1 - ReactJS app.

Name: Gearoid Murphy 20084894

## Features.
 
 + Upcoming Movies - This feature allows the user to see movies that will be realesed in the future 
 + Popular Movies - This allows the user to see the most popular movies
 + Top-Rated Movies - This allows the user to see the highest rated movies 
 + Simalar Movies - This shows the user simalr movies on the movies detail page 
 + Credits - This gives users the option to see which actors where in the film
 + Popular People - allows the user to see who are the most popular actors 
 + Authentication - The user can only access the info if they signed up and logged in 

## API Data Model.

+ https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=2 - gets a list of popular movies 
+ https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - get a list of Top-Rated Movies
+ https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - gets a list of similar movies using the movie ID
+ https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - gets a list of popular People
+ https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US - gets a list of actors from a movie 


## App Design.
### UI Design.

![][welcome]
>It welcomes the user to the page and askes them to either login or signup

![][signup]
>Asks the user to enter a email and password and it then stores it on firebase 

![][login]
>The user is asked for thier email and password and if correct they get access

![][moviedropdown]
>the home page shows popular movies and they have te the dropdown menu to choose what type of movies

![][peopledropdown]
>This shows the drop down menu of people

![][upcoming]
>Shows upcoming movies 

![][popular]
>Shows popular movies

![][toprated]
>Shows Top-Rated movies

![][favorites]
>Shows the movies the user has added to their favorites

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

![][cast]
>Shows the full list of actors in the movie

![][similar]
>Shows a list of similar movies  

## Routing.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /movies/upcoming (protected) - displays the upcoming movies selection.
+ /movies/popular (protected) - displays popular movies selection.
+ /movies/toprated (protected) - displays the toprated movies selection.
+ /movies/popularpeople (protected) - displays popular people selection.
+ /movies/watchlist (protected) - displays the user's to watch movies selection.
+ /reviews/:id (protected) - displays the full text of a movie review.
+ /login (public) - displays the login screen
+ /signup (public) - displays the signup screen

### Data hyperlinking.

![][popular]
> Clicking a card causes the display of that movie's details.

![][similar]
> Clicking a card causes the display of that similar movie's details.

![][review]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][cast]
>Clicking the 'view credits' for a list of actors in the movies

## Independent learning (If relevant).

+ Firebase - I used firebase to create a 3rd party athentication system 
  references:  https://console.firebase.google.com/u/0/ ,  https://blog.logrocket.com/user-authentication-firebase-react-apps/ , https://www.youtube.com/watch?v=unr4s3jd9qA

+ semantic - I tried to use semantic but only got it to work in some places 

---------------------------------

[cast]: ./Images/Cast.png
[movieDetail]: ./Images/details.png
[favorites]: ./Images/Favorites.png
[login]: ./Images/Login.png
[moviedropdown]: ./Images/MoviesDropDown.png
[peopledropdown]: ./Images/PeopleDropDown.png
[popular]: ./Images/popular.png
[popularPeople]: ./Images/PopularPeople.png
[review]: ./public/review.png
[signup]: ./Images/Signup.png
[similar]: ./Images/similarMovies.png
[toprated]: ./Images/toprated.png
[upcoming]: ./Images/upcoming.png
[welcome]: ./Images/Welcome.png

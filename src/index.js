import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from "./pages/upcomingMoviesPage";
import TopRatedMoviePage from "./pages/topRatedMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
// import SearchResultsPage from './pages/searchResultsPage'
import popularPeoplePage from './pages/popularPeoplePage'
// import PeopleDetailsPage from './pages/peopleDetailsPage'
import WatchListMoviesPage from './pages/watchlistMoviesPage'
import { AuthProvider } from "./auth";
import welcome from "./pages/welcome";
import signup from "./signup";
import login from "./login";
import PrivateRoute from "./privateRoute";

const App = () => {
  return (
      <BrowserRouter>
      <AuthProvider>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
           <MoviesContextProvider>
              <GenresContextProvider>     {/* NEW  */}
                <Switch>
                  {/* <Route path="/people/:id" component={PeopleDetailsPage} /> */}
                  {/* <Route exact path="/movies/search" component={SearchResultsPage} /> */}
                  <PrivateRoute exact path="/movies/watchlist" component={WatchListMoviesPage} />
                  <PrivateRoute exact path="/movies/popularpeople" component={popularPeoplePage} />
                  <PrivateRoute exact path="/movies/toprated" component={TopRatedMoviePage} />
                  <PrivateRoute exact path="/movies/popular" component={PopularMoviesPage} />
                  <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                  <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviePage} />
                  <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                  <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                  <PrivateRoute path="/movies/:id" component={MoviePage} />
                  <PrivateRoute path="/home" component={HomePage} />
                  <Route path="/login" component={login} />
                  <Route path="/signup" component={signup} />
                  <Route path="/" component={welcome} />
                  <Redirect from="*" to="/" />
                </Switch>
              </GenresContextProvider>

           </MoviesContextProvider> 
      </div>
    </div>
    </AuthProvider>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

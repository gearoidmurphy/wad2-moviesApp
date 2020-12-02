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
import PeopleContextProvider from "./contexts/peopleContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import SearchResultsPage from './pages/searchResultsPage'
import popularPeoplePage from './pages/popularPeoplePage'


const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
           <MoviesContextProvider>
             <popularPeoplePage>
              <GenresContextProvider>     {/* NEW  */}
                <Switch>
                <Route exact path="/movies/search" component={SearchResultsPage} />
                  <Route exact path="/movies/popularpeople" component={popularPeoplePage} />
                  <Route exact path="/movies/toprated" component={TopRatedMoviePage} />
                  <Route exact path="/movies/popular" component={PopularMoviesPage} />
                  <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                  <Route exact path="/movies/upcoming" component={UpcomingMoviePage} />
                  <Route path="/reviews/:id" component={MovieReviewPage} />
                  <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                  <Route path="/movies/:id" component={MoviePage} />
                  <Route path="/" component={HomePage} />
                  <Redirect from="*" to="/" />
                </Switch>
              </GenresContextProvider>
             </popularPeoplePage>
           </MoviesContextProvider> 
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

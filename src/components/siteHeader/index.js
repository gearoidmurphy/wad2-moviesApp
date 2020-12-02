import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
    
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
              <div class="dropdown">
               <span class="button">Movies</span>
                <div class="dropdown-content">
                  <Link className="nav-link text-white" to="/movies/upcoming">
                    Upcoming
                  </Link>
                  <Link className="nav-link text-white" to="/movies/popular">
                    Popular Movies
                  </Link> 
                  <Link className="nav-link text-white" to="/movies/toprated">
                    Top Rated
                  </Link>
                  <Link className="nav-link text-white" to="/movies/favorites">
                    Favorite Movies
                  </Link>
                </div>
              </div>
          </li> 
          <li className="nav-item">
              <div class="dropdown">
               <span class="button">People</span>
                <div class="dropdown-content">
                  <Link className="nav-link text-white" to="/movies/popularpeople">
                    Popular People
                  </Link>
                </div>
              </div>
          </li> 
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/search">
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;
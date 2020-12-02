import React, { useContext } from "react";
import PageTemplate from '../components/templatePeopleList'
import {MoviesContext} from '../contexts/moviesContext'


const PopularPeoplePage = () => {
  const context = useContext(MoviesContext);
  const people = context.people.filter((p) => {  // New
    return !("favorite" in p);
  });

  return (
    <PageTemplate
      title="No. Movies"
      people={people}  /* Changed */
    />
  );
};
export default PopularPeoplePage;
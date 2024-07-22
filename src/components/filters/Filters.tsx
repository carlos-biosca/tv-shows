import { ReactElement } from "react";
import './Filters.scss'
import { Show } from "../../vite-env";

interface FiltersProps {
  state: {
    shows: Show[],
    filter: string
  }
  popularity: (shows: Show[]) => void,
  rating: (shows: Show[]) => void
  alphabet: (shows: Show[]) => void,
  year: (shows: Show[]) => void
} 

const Filters = ({state, popularity, rating, alphabet, year}: FiltersProps):ReactElement => {

  return ( 
    <div>
      <ul className="filters">
        <span>Sort by:</span>
        <li 
          onClick={() => popularity(state.shows)} 
          className={`filters__option ${state.filter === "popularity" ? "filters__option--selected" : ""}`} >
            Popularity
        </li>
        <li 
          onClick={() => rating(state.shows)}
          className={`filters__option ${state.filter === "rating" ? "filters__option--selected" : ""}`} >
          Rating
        </li>
        <li 
          onClick={() => alphabet(state.shows)}
          className={`filters__option ${state.filter === "alphabetical" ? "filters__option--selected" : ""}`} >     Alphabetical
        </li>
        <li 
          onClick={() => year(state.shows)}
          className={`filters__option ${state.filter === "year" ? "filters__option--selected" : ""}`} >
          Year
        </li>
      </ul>
    </div>
  );
}

export default Filters;
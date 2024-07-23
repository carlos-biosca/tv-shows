import { Dispatch, ReactElement } from "react";
import { Show, ReducerAction } from "../../vite-env";
import { REDUCER_ACTION_TYPE }from "../../reducers/FiltersReducer";
import { TbSTurnUp } from "react-icons/tb";
import './Filters.scss'

interface FiltersProps {
  state: {
    shows: Show[],
    filter: string
  }
  dispatch: Dispatch<ReducerAction>
} 

const Filters = ({state, dispatch}: FiltersProps): ReactElement => {
  const filterByPopularity = (shows: Show[]) => dispatch({type: REDUCER_ACTION_TYPE.POPULARITY, payload: shows})
  const filterByRating = (shows: Show[]) => dispatch({type: REDUCER_ACTION_TYPE.RATING, payload: shows})
  const filterByAlphabet = (shows: Show[]) => dispatch({type: REDUCER_ACTION_TYPE.ALPHABETICAL, payload: shows})
  const filterByYear = (shows: Show[]) => dispatch({type: REDUCER_ACTION_TYPE.YEAR, payload: shows})
  const reverse = (shows: Show[]) => dispatch({type: REDUCER_ACTION_TYPE.REVERSE, payload: shows})

  return ( 
    <div className="filters">
      <ul className="filters__list">
        <span>Sort by:</span>
        <li 
          onClick={() => filterByPopularity(state.shows)} 
          className={`filters__option ${state.filter === "popularity" ? "filters__option--selected" : ""}`} >
            Popularity
        </li>
        <li 
          onClick={() => filterByRating(state.shows)}
          className={`filters__option ${state.filter === "rating" ? "filters__option--selected" : ""}`} >
          Rating
        </li>
        <li 
          onClick={() => filterByAlphabet(state.shows)}
          className={`filters__option ${state.filter === "alphabetical" ? "filters__option--selected" : ""}`} >     Alphabetical
        </li>
        <li 
          onClick={() => filterByYear(state.shows)}
          className={`filters__option ${state.filter === "year" ? "filters__option--selected" : ""}`} >
          Year
        </li>
      </ul>
      <button 
        onClick={() => reverse(state.shows)}
        className="filters__reverse">
          <TbSTurnUp size={15}/>
        </button>
    </div>
  );
}

export default Filters;
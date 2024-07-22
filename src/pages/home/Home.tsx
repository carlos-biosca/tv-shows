import { ReactElement, useEffect, useReducer } from "react";
import { useLoaderData } from "react-router-dom";
import { Show, ReducerAction } from "../../vite-env";
import ShowCard from "../../components/showcard/ShowCard";
import Filters from "../../components/filters/Filters";
import './Home.scss'

const initialState: { shows: Show[]; filter: string } = {
  shows: [], 
  filter: "popularity"
};

const enum REDUCER_ACTION_TYPE {
  INITIAL,
  POPULARITY,
  RATING,
  ALPHABETICAL,
  YEAR,
  REVERSE
}

const reducer = (state: typeof initialState, action: ReducerAction): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INITIAL:
      return {
        ...state,
        shows: action.payload
      }
    case REDUCER_ACTION_TYPE.POPULARITY: 
      return {
        ...state, 
        shows: action.payload.sort((a,b) => b.popularity - a.popularity),
        filter: "popularity"
      }
    case REDUCER_ACTION_TYPE.RATING:
      return {
        ...state, 
        shows: action.payload.sort((a,b) => b.vote_average - a.vote_average),
        filter: "rating"
      }
    case REDUCER_ACTION_TYPE.ALPHABETICAL:
      return {
        ...state, 
        shows: action.payload.sort((a,b) => a.name > b.name ? 1 : -1),
        filter: "alphabetical"
      }
    case REDUCER_ACTION_TYPE.YEAR:
      return {
        ...state, 
        shows: action.payload.sort((a,b) => a.first_air_date > b.first_air_date ? 1 : -1), 
        filter: "year"
      }
    default:
      return state
  }
}

const Home = (): ReactElement => {
  const results = useLoaderData() as Show[]; 
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const initialState = (array: Show[]) => {
      dispatch({type: REDUCER_ACTION_TYPE.INITIAL, payload: array})
    }
    if(results) initialState(results)
  },[results])

  const filterByPopularity = (shows: Show[]) => dispatch({type: REDUCER_ACTION_TYPE.POPULARITY, payload: shows})
  const filterByRating = (shows: Show[]) => dispatch({type: REDUCER_ACTION_TYPE.RATING, payload: shows})
  const filterByAlphabet = (shows: Show[]) => dispatch({type: REDUCER_ACTION_TYPE.ALPHABETICAL, payload: shows})
  const filterByYear = (shows: Show[]) => dispatch({type: REDUCER_ACTION_TYPE.YEAR, payload: shows})

  return (
    <div className="home">
      <div className="home__wrapper">
        <h3>TMDb Charts</h3>
        <h1>Most Popular TV Shows</h1>
        <Filters 
          state={state} 
          popularity={filterByPopularity} 
          rating={filterByRating} 
          alphabet={filterByAlphabet}
          year={filterByYear}
        />
        {
          results ? (
            <ul className="home__list">
              {state.shows.map(show => {
              return(
                  <li key={show.id}>
                    <ShowCard info={show}/>
                  </li>
                )
              })}
            </ul>) : null
          }
      </div>
    </div>
  );
}

export default Home
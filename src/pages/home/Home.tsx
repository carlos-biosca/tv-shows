import { ReactElement, useEffect, useReducer } from "react";
import { useLoaderData } from "react-router-dom";
import { Show } from "../../vite-env";
import ShowCard from "../../components/showcard/ShowCard";
import Filters from "../../components/filters/Filters";
import './Home.scss'

import {reducer, initialState, REDUCER_ACTION_TYPE }from "../../reducers/FiltersReducer";

const Home = (): ReactElement => {
  const results = useLoaderData() as Show[]; 
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const initialState = (array: Show[]) => {
      dispatch({type: REDUCER_ACTION_TYPE.INITIAL, payload: array})
    }
    if(results) initialState(results)
  },[results])

  return (
    <div className="home">
      <div className="home__wrapper">
        <h3>TMDb Charts</h3>
        <h1>Most Popular TV Shows</h1>
        <Filters 
          state={state} 
          dispatch={dispatch}
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
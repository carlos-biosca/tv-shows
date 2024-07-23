import { Show, ReducerAction } from "../vite-env";

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
    case REDUCER_ACTION_TYPE.REVERSE:
      return {
        ...state,
        shows: [...action.payload].reverse()
      }
    default:
      return state
  }
}

export {reducer, initialState, REDUCER_ACTION_TYPE}
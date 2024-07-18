import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";
import './Home.scss'

import ShowCard from "../../components/showcard/ShowCard";

interface Show {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  origin_country: string[],
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  first_air_date: string,
  name: string,
  vote_average: number,
  vote_count: number
}

const Home = (): ReactElement => {
  const results = useLoaderData() as Show[]; 

  return (
    <div className="home">
      <div className="wrapper">
        <h3>TMDb Charts</h3>
        <h1>Most Popular TV Shows</h1>
        <div>
          <p className="home__filters">Sort by</p>
        </div>
        {
          results ? (
            <ul className="home__list">
              {results.map(show => {
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
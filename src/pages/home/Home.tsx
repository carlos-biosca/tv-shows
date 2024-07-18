import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";
import './Home.scss'
import { Show } from "../../vite-env";
import ShowCard from "../../components/showcard/ShowCard";


const Home = (): ReactElement => {
  const results = useLoaderData() as Show[]; 

  return (
    <div className="home">
      <div className="home__wrapper">
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
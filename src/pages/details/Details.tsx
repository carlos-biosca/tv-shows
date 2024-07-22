import { ReactElement, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { ShowDetails, Cast } from "../../vite-env";
import './Details.scss'
import { TiStarFullOutline } from "react-icons/ti";
import { baseUrl, largeSize } from "../../constants";
import arrayToString from "../../utils/arrayToString";
import CastCard from "../../components/castcard/CastCard";

const Details = (): ReactElement => {
  const details = useLoaderData() as ShowDetails; 
  const {vote_average, overview, poster_path, name, first_air_date, genres, created_by, number_of_episodes, number_of_seasons, origin_country, credits} = details
  const joinedGenres = useMemo<string>(() => arrayToString(genres, ','),[genres])
  const joinedCreators = useMemo<string>(() => arrayToString(created_by, ' -'),[created_by])
  console.log(details);

  return (
    <div className="details">
      <section className="details__wrapper">
        <img src={`${baseUrl}${largeSize}${poster_path}`} alt="poster" />
        <div className="details__block">
          <h1 className="details__title">{name}
            <span className="details__date">({first_air_date.slice(0,4)})</span>
          </h1>
          <p>{joinedGenres}</p>
          <p className="details__rate">
            <TiStarFullOutline color="gold" size={40}/>
            <span className="details__average">{vote_average.toFixed(1)}/10</span>
          </p>
          {created_by.length > 0 ? <p><span className="details__info">Creators</span>{joinedCreators}</p> : null}
          <p><span className="details__info">Seasons</span>{number_of_seasons}</p>
          <p><span className="details__info">Episodes</span>{number_of_episodes}</p>
          <p><span className="details__info">Country</span> {origin_country[0]}</p>
          {overview === '' ? null : (
            <>
              <h3>Overview</h3>
              <p>{overview}</p>
            </>
          )}
        </div>
      </section>
      <section className="details__cast">
        <h2 className="details__top-title">Top Cast</h2>
          { credits && credits.cast.length > 0 ? (
            <div className="details__slide">
              {
                credits.cast.map((item: Cast) => {
                  return <CastCard info={item} />
                })
              }
            </div>
          ): <p className="details__empty">Not available cast data</p>}
      </section>
    </div>
  );
}

export default Details;
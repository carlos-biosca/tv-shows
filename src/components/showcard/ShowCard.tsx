import { ReactElement } from "react";
import './ShowCard.scss'
import { TiStarFullOutline } from "react-icons/ti";

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

interface ShowCardProps {
  info: Show
}

const ShowCard = ({ info }: ShowCardProps): ReactElement => {
  const {poster_path, name, first_air_date, vote_average, vote_count, overview , origin_country} = info
  return ( 
    <div className="showcard">
      <div className="showcard__info">
        <img src={`https://image.tmdb.org/t/p/w92${poster_path}`} alt="poster" />
        <div className="showcard__text">
            <p className="showcard__title">{name}</p>
            <p className="showcard__year"><span>Year:</span> {first_air_date.slice(0,4)}</p>
            <p className="showcard__country"><span>Country:</span> {origin_country[0]}</p>
            <p className="showcard__rate">
              <TiStarFullOutline color="gold"/>
              <span className="showcard__average">{vote_average.toFixed(1)}</span>
              <span className="showcard__reviews">({vote_count})</span>
            </p>
        </div>
      </div>
      <p className="showcard__overview">{overview}</p>
    </div> );
}

export default ShowCard;
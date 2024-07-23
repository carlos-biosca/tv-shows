import { ReactElement } from "react";
import { Show } from "../../vite-env";
import { Link } from "react-router-dom";
import './ShowCard.scss'
import { TiStarFullOutline } from "react-icons/ti";
import { baseUrl, smallSize } from "../../constants";

interface ShowCardProps {
  info: Show
}

const ShowCard = ({ info }: ShowCardProps): ReactElement => {
  const {poster_path, name, first_air_date, vote_average, vote_count, overview , origin_country, id} = info
  return ( 
    <Link to={`/details/${id}`} className="showcard">
      <div className="showcard__info">
        <img src={`${baseUrl}${smallSize}${poster_path}`} alt="poster" />
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
    </Link> );
}

export default ShowCard;
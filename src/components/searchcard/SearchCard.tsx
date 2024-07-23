import { ReactElement } from "react";
import { baseUrl, smallSize } from '../../constants';
import './SearchCard.scss'
import { Show } from "../../vite-env";
import { Link } from "react-router-dom";

interface SearchCardProps {
  info: Show,
  close: () => void
}

const SearchCard = ({ info, close }: SearchCardProps): ReactElement => {
  const {poster_path, name, first_air_date, id} = info
  return ( 
    <Link to={`/details/${id}`} className='searchcard' onClick={close}>
      <img className='searchcard__image' src={`${baseUrl}${smallSize}${poster_path}`} alt="poster result" />
      <div className="searchcard__text">
          <p className="searchcard__title">{name}</p>
          <p className="searchcard__year">{first_air_date.slice(0,4)}</p>
      </div>
    </Link>
  );
}

export default SearchCard;
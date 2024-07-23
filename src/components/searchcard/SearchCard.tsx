import { ReactElement } from "react";
import { baseUrl, smallSize } from '../../constants';
import './SearchCard.scss'
import { Show } from "../../vite-env";

interface SearchCardProps {
  info: Show
}

const SearchCard = ({ info }: SearchCardProps): ReactElement => {
  const {poster_path, name, first_air_date} = info
  return ( 
    <li className='searchcard'>
      <img className='searchcard__image' src={`${baseUrl}${smallSize}${poster_path}`} alt="poster result" />
      <div className="searchcard__text">
          <p className="searchcard__title">{name}</p>
          <p className="searchcard__year">{first_air_date.slice(0,4)}</p>
      </div>
    </li>
  );
}

export default SearchCard;
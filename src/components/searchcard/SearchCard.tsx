import { ReactElement } from "react";
import { baseUrl, smallSize } from '../../constants';
import './SearchCard.scss'

const SearchCard = (): ReactElement => {
  return ( 
    <li className='searchcard'>
      <img className='searchcard__image' src={`${baseUrl}${smallSize}/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg`} alt="poster" />
      <div className="searchcard__text">
          <p className="searchcard__title">Cobra kai</p>
          <p className="searchcard__year">2018</p>
      </div>
    </li>
  );
}

export default SearchCard;
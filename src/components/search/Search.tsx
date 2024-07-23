import { ReactElement } from 'react';
import { CiSearch } from "react-icons/ci";
import './Search.scss'
import { baseUrl, smallSize } from '../../constants';
import SearchCard from '../searchcard/SearchCard';

const Search = (): ReactElement => {
  return (     
    <div className='search'>
      <div className='search__border'>
        <button className='search__button'><CiSearch size={20}/></button>
        <input type="text" className='search__input'/>
        <ul className='search__list'>
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
        </ul>
      </div>
    </div> 
  );
}

export default Search;
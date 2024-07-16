import './Search.scss'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (     
    <div className='search'>
      <button className='search__button'><CiSearch size={20}/></button>
      <input type="text" className='search__input'/>
    </div> 
  );
}

export default Search;
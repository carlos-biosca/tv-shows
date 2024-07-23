import { ReactElement, useState, useEffect} from 'react';
import { CiSearch } from "react-icons/ci";
import SearchCard from '../searchcard/SearchCard';
import './Search.scss'
import { Show } from '../../vite-env';
const apiKey = import.meta.env.VITE_SHOWS_API_KEY

const Search = (): ReactElement => {
  const [inputValue, setInputValue] = useState<string>('')
  const [results, setResults] = useState<Show[]>([])

  useEffect(() => {
    const getSearchResults = async () => {
      const url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${inputValue}`
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResults(data.results.slice(0,5))
      }catch (err) {
        console.log(err);
        return null
      }
    }
    getSearchResults()
  },[inputValue])

  return (     
    <div className='search'>
        <form className='search__form'>
          <button 
          className='search__button'
          type='button'
          >
            <CiSearch size={20}/>
          </button>
          <input 
            type="text" 
            className='search__input'
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        {
          results.length > 0 ? (
            <ul className='search__list'>
              {
                results.map(show => <SearchCard info={show} key={show.id}/>)
              }
            </ul> 
          ) : null
        }
    </div> 
  );
}

export default Search;
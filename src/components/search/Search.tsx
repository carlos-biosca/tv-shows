import { ReactElement, useState, useEffect, useRef, ChangeEvent} from 'react';
import { CiSearch } from "react-icons/ci";
import SearchCard from '../searchcard/SearchCard';
import './Search.scss'
import { Show } from '../../vite-env';
const apiKey = import.meta.env.VITE_SHOWS_API_KEY

const Search = (): ReactElement => {
  const [inputValue, setInputValue] = useState<string>('')
  const [results, setResults] = useState<Show[]>([])
  const [open, setOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

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

  const handleOpen = ():void => {
    setOpen(true);
  };

  const handleClose = ():void => {
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        handleClose()
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  return (     
    <div className='search' ref={containerRef}>
      <form className='search__form'>
        <button 
        className='search__button'
        type='button'
        onClick={handleOpen}
        >
          <CiSearch size={20}/>
        </button>
        <input 
          type="text" 
          className='search__input'
          onChange={handleChange}
          onFocus={handleOpen}
        />
      </form>
      {
        open && results.length > 0 ? (
          <ul className='search__list'>
            {
              results.map(show => 
                <li key={show.id}>
                  <SearchCard info={show} close={handleClose} key={show.id}/>
                </li>
              )
            }
          </ul> 
        ) : null
      }
    </div> 
  );
}

export default Search;
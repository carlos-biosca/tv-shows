const apiKey = import.meta.env.VITE_SHOWS_API_KEY


interface Show {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  origin_country: string[],
  original_language: string
}

export async function loader() {
  const response = await fetch(`https://api.themoviedb.org/3/tv/popular?page=1&api_key=${apiKey}`);
  const data = await response.json();
  const results = data.results
  console.log(results);
  return results as Show[];
}
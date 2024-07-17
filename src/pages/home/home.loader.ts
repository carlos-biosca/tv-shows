const apiKey = import.meta.env.VITE_SHOWS_API_KEY

interface Shows {
  page: number;
  results: [];
  total_pages: number;
  total_results: number
}

export async function loader() {
/*const response = await fetch(`https://api.themoviedb.org/3/tv/popular?page=1&api_key=${apiKey}`);
  const data = await response.json();
  return data as Shows; */
 /*  const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`);
  const data = await response.json();
  console.log(data); */
  return null
}
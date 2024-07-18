const apiKey = import.meta.env.VITE_SHOWS_API_KEY
import { Show } from "../../vite-env";

export async function loader() {
  try {
    const url = `https://api.themoviedb.org/3/tv/popular?page=1&api_key=${apiKey}`
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data
    return results as Show[];
  } catch(err){
    console.log(err);
    return null
  }
}
const apiKey = import.meta.env.VITE_SHOWS_API_KEY
import { Show } from "../../vite-env";

export async function loader() {
  if (!apiKey) {
    console.error('VITE_SHOWS_API_KEY is not set in .env file');
    return null;
  }

  try {
    const url = `https://api.themoviedb.org/3/tv/popular?page=1&api_key=${apiKey}`
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    const { results } = data;
    
    return results as Show[];
  } catch(err) {
    console.error('Failed to load shows:', err);
    return null;
  }
}

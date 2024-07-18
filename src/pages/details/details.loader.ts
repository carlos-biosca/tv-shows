import type { Params } from "react-router-dom";
const apiKey = import.meta.env.VITE_SHOWS_API_KEY
import { ShowDetails } from "../../vite-env";

interface urlParams {
  params: Params<string>
}

export async function loader({ params }: urlParams) {
  try {
    const url = `https://api.themoviedb.org/3/tv/${params.showId}?api_key=${apiKey}`
    const response = await fetch(url);
    const data = await response.json();
    return data as ShowDetails
  } catch(err){
    console.log(err);
    return null
  }
}
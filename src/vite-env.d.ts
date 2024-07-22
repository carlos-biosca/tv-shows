/// <reference types="vite/client" />

export interface Show {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  origin_country: string[],
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  first_air_date: string,
  name: string,
  vote_average: number,
  vote_count: number
}

export interface ShowDetails {
  adult: boolean;
  backdrop_path: string;
  created_by: Creators[]; 
  credits: Credits;
  episode_run_time: number[]; 
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Episode;
  name: string;
  next_episode_to_air: Episode;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: Country[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}

interface Creators {
  name: string
}

interface Episode {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
}

interface Network {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface Country {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  character?: string;
  credit_id: string;
  order?: number;
}

interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number | null;
  profile_path: string | null;
  department: string;
  job: string;
  credit_id: string;
}

interface Credits {
  cast: Cast[];
  crew: Crew[];
}

export type ReducerAction = {
  type: REDUCER_ACTION_TYPE
  payload: Show[] 
}
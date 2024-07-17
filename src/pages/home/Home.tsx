import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";
import './Home.scss'

const show = {
    "adult": false,
    "backdrop_path": "/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
    "genre_ids": [
        10765,
        18,
        10759
    ],
    "id": 94997,
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_name": "House of the Dragon",
    "overview": "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
    "popularity": 4461.815,
    "poster_path": "/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
    "first_air_date": "2022-08-21",
    "name": "House of the Dragon",
    "vote_average": 8.423,
    "vote_count": 4417
}

const Home = (): ReactElement => {
  const shows = useLoaderData()
  console.log(shows);
  return (
    <div className="wrapper">
      <h3>Tablas de TMDb </h3>
      <h1>Series más populares</h1>
      <div>
        <p>Ordenar por</p>
      </div>
      <ul>
        <li>
          <div>
            <img src="https://image.tmdb.org/t/p/w154/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg" alt="" />
            <p>{show.name}</p>
            <p>{show.first_air_date.slice(0,4)}</p>
            <p>
              <span>{show.vote_average}</span>
              <span>{show.vote_count}</span>
            </p>
            <p>{show.overview}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Home
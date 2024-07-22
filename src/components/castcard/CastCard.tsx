import { ReactElement } from "react";
import { baseUrl, mediumSize } from "../../constants";
import './CastCard.scss'
import { Cast } from "../../vite-env";

interface CastCardProps {
  info: Cast
}

const CastCard = ({ info }: CastCardProps):ReactElement =>  {
  const {id, character, name, profile_path} = info
  return (
    <div className="cast__card" key={id}>
      <img src={`${baseUrl}${mediumSize}${profile_path}`} alt="cast image" />
      <div className="cast__info">
        <h4 className="cast__name">{name}</h4>
        <p className="cast__character">{character}</p>
      </div>
    </div>
  );
}

export default CastCard;
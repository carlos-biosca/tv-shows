import { ReactElement } from "react";
import { baseUrl, mediumSize } from "../../constants";
import './CastCard.scss'
import { Cast } from "../../vite-env";
import { FaUserAlt } from "react-icons/fa";

interface CastCardProps {
  info: Cast
}

const CastCard = ({ info }: CastCardProps):ReactElement =>  {
  const {character, name, profile_path} = info
  return (
    <div className="cast__card">
      {profile_path ? 
        <img src={`${baseUrl}${mediumSize}${profile_path}`} alt="cast image" /> : 
        (
        <div className="cast__empty">
          <FaUserAlt  size={50} color="white"/>
        </div>
      )}
      <div className="cast__info">
        <h4 className="cast__name">{name}</h4>
        <p className="cast__character">{character}</p>
      </div>
    </div>
  );
}

export default CastCard;
import { css } from "@emotion/css";
import * as React from "react";
import { generatePath, Link } from "react-router-dom";
import { ROUTES } from "../../App";
import { imageURL } from "../../consts/imageURL";
import { Actor } from "../../types/filmActors";

interface ActorResultProps {
  actor: Actor;
}

export const ActorResult: React.FC<ActorResultProps> = ({ actor }) => {
  return (
    <div className={hoverScale}>
      <Link to={generatePath(ROUTES.ACTOR, { name: actor.name })}>
        {actor.profile_path &&
          <img
            src={imageURL + actor.profile_path}
            className={actorImage}
            alt={actor.name}
          />
        }
        <div className={actorDescription}>{actor.name}</div>
      </Link>
    </div>
  );
};

const actorImage = css({
  display: "block",
  width: "100%",
  height: "auto",
  borderRadius: "24px",
  boxShadow: "0px 0px 10px 2px #fff",
});

const actorDescription = css({
  color: "#fff",
  fontSize: "20px",
  textAlign: "center",
  paddingTop: "10px",
});

const hoverScale = css({
  transition: "ease-in 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

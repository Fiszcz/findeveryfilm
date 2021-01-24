import { css } from "@emotion/css";
import * as React from "react";
import { Actor } from "../../types/filmActors";
import { ActorResult } from "./ActorResult";

interface ListOfActorProps {
  actorsList: Actor[];
}

export const ListOfActors: React.FC<ListOfActorProps> = ({ actorsList }) => {
  return (
    <div className={listOfActors}>
      <div className={gridLayoutStyle}>
        {actorsList.map((actor) => (
          <ActorResult actor={actor} key={actor.id} />
        ))}
      </div>
    </div>
  );
};

const listOfActors = css({
  marginBottom: "50px",
});

const gridLayoutStyle = css({
  display: "grid",
  gridTemplateColumns: "18% 18% 18% 18% 18%",
  rowGap: "70px",
  columnGap: "2.5%",
});

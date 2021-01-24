import * as React from "react";
import { useParams } from "react-router-dom";

export const ActorDetailsPage = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <>
      <div> ACTOR {name} </div>
    </>
  );
};

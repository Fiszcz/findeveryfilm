import * as React from "react";
import { useParams } from "react-router-dom";

export const FilmDetails = () => {
  const { id } = useParams<{ id: string }>();

  return <div>Film</div>;
};

import { QueryFunctionContext } from "react-query";
import { mapDtoToModelForFilmDetails } from "../types/filmDetails";
import { mapDtoToModelForFilmActors } from "../types/filmActors";
import { Axios } from "./api";

export const getFilmDetails = ({
  queryKey: [, id],
}: QueryFunctionContext<GetFilmDetailsQuery>) => {
  return Axios.get("filmDetails", {
    params: { query: id },
  }).then(({ data }) => mapDtoToModelForFilmDetails(data));
};

export const getFilmActors = ({
  queryKey: [, id],
}: QueryFunctionContext<GetFilmActorsQuery>) => {
  return Axios.get("filmActors", {
    params: { query: id },
  }).then(({ data }) => mapDtoToModelForFilmActors(data));
};

export type GetFilmDetailsQuery = [query: "get-film-details", id: string];
export type GetFilmActorsQuery = [query: "get-film-actors", id: string];

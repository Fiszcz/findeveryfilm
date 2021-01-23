import { QueryFunctionContext } from "react-query";
import { mapDtoToModelForFilmDetails } from "../types/filmDetails";
import { Axios } from "./api";

export const getFilmDetails = ({
  queryKey: [, id],
}: QueryFunctionContext<GetFilmDetailsQuery>) => {
  return Axios.get("filmDetails", {
    params: { query: id },
  }).then(({ data }) => mapDtoToModelForFilmDetails(data));
};

export type GetFilmDetailsQuery = [query: "get-film-details", id: string];

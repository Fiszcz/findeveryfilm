import { QueryFunctionContext } from "react-query";
import { mapDtoToModelForSearchResult } from "../types/searchResult";
import { Axios } from "./api";

export const searchFilm = ({
  queryKey: [, query],
}: QueryFunctionContext<SearchFilmQuery>) => {
  return Axios.get("films", { params: { name: query } }).then(({ data }) =>
    mapDtoToModelForSearchResult(data)
  );
};

export type SearchFilmQuery = ["search-film", string];

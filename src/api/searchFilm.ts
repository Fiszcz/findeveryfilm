import { QueryFunctionContext } from "react-query";
import { mapDtoToModelForSearchResult } from "../types/searchResult";
import { Axios } from "./api";

export const searchFilm = ({
  queryKey: [, phrase],
  pageParam,
}: QueryFunctionContext<SearchFilmQuery>) => {
  return Axios.get("films", {
    params: { query: phrase, page: pageParam },
  }).then(({ data }) => mapDtoToModelForSearchResult(data));
};

export type SearchFilmQuery = [query: "search-film", phrase: string];

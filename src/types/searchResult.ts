import { Film, FilmDto, mapDtoToModelForFilm } from "./film";

export interface SearchResultDto {
  page: number;
  results: FilmDto[];
  total_pages: number;
  total_results: number;
}

export interface SearchResult {
  page: number;
  results: Film[];
  totalPages: number;
  totalResults: number;
}

export const mapDtoToModelForSearchResult = (
  searchResultDto: SearchResultDto
): SearchResult => {
  const { page, results, total_pages, total_results } = searchResultDto;

  return {
    page,
    results: results.map(mapDtoToModelForFilm),
    totalPages: total_pages,
    totalResults: total_results,
  };
};

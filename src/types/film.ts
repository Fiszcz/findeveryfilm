export interface FilmDto {
  id: number;
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  vote_average: number;
}

export interface Film {
  id: number;
  posterPath?: string;
  adult: boolean;
  overview: string;
  releaseDate: string;
  genres: string[];
  originalTitle: string;
  originalLanguage: string;
  title: string;
  backdropPath?: string;
  popularity: number;
  voteCount: number;
  voteAverage: number;
}

const genresMap = new Map<number, string>([
  [28, "Akcja"],
  [12, "Przygodowy"],
  [16, "Animacja"],
  [35, "Komedia"],
  [80, "Kryminał"],
  [99, "Dokumentalny"],
  [18, "Dramat"],
  [10751, "Familijny"],
  [14, "Fantasy"],
  [36, "Historyczny"],
  [27, "Horror"],
  [10402, "Muzyczny"],
  [9648, "Tajemnica"],
  [10749, "Romans"],
  [878, "Sci-Fi"],
  [10770, "film TV"],
  [53, "Thriller"],
  [10752, "Wojenny"],
  [37, "Western"],
]);

export const mapDtoToModelForFilm = (filmDto: FilmDto): Film => {
  return {
    id: filmDto.id,
    adult: filmDto.adult,
    backdropPath: filmDto.backdrop_path || undefined,
    genres: filmDto.genre_ids.map(genresMap.get) as string[],
    originalLanguage: filmDto.original_language,
    originalTitle: filmDto.original_title,
    overview: filmDto.overview,
    popularity: filmDto.popularity,
    posterPath: filmDto.poster_path || undefined,
    releaseDate: filmDto.release_date,
    title: filmDto.title,
    voteAverage: filmDto.vote_average,
    voteCount: filmDto.vote_count,
  };
};

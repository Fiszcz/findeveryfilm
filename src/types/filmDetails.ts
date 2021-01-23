export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface FilmDetailsDto {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  poster_path: string | null;
  overview: string;
  release_date: string;
  genres: Genre[];
  original_title: string;
  original_language: string;
  title: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  budget: number;
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  video: boolean;
}

export interface FilmDetails {
  id: number;
  poster_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genres?: Genre[];
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  budget: number;
  homepage: string;
  imdb_id: string;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages?: Language[];
  status: string;
  tagline: string;
  video: boolean;
}

export const genresMap = new Map<number, string>([
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

export const mapDtoToModelForFilmDetails = (
  filmDetailsDto: FilmDetailsDto
): FilmDetails => {
  return {
    id: filmDetailsDto.id,
    adult: filmDetailsDto.adult,
    backdrop_path: filmDetailsDto.backdrop_path || undefined,
    genres: filmDetailsDto.genres,
    original_language: filmDetailsDto.original_language,
    original_title: filmDetailsDto.original_title,
    overview: filmDetailsDto.overview,
    popularity: filmDetailsDto.popularity,
    poster_path: filmDetailsDto.poster_path || undefined,
    release_date: filmDetailsDto.release_date,
    title: filmDetailsDto.title,
    vote_average: filmDetailsDto.vote_average,
    vote_count: filmDetailsDto.vote_count,
    budget: filmDetailsDto.budget,
    homepage: filmDetailsDto.homepage,
    imdb_id: filmDetailsDto.imdb_id,
    production_companies: filmDetailsDto.production_companies,
    production_countries: filmDetailsDto.production_countries,
    revenue: filmDetailsDto.revenue,
    runtime: filmDetailsDto.runtime,
    spoken_languages: filmDetailsDto.spoken_languages,
    status: filmDetailsDto.status,
    tagline: filmDetailsDto.tagline,
    video: filmDetailsDto.video,
  };
};

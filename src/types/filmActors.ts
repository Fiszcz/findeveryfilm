export interface ActorDto {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Actor {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface FilmActorsDto {
  id: number;
  cast: Actor[];
}

export interface FilmActors {
  id: number;
  cast: Actor[];
}

export const mapDtoToModelForActor = (actor: ActorDto): Actor => {
  return {
    adult: actor.adult,
    gender: actor.gender,
    id: actor.id,
    known_for_department: actor.known_for_department,
    name: actor.name,
    original_name: actor.original_name,
    popularity: actor.popularity,
    profile_path: actor.profile_path,
    cast_id: actor.cast_id,
    character: actor.character,
    credit_id: actor.credit_id,
    order: actor.order,
  };
};

export const mapDtoToModelForFilmActors = (
  filmActors: FilmActorsDto
): FilmActors => {
  return {
    id: filmActors.id,
    cast: filmActors.cast.map((actor) => mapDtoToModelForActor(actor)),
  };
};

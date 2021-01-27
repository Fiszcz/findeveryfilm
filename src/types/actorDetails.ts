export interface LinkHref {
  href: string;
}

export interface Links {
  self: LinkHref;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Person {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: Date;
  deathday: Date;
  gender: string;
  image: Image;
  _links: Links;
}

export interface Actor {
  score: number;
  person: Person;
}

export interface ActorDetails {
  score: number;
  person: Person;
}

export interface ActorsDto extends Array<Actor> {}

export interface ActorsDetails extends Array<ActorDetails> {}

export const mapDtoToModelForActorDetails = (
  actorsDto: ActorsDto
): ActorsDetails => {
  return actorsDto.map((actor) => {
    return {
      score: actor.score,
      person: actor.person,
    };
  });
};

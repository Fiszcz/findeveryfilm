import { QueryFunctionContext } from "react-query";
import { mapDtoToModelForActorDetails } from "../types/actorDetails";
import { Axios } from "./api";

export const getActorDetails = ({
  queryKey: [, id],
}: QueryFunctionContext<GetActorDetailsQuery>) => {
  return Axios.get("searchPeople", {
    params: { query: id },
  }).then(({ data }) => mapDtoToModelForActorDetails(data));
};

export type GetActorDetailsQuery = [query: "get-actor-details", id: string];

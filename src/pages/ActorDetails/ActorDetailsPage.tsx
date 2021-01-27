import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  getActorDetails,
  GetActorDetailsQuery,
} from "../../api/getActorDetails";
import { ActorDetails, ActorsDetails } from "../../types/actorDetails";
import { css } from "@emotion/css";
import { format, differenceInYears } from "date-fns";

export const ActorDetailsPage = () => {
  const { name } = useParams<{ name: string }>();
  let data;
  const getActorDetailsQuery: GetActorDetailsQuery = [
    "get-actor-details",
    name,
  ];
  const details = useQuery<ActorsDetails>(
    getActorDetailsQuery,
    getActorDetails,
    {
      enabled: Boolean(name),
    }
  );

  if (details.isSuccess) {
    data = details.data.sort(
      (actor1: ActorDetails, actor2: ActorDetails) =>
        actor2.score - actor1.score
    )[0];
  }

  return (
    <>
      {details.isSuccess && data && (
        <div className={actorDetails}>
          {data.person.image?.medium && (
            <img
              className={actorDetailsImg}
              src={data?.person.image.medium}
              alt={data?.person.name}
            />
          )}
          <div className={imageGradient}></div>
          <div className={actorDetailsContent}>
            <div className={columnLeft}>
              <img
                className={columnLeftImg}
                src={
                  data.person.image?.medium
                    ? data?.person.image.medium
                    : "../assets/personPlaceholder.png"
                }
                alt={data?.person.name}
              />
            </div>
            <div className={columnRight}>
              <h1 className={title}>{name}</h1>
              <h2 className={colorWhite}>Personal data</h2>
              {data.person.gender && (
                <p className={dataBox}>
                  Gender:&nbsp;
                  <span className={dataValue}>{data?.person.gender}</span>
                </p>
              )}
              {data.person.birthday && (
                <p className={dataBox}>
                  Age:&nbsp;
                  <span className={dataValue}>
                    {differenceInYears(
                      new Date(),
                      new Date(data?.person.birthday)
                    )}
                  </span>
                </p>
              )}
              {data.person.birthday && (
                <p className={dataBox}>
                  Date of birth:&nbsp;
                  <span className={dataValue}>
                    {format(new Date(data?.person.birthday), "dd-MM-yyyy")}
                  </span>
                </p>
              )}
              {data.person?.deathday ? (
                <p className={dataBox}>
                  Date of death:&nbsp;
                  <span className={dataValue}>
                    {format(new Date(data?.person.deathday), "dd-MM-yyyy")}
                  </span>
                </p>
              ) : null}
              {data.person.country && (
                <p className={dataBox}>
                  Place of birth:&nbsp;
                  <span className={dataValue}>{data?.person.country.name}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const actorDetails = css({
  position: "relative",
  color: "#fff",
});

const actorDetailsImg = css({
  width: "100%",
  objectFit: "cover",
  height: "100vh",
});

const imageGradient = css({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "#000",
  opacity: "0.7",
});

const actorDetailsContent = css({
  position: "absolute",
  top: "50px",
  left: "50%",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  transform: "translateX(-50%)",
  width: "calc(100% - 280px)",
});

const columnLeft = css({
  flexBasis: "35%",
});

const columnLeftImg = css({
  width: "70%",
  boxShadow: "0 0 50px -5px #fff",
});

const columnRight = css({
  flexBasis: "60%",
});

const colorWhite = css({
  color: "#fff",
  fontWeight: "bold",
});

const title = css({
  fontSize: "3em",
  color: "#fff",
});

const dataValue = css({
  fontWeight: "bold",
});

const dataBox = css({
  fontSize: "16px",
});

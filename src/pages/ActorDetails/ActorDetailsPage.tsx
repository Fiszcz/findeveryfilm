import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  getActorDetails,
  GetActorDetailsQuery,
} from "../../api/getActorDetails";
import { ActorDetails, ActorsDetails } from "../../types/actorDetails";
import { css } from "@emotion/css";
const moment = require("moment");

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
          <img
            className={actorDetailsImg}
            src={data?.person.image.medium}
            alt={data?.person.name}
          />
          <div className={imageGradient}></div>
          <div className={actorDetailsContent}>
            <div className={columnLeft}>
              <img
                className={columnLeftImg}
                src={data?.person.image.medium}
                alt={data?.person.name}
              />
            </div>
            <div className={columnRight}>
              <h1 className={title}>{data?.person.name}</h1>
              <h2 className={colorWhite}>Dane osobowe</h2>
              <p className={dataBox}>
                Płeć:&nbsp;
                <span className={dataValue}>
                  {data?.person.gender === "Female" ? "Kobieta" : "Mężczyzna"}
                </span>
              </p>
              <p className={dataBox}>
                Wiek:&nbsp;
                <span className={dataValue}>
                  {moment().diff(data?.person.birthday, "years")}
                </span>
              </p>
              <p className={dataBox}>
                Data urodzenia:&nbsp;
                <span className={dataValue}>
                  {moment(data?.person.birthday).format("DD-MM-YYYY")}
                </span>
              </p>
              {data?.person?.deathday ? (
                <p className={dataBox}>
                  Data śmierci:&nbsp;
                  <span className={dataValue}>
                    {moment(data?.person.deathday).format("DD-MM-YYYY")}
                  </span>
                </p>
              ) : null}
              <p className={dataBox}>
                Miejsce urodzenia:&nbsp;
                <span className={dataValue}>{data?.person.country.name}</span>
              </p>
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

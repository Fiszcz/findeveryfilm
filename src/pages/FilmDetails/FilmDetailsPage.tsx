import { css } from "@emotion/css";
import * as React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { FilmDetails, genresMap } from "../../types/filmDetails";
import { getFilmDetails, GetFilmDetailsQuery } from "../../api/getFilmDetails";
import { imageURL } from "../../consts/imageURL";
import { ProductionCountry } from "../../types/filmDetails";
import { relative } from "path";
export const FilmDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const getFilmDetailsQuery: GetFilmDetailsQuery = ["get-film-details", id];
  const { data, isLoading, isSuccess } = useQuery<FilmDetails>(
    getFilmDetailsQuery,
    getFilmDetails,
    { enabled: Boolean(id) }
  );
  console.log("data", data);

  const mapCountries = (countries: ProductionCountry[]) => {
    let str = "";
    countries.forEach((country, index) => {
      if (index === 0) str += country.iso_3166_1;
      else str += ", " + country.iso_3166_1;
    });
  };

  return (
    <>
      <div className={filmDetails}>
        <img
          className={filmDetailsImg}
          src={imageURL + data?.backdrop_path}
          alt={data?.title}
        />
        <div className={imageGradient}></div>
        <div className={filmDetailsContent}>
          <div className={columnLeft}>
            <img
              className={columnLeftImg}
              src={imageURL + data?.poster_path}
              alt={data?.title}
            />
          </div>
          <div className={columnRight}>
            <h1 className={title}>{data?.title}</h1>
            <h2 className={colorWhite}>{data?.tagline}</h2>
            <p>
              {data?.release_date}{" "}
              <span>
                (
                {data?.production_countries?.map(
                  (country, index) => (index ? ", " : "") + country.iso_3166_1
                )}
                ){" "}
              </span>
            </p>
            <p>
              Categories:{" "}
              {data?.genres?.map(
                (genre, index) => (index ? ", " : "") + genre.name
              )}
            </p>
            <p className={description}>{data?.overview}</p>
            <div className={ratingSection}>
              <div className={rating}>{data?.vote_average}</div>
              <span className={ratingCount}>
                based on {data?.vote_count} ratings
              </span>
            </div>
          </div>
          <div className={actorsSection}>LIST OF ACTORS HERE</div>
        </div>
      </div>
    </>
  );
};

const filmDetails = css({
  position: "relative",
  color: "#fff",
});

const filmDetailsImg = css({
  width: "100%",
  objectFit: "cover",
  minHeight: "600px",
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

const filmDetailsContent = css({
  position: "absolute",
  top: "50px",
  left: "50%",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  transform: "translateX(-50%)",
  width: "calc(100% - 180px)",
});

const columnLeft = css({
  flexBasis: "30%",
});

const columnLeftImg = css({
  width: "100%",
  boxShadow: "0 0 50px -5px #fff",
});

const columnRight = css({
  flexBasis: "65%",
});

const colorWhite = css({
  color: "#fff",
});

const title = css({
  fontSize: "3em",
  color: "#fff",
});

const description = css({
  fontSize: "1.4em",
});

const ratingSection = css({
  position: "relative",
});

const rating = css({
  borderRadius: "50%",
  fontWeight: 700,
  border: "2px solid #78f078",
  fontSize: "2.5em",
  width: "70px",
  height: "70px",
  lineHeight: "64px",
  textAlign: "center",
});

const ratingCount = css({
  position: "absolute",
  left: "82px",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "1.5em",
});

const actorsSection = css({
  position: "absolute",
  top: "calc(100% + 30px)",
  left: "0",
});

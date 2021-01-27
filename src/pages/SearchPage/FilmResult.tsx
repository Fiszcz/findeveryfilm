import { css } from "@emotion/css";
import { Typography } from "antd";
import * as React from "react";
import { generatePath, Link } from "react-router-dom";
import { ROUTES } from "../../App";
import { imageURL } from "../../consts/imageURL";
import { Film } from "../../types/film";

interface FilmResultProps {
  film: Film;
}

export const FilmResult: React.FC<FilmResultProps> = ({ film }) => {
  return (
    <Link to={generatePath(ROUTES.FILM, { id: film.id })}>
      <div>
        <img
          src={imageURL + film.posterPath}
          className={posterImageStyle}
          alt={film.title}
        />
        <Typography.Text strong={true} className={titleStyle}>
          {film.title}
        </Typography.Text>
      </div>
    </Link>
  );
};

const posterImageStyle = css({
  width: "100%",
  height: "auto",
  borderRadius: 4,
  display: "block",
});

const titleStyle = css({
  color: "#fff9 !important",
  fontSize: "12px !important",
});

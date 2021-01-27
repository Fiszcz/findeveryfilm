import { css } from "@emotion/css";
import animateScrollTo from "animated-scroll-to";
import * as React from "react";
import { useEffect, useRef } from "react";
import { Film } from "../../types/film";
import { FilmResult } from "./FilmResult";

interface ListOfFilmsProps {
  filmResults: Film[];
  searchPhrase: string;
  totalResults: number;
  fetchNextFilms?: () => void;
  currentPage: number;
}

export const ListOfFilms: React.FC<ListOfFilmsProps> = ({
  filmResults,
  searchPhrase,
  totalResults,
  fetchNextFilms,
  currentPage,
}) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current && currentPage === 1) {
      animateScrollTo(listRef.current, { minDuration: 750, maxDuration: 800 });
    }
  }, [currentPage]);

  return (
    <div className={listOfFilmsStyle} ref={listRef}>
      <h2 className={headerOfResults}>
        Films with <span className={phraseInHeaderStyle}>'{searchPhrase}'</span>{" "}
        in name
      </h2>
      <p className={foundNumberStyle}>
        Found {totalResults} {totalResults === 1 ? "result" : "results"}
      </p>
      <div className={gridLayoutStyle}>
        {filmResults.map((film) => (
          <FilmResult film={film} key={film.id} />
        ))}
      </div>
      <div className={css({ display: "flex" })}>
        {fetchNextFilms && (
          <div
            role={"button"}
            onClick={fetchNextFilms}
            className={showMoreButtonStyle}
          >
            Load more
          </div>
        )}
      </div>
    </div>
  );
};

const headerOfResults = css({
  color: "#ffffff4d",
  fontSize: 40,
});

const phraseInHeaderStyle = css({
  color: "white",
});

const listOfFilmsStyle = css({
  width: "80%",
  paddingBottom: 80,
  position: "absolute",
  marginLeft: "10%",
  marginTop: -150,
  zIndex: 2,
});

const foundNumberStyle = css({
  color: "white !important",
  fontSize: 18,
  marginBottom: 16,
});

const gridLayoutStyle = css({
  display: "grid",
  gridTemplateColumns: "18% 18% 18% 18% 18%",
  columnGap: "2.5%",
  rowGap: 70,
});

const showMoreButtonStyle = css({
  fontWeight: 500,
  lineHeight: 1.25,
  color: "white",
  margin: "50px auto 0px",
  padding: "10px 32px",
  borderRadius: 20,
  cursor: "pointer",
  outline: "none",
  fontSize: 16,
  "&:hover": {
    border: "2px solid #78f078",
  },
});

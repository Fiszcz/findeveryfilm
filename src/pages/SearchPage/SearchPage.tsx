import { css } from "@emotion/css";
import { Input, Typography } from "antd";
import * as qs from "qs";
import * as React from "react";
import { useInfiniteQuery } from "react-query";
import { useHistory, useLocation } from "react-router-dom";
import { searchFilm, SearchFilmQuery } from "../../api/searchFilm";
import { ROUTES } from "../../App";
import { Film } from "../../types/film";
import { SearchResult } from "../../types/searchResult";
import { ListOfFilms } from "./ListOfFilms";

export const SearchPage = () => {
  const history = useHistory();

  const location = useLocation();
  console.log(qs.parse(location.search));
  const filmSearchPhrase =
    new URLSearchParams(location.search).get("phrase") || "";

  const searchFilmQuery: SearchFilmQuery = ["search-film", filmSearchPhrase];
  const {
    data,
    isLoading,
    isSuccess,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<SearchResult>(searchFilmQuery, searchFilm, {
    enabled: Boolean(filmSearchPhrase),
    getNextPageParam: (lastPage) =>
      lastPage.totalPages > lastPage.page ? true : undefined,
  });

  const handleClickFetchNextPage = () => {
    fetchNextPage();
  };

  const handleChangeFilmName = (phrase: string) => {
    history.push(`${ROUTES.SEARCH}?phrase=${phrase}`);
  };

  const filmResults: Film[] = data?.pages.flatMap((page) => page.results) || [];
  const totalResults = data?.pages[0].totalResults || 0;
  const currentPage = data?.pages.length || 1;

  return (
    <>
      <div className={gradientStyle}>
        <img
          className={mainImageStyle}
          src={"./assets/main1.jpg"}
          alt={"main"}
        />
      </div>
      <div className={css({ position: "absolute", width: "100%", top: 420 })}>
        <div
          className={css({ width: "80%", textAlign: "left", margin: "auto" })}
        >
          <Typography.Title copyable={false} className={titleStyle}>
            FIND<span className={css({ color: "#78F078" })}>EVERY</span>FILM.PL
          </Typography.Title>
          <Input.Search
            placeholder="Wpisz tytuł szukanego filmu"
            onSearch={handleChangeFilmName}
            loading={isLoading}
            enterButton={true}
            size={"large"}
          />
        </div>
      </div>
      {isSuccess && data?.pages && (
        <ListOfFilms
          currentPage={currentPage}
          filmResults={filmResults}
          searchPhrase={filmSearchPhrase}
          totalResults={totalResults}
          fetchNextFilms={hasNextPage ? handleClickFetchNextPage : undefined}
        />
      )}
    </>
  );
};

const titleStyle = css({
  color: "white !important",
});

const mainImageStyle = css({
  width: "100%",
});

const gradientStyle = css({
  "&:after": {
    display: "block",
    position: "relative",
    backgroundImage: "linear-gradient(to bottom, #0000 0%, #060a14 75%)",
    marginTop: "-700px",
    height: "700px",
    width: "100%",
    content: '""',
  },
});

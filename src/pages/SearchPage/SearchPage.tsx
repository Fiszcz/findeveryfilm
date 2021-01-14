import { css } from "@emotion/css";
import { Input, Typography } from "antd";
import * as React from "react";
import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { searchFilm, SearchFilmQuery } from "../../api/searchFilm";
import { Film } from "../../types/film";
import { SearchResult } from "../../types/searchResult";
import { ListOfFilms } from "./ListOfFilms";

const { Search } = Input;

export const SearchPage = () => {
  const [filmName, setFilmName] = useState("");

  const searchFilmQuery: SearchFilmQuery = ["search-film", filmName];
  const {
    data,
    isLoading,
    isSuccess,
    hasNextPage,

    fetchNextPage,
  } = useInfiniteQuery<SearchResult>(searchFilmQuery, searchFilm, {
    enabled: Boolean(filmName),
    getNextPageParam: (lastPage) =>
      lastPage.totalPages > lastPage.page ? true : undefined,
  });

  const handleClickFetchNextPage = () => {
    fetchNextPage();
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
          <Search
            placeholder="Wpisz tytuł szukanego filmu"
            onSearch={setFilmName}
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
          searchPhrase={filmName}
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

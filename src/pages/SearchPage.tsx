import { Input } from "antd";
import * as React from "react";
import { css } from "@emotion/css";

const { Search } = Input;

export const SearchPage = () => {
  return (
    <>
      <div className={gradientStyle}>
        <img
          className={mainImageStyle}
          src={"./assets/main1.jpg"}
          alt={"main image"}
        />
        <Search placeholder="input search text" />
      </div>
      <Search
        placeholder="input search text"
        onSearch={() => {}}
        enterButton={true}
      />
    </>
  );
};

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

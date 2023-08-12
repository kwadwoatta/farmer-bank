import { styled } from "styled-system/jsx";

export const TitleGradient = styled("div", {
  base: {
    width: "70px",
    margin: "0 0 15px",
    display: "block",
    background: "linear-gradient(135deg,#ff5a00 0%,#ffb94f 100%)",
    height: "2px",
    mb: "15px",
  },

  variants: {
    variant: {
      banner: {
        width: "250px",
        margin: "0 0 15px -150px",
      },
    },
  },
});

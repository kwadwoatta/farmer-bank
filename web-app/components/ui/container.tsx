import { styled } from "styled-system/jsx";

export const Container = styled("div", {
  base: {
    display: "flex",
    mx: "auto",
    maxW: "1230px",
  },

  variants: {
    variant: {
      column: {
        flexDirection: "column",
      },
    },
  },
});

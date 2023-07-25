import { styled } from "styled-system/jsx";

export const Footer = styled("footer", {
  base: {
    display: "flex",
    height: "135px",
    width: "100vw",
    backgroundColor: "primary.900",
  },
});

export const FooterContainer = styled("div", {
  base: {
    display: "flex",
    maxW: "1200px",
    mx: "auto",
    flexDir: "column",
    py: "20px",
  },
});

import { styled } from "styled-system/jsx";

export const Span = styled("span", {
  base: {
    fontSize: "sm",
    lineHeight: "snug",
  },
});

export const Text = styled("p", {
  base: {
    fontSize: "15px",
    lineHeight: "25px",
    color: "darkText",
    mt: 0,
  },

  variants: {
    variant: {
      mainTitle: {
        fontSize: "5xl",
        color: "darkText",
        lineHeight: "tight",
        fontWeight: "extralight",
      },

      h2: {
        fontSize: "xl",
        color: "darkText",
        textTransform: "uppercase",
        fontWeight: "medium",
        lineHeight: "loose",
      },

      h4: {
        fontSize: "28px",
        fontWeight: "extralight",
        lineHeight: "36px",
        mb: "8px",
      },
      number: {
        fontSize: "36px",
        fontWeight: "extralight",
        lineHeight: "57px",
      },
      currency: {
        fontSize: "20px",
        fontWeight: "extralight",
        mt: "10px",
      },
      note: {
        fontSize: "11px",
        lineHeight: "18px",
        fontWeight: "medium",
        color: "#858d9d",
        textTransform: "uppercase",
        mb: "15px",
      },
      label: {
        fontSize: "15px",
      },
      a: {
        fontSize: "15px",
        fontWeight: "light",
        color: "white",
      },
    },
  },
});

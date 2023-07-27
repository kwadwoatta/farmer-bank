import { styled } from "styled-system/jsx";

export const Input = styled("input", {
  base: {
    WebkitAppearance: "none",
    _focus: {
      outline: "none",
    },
    width: "90%",
  },
});

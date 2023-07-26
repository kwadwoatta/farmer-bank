import { styled } from "styled-system/jsx";

export const Button = styled("button", {
  base: {
    width: "100%",
    maxWidth: "300px",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textAlign: "center",
    transition: "all .15s ease-in",
    backgroundColor: "primary.25",
    cursor: "pointer",
    padding: "16px 22px 14px",
    borderRadius: "3px",
    display: "block",
    fontWeight: "bold",

    _hover: {
      backgroundColor: "primary.300",
    },
  },

  variants: {
    size: {
      md: {
        w: "235.5px",
      },
      large: {
        fontSize: "sm",
        height: "12",
        width: "72",
      },
    },

    disabled: {
      true: {
        opacity: "30%",
        pointerEvents: "none",
        userSelect: "none",
      },
    },

    color: {
      white: {
        backgroundColor: "white",
        color: "primary.25",
        border: "1px solid",
        borderColor: "primary.25",

        _hover: {
          backgroundColor: "primary.25",
          color: "white",
          border: "none",
        },
      },
    },
  },
});

export const AccountButton = styled("button", {
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "primary.25",
    height: "100%",
    gap: "2",
    w: "80px",
  },
});

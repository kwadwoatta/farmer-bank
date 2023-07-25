"use client";

import { Bank } from "@/app/page";
import Image from "next/image";
import React, { ComponentProps } from "react";
import { css, cx } from "styled-system/css";
import { Flex, styled } from "styled-system/jsx";
import { Button } from "./ui/button";
import { Text } from "./ui/text";
import { TitleGradient } from "./ui/title-gradient";

const GradientBorder = styled("div", {
  base: {
    minWidth: "1000px!",
    minHeight: "1000px!",
    background:
      "linear-gradient(to bottom,hsla(97, 72%, 67%, 1) 0%,hsla(94, 100%, 10%, 1) 33%,hsla(97, 72%, 67%, 1) 67%,hsla(94, 100%, 10%, 1) 100%)",
    animation: "rotateRectangle 2.5s infinite linear",
    transition: "all .3s ease",
  },
});

const SelectedGradientBorder = () => {
  return (
    <Flex
      css={{
        zIndex: -1,
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "red",
        overflow: "hidden",
        top: "0",
        left: "0",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GradientBorder />
    </Flex>
  );
};

type BankCardProps = {
  bank: Bank;
  selected?: boolean;
  compareDisabled?: boolean;
  onAddToCompareClicked: (bankCardInfo: Bank & { selected: boolean }) => void;
} & ComponentProps<typeof Flex>;

const BankCard: React.FC<BankCardProps> = (props) => {
  const {
    bank,
    selected = false,
    compareDisabled = false,
    onAddToCompareClicked,
    ...rest
  } = props;

  const {
    name,
    description,
    interestRate,
    facilities,
    contact,
    processingFee,
    imagePath,
    googlePlusCode,
  } = bank;

  return (
    <Flex
      {...rest}
      css={{
        position: "relative",
        width: "calc(50% - 25px)",
        boxShadow: "lg",

        order: 1,
        borderRadius: "2px",
        transition: "box-shadow .5s ease",
        animation: "fade-in .2s ease-in",
        flexDir: "column",

        _hover: {
          boxShadow: "2xl",
          "& .bank-card": {
            top: "-36px",
            boxShadow: "2xl",
          },
        },

        ...rest.css,
      }}
      className="bank-card"
    >
      {selected && <SelectedGradientBorder />}

      <Image
        src={imagePath}
        alt="card"
        className={cx(
          "bank-card",
          css({
            position: "absolute",
            top: "-26px",
            right: "10px",
            width: "136px",
            zIndex: "0",
            transition: "all .3s ease",
            borderRadius: "4px",
          })
        )}
      />

      <Flex
        direction={"column"}
        backgroundColor={"white"}
        padding="32px"
        margin={"2px"}
      >
        <Text variant="h4" css={{ width: "65%" }}>
          {name}
        </Text>
        <TitleGradient />
        <Text css={{ mb: "25px" }}>{description}</Text>

        <Flex wrap={"wrap"} css={{ width: "100%" }}>
          <BankCardInfo
            title={String(facilities.length)}
            note="NUMBER OF FACILITIES"
          />

          <BankCardInfo
            title={processingFee}
            superscript="%"
            note="PROCESSING FEE"
          />

          <BankCardInfo title={contact} note="CONTACT" />

          <BankCardInfo title={googlePlusCode} note="LOCATION" />
        </Flex>

        <Flex
          justify={"space-between"}
          css={{
            mt: "50px",
            gap: "30px",
          }}
        >
          <Button css={{ cursor: "not-allowed" }}>CONTACT BANK</Button>
          <Button
            disabled={!selected && compareDisabled}
            color="white"
            onClick={() => onAddToCompareClicked({ ...bank, selected })}
          >
            {!selected ? "ADD TO COMPARE" : "REMOVE"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

type BankCardInfoProps = {
  title: string;
  superscript?: string;
  note: string;
} & ComponentProps<typeof Flex>;

const BankCardInfo: React.FC<BankCardInfoProps> = (props) => {
  const { title, superscript, note, ...rest } = props;

  return (
    <Flex
      {...rest}
      direction={"column"}
      css={{ width: "calc(50% - 25px)!", order: 1, flexGrow: 1, ...rest.css }}
    >
      <Flex>
        <Text variant="number">{title}</Text>
        {superscript && <Text variant="currency">{superscript}</Text>}
      </Flex>
      <Text variant="note" css={{ mb: "15px" }}>
        {note}
      </Text>
    </Flex>
  );
};

export default BankCard;

"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import compareGIF from "@/public/compare.gif";
import { css } from "@/styled-system/css";
import { Flex, styled } from "@/styled-system/jsx";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { banks } from "../data";
import { Bank } from "../page";

const ComparisonSection = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "15px 60px",
  },

  variants: {
    variant: {
      description: {
        backgroundColor: "#fff",
      },
      number: {
        backgroundColor: "rgba(221,221,221,.25)",
      },
      apply: {
        minHeight: "140px",
        backgroundColor: "rgba(221,221,221,.25)",
        padding: "15px 45px",
        textAlign: "center",
      },
      benefits: {
        display: "block",
        backgroundColor: "#f3f3f4",
        padding: "30px",
        textAlign: "start",
      },
    },
  },
});

const ComparisonHeader = styled("div", {
  base: {
    height: "70px",
    borderRadius: "2px",
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "400",
    lineHeight: "70px",
    letterSpacing: "normal",
    color: "#fff",
    background:
      "linear-gradient(135deg,hsla(96, 43%, 39%, 1) 0%,hsla(96, 39%, 50%, 1) 100%)",
  },
});

const Span = styled("span", {
  base: {},

  variants: {
    variant: {
      title: {
        width: "100%",
        margin: "0 0 15px",
      },
    },
    titlePosition: {
      initial: {
        width: "auto!important",
        display: "inline-block!important",
      },
    },
    titleType: {
      currency: {
        verticalAlign: "top",
        letterSpacing: "1px",
        textAlign: "left",
        width: "initial",
        display: "inline-block",
        color: "#0a2240",
        marginTop: "-2px",
        marginBottom: "0",
        fontSize: "15px",
        lineHeight: "26px",
      },
      notes: {
        fontWeight: "medium",
        fontSize: "10px",
        lineHeight: "14px",
        color: "#858d9d",
        textTransform: "uppercase",
        letterSpacing: "1px",
      },
      number: {
        fontSize: "42px",
        lineHeight: "57px",
        color: "#0a2240",
        marginBottom: "0",
      },
    },
    size: {
      medium: {
        lineHeight: "40px",
        mb: 0,
        fontSize: "18px",
      },
    },
  },
});

const Page = () => {
  const searchParams = useSearchParams();
  const [banksToCompare, setBanksToCompare] = useState<Bank[]>([]);

  useEffect(() => {
    const bankIds = searchParams.get("banks")?.split(",");

    setBanksToCompare(
      banks.filter((bank) => bankIds?.includes(bank.id)).slice(0, 3)
    );
  }, [searchParams]);

  return (
    <Container variant="column">
      <Flex css={{ mb: "74px" }} direction={"column"}>
        <Text
          css={{
            lineHeight: "57px",
            fontSize: "47px",
            color: "darkText",
            width: "100%",
            margin: "0 0 15px",
            fontWeight: "extralight",
            textAlign: "center",
          }}
        >
          Bank Offerings
        </Text>

        <Text
          css={{
            lineHeight: "32px",
            fontSize: "22px",
            m: "0 0 0 15px",
            color: "#858d9d",
          }}
        >
          Select up to 3 banks to compare
        </Text>
      </Flex>

      {banksToCompare.length < 1 ? (
        <EmptyState />
      ) : (
        <Flex wrap={"wrap"} css={{ pb: "70px", gap: "30px" }}>
          {banksToCompare.slice(0, 3).map((bank) => (
            <Flex
              key={bank.id}
              css={{
                width: "380px",
                borderRadius: "2px",
                backgroundColor: "#fff",
                boxShadow: "0 5px 15px 0 rgba(47,50,51,.15)",
                opacity: "0",
                animation: "fade-in .35s ease-in",
                animationFillMode: "forwards",
              }}
              direction={"column"}
            >
              <ComparisonHeader css={{ width: "100%" }}>
                {bank.name}
              </ComparisonHeader>

              <ComparisonSection
                variant="description"
                css={{ minHeight: "204px" }}
              >
                <Text variant="note">DESCRIPTION</Text>
                <Text css={{ maxH: "125px", overflow: "clip" }}>
                  {bank.description}
                </Text>
              </ComparisonSection>

              <ComparisonSection variant="number">
                <Text variant="note">NUMBER OF FACILITIES</Text>
                <Flex justify={"center"} align={"start"}>
                  <Text variant="number">{bank.facilities.length}</Text>
                </Flex>
              </ComparisonSection>

              <ComparisonSection variant="description">
                <Text variant="note">AVERAGE INTEREST RATE</Text>
                <Flex justify={"center"} align={"start"}>
                  <Text variant="number">{bank.interestRate}</Text>
                  <Text variant="currency">%</Text>
                </Flex>
              </ComparisonSection>

              <ComparisonSection variant="number">
                <Text variant="note">AVERAGE PROCESSING FEE</Text>
                <Flex justify={"center"} align={"start"}>
                  <Text variant="number">{bank.processingFee}</Text>
                  <Text variant="currency">%</Text>
                </Flex>
              </ComparisonSection>

              <ComparisonSection variant="description">
                <Text variant="note">ADDRESS</Text>
                <Flex justify={"center"} align={"start"}>
                  <Text variant="number">{bank.googlePlusCode}</Text>
                </Flex>
              </ComparisonSection>

              <ComparisonSection variant="apply">
                <Flex direction={"column"} css={{ gap: "10px" }}>
                  <Button css={{ cursor: "not-allowed" }}>CALL BANK</Button>
                  <Button css={{ cursor: "not-allowed" }} color="white">
                    SHOW ME MORE
                  </Button>
                </Flex>
              </ComparisonSection>

              <ComparisonSection
                variant="benefits"
                css={{
                  height: "100%",
                }}
              >
                <Text variant="note">FACILITIES AND SERVICES</Text>
                <ul
                  className={css({
                    m: "0 0 0 20px",
                    "& li": {
                      color: "darkText",
                      fontSize: "13px",
                      lineHeight: "18px",
                      padding: "0",
                      margin: "0 0 5px 15px",
                      listStyle: "none",
                      textAlign: "start",

                      _before: {
                        content: "''",
                        borderColor: "transparent transparent #f86700",
                        borderStyle: "solid",
                        borderWidth: "0 5px 8px",
                        display: "block",
                        height: "0",
                        width: "0",
                        left: "-30px",
                        top: "12px",
                        position: "relative",
                      },
                    },
                  })}
                >
                  {bank.facilities.map((facility) => (
                    <li key={facility}>{facility}</li>
                  ))}
                </ul>
              </ComparisonSection>
            </Flex>
          ))}
        </Flex>
      )}
    </Container>
  );
};

const EmptyState = () => {
  return (
    <Flex wrap={"wrap"} css={{ gap: "30px", mb: "70px" }}>
      {[1, 2, 3].map((_, i) => (
        <Flex
          key={i}
          css={{
            justifyContent: "flex-start",
            pt: "70px",
            position: "relative",
            padding: "10px 15px",
            minHeight: "255px",
            height: "100%",
            width: "100%",
            textAlign: "center",
            backgroundColor: "rgba(221,221,221,.2)",
            animation: "fade-in .35s ease-in",
            animationFillMode: "forwards",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "wrap",
            w: "380px",

            "& svg": {
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "100%",
              "& not(:root)": {
                overflow: "hidden",
              },
            },
            "& svg > path": {
              fill: "none",
              stroke: "#858d9d",
              //@ts-expect-error
              strokeWidth: 1,
              strokeDasharray: "10,10",
            },
          }}
        >
          <svg viewBox="0 0 300 100" preserveAspectRatio="none">
            <path
              d="M0,0 300,0 300,100 0,100z"
              vectorEffect="non-scaling-stroke"
            ></path>
          </svg>
          <Image
            src={compareGIF}
            alt="compare-gif"
            className={css({
              height: "auto",
              width: "auto",
              minHeight: "auto",
              minWidth: "auto",
              position: "relative",
              left: "0",
              margin: "0 auto",
              right: "0",
              top: "0",
              transform: "none",
              maxWidth: "100%",
            })}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default Page;

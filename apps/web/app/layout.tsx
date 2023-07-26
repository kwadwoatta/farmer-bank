import { css, cx } from "@/styled-system/css";
import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

import { Footer, FooterContainer } from "@/components/footer";
import { Header } from "@/components/header";
import { SearchInputWrapper } from "@/components/search-input-wrapper";
import { AccountButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import { GoPerson, GoSearch } from "react-icons/go";
import { Flex } from "styled-system/jsx";
const libreFranklin = Libre_Franklin({ subsets: ["latin"] });

import QueryProvider from "@/utils/provider";
import React from "react";

export const metadata: Metadata = {
  title: "Farmer Bank",
  description: "Agriculture financial facilities near you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          css({
            backgroundColor: "#f3f3f4",
            display: "flex",
            flexDirection: "column",
            maxWidth: "100vw",
            minW: "100vh",
          }),
          libreFranklin.className
        )}
      >
        <QueryProvider>
          <Header>
            <Container
              css={{
                height: "inherit",
                "& *": {
                  cursor: "not-allowed",
                },
                justifyContent: "center",
              }}
            >
              <Text
                css={{
                  color: "white",
                  fontWeight: "medium",
                  fontSize: "2xl",
                  my: "auto",
                  mr: "120px",
                }}
              >
                Farmer Bank
              </Text>
              <SearchInputWrapper>
                <Input placeholder="Search for a bank.." />
                <GoSearch
                  className={css({
                    color: "primary.25",
                    fontSize: "xx-large",
                    ml: "auto",
                  })}
                />
              </SearchInputWrapper>

              <AccountButton>
                {/* <Flex
                direction={"column"}
                css={{
                  color: "white",
                  fontSize: "sm",
                  textAlign: "left",
                }}
              >
                <Span>Welcome,</Span>
                <Span>Best Farmer</Span>
              </Flex> */}
                <GoPerson
                  className={css({ color: "white", fontSize: "xx-large" })}
                />
              </AccountButton>
            </Container>
          </Header>

          <Flex direction={"column"} flexGrow={1} css={{ pt: "60px" }}>
            {children}
          </Flex>

          <Footer>
            <FooterContainer>
              <Flex css={{ width: "100%", my: "15px", gap: "30px" }}>
                <Link href={""}>
                  <Text variant="a">Disclaimer</Text>
                </Link>
                <Link href={""}>
                  <Text variant="a">Conditions of access</Text>
                </Link>
                <Link href={""}>
                  <Text variant="a">Privacy Statement</Text>
                </Link>
                <Link href={""}>
                  <Text variant="a">FATCA</Text>
                </Link>
                <Link href={""}>
                  <Text variant="a">Manage Cookies</Text>
                </Link>
              </Flex>

              <Text variant="a" w={"800px"}>
                Farmer Bank Limited is a financial services marketplace licensed
                by Bank of Ghana and Securities and Exchange Commission of Ghana
                with company registration number CS000000
              </Text>
            </FooterContainer>
          </Footer>
        </QueryProvider>
      </body>
    </html>
  );
}

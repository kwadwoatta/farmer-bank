"use client";

import AddToCompareDialog from "@/components/add-to-compare-dialog";
import BankCard from "@/components/bank-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { TitleGradient } from "@/components/ui/title-gradient";
import happyFarmer from "@/public/happy-farmer.jpeg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
import { GoFilter } from "react-icons/go";
import { css } from "styled-system/css";
import { Flex, styled } from "styled-system/jsx";
import { banks } from "./data";

const Main = styled("main", {
  base: {
    mt: "44",
  },
});

const Banner = styled("div", {
  base: {
    height: "96",
    width: "100vw",
    display: "flex",
    boxShadow: "lg",
  },
});

export type Bank = {
  id: string;
  name: string;
  description: string;
  interestRate: string;
  imagePath: string | StaticImport;
  contact: string;
  processingFee: string;
  googlePlusCode: string;
  facilities: string[];
};

export default function Home() {
  const [selectedBanks, setSelectedBanks] = useState<Bank[]>([]);

  return (
    <>
      <Banner>
        <Flex
          padding={"5"}
          grow={1}
          direction={"column"}
          maxW={"md"}
          ml="auto"
          gap="3"
          justify={"center"}
        >
          <Flex direction={"column"} align={"start"}>
            <Text variant="mainTitle">Bank your way,</Text>
            <Text variant="mainTitle">take control</Text>
          </Flex>

          <TitleGradient variant="banner" />

          <Text>
            Happy with the basics, or want the extra benefits your farm demands?
            Find a bank that suits you.
          </Text>

          <Button size="large" css={{ cursor: "not-allowed" }}>
            FIND A BANK
          </Button>
        </Flex>

        <Image
          src={happyFarmer}
          alt="happy-farmer"
          className={css({
            width: "58.3%",
            height: "100%",
            objectFit: "cover",
          })}
        />
      </Banner>

      <Main>
        <Container css={{ flexDir: "column", gap: "30px" }}>
          <Flex justify={"space-between"} align={"center"}>
            <Text variant="h2">SEE WHICH FARMER BANK SUITS YOU</Text>
            <Flex align={"start"} gap="2">
              <GoFilter className={css({ fontSize: "lg" })} />
              <Text variant="note">
                Showing you results based on your location
              </Text>
            </Flex>
          </Flex>

          <Flex
            wrap="wrap"
            css={{
              width: "100%",
              "& .bank-card:nth-child(even)": {
                m: "10px 0px 60px 25px",
              },
              "& .bank-card:nth-child(odd)": {
                m: "10px 25px 60px 0px",
              },
            }}
          >
            {banks.map((bank) => (
              <BankCard
                key={bank.id}
                bank={bank}
                compareDisabled={selectedBanks.length >= 3}
                selected={selectedBanks.includes(bank)}
                onAddToCompareClicked={({ id, selected }) => {
                  if (selected) {
                    setSelectedBanks(
                      selectedBanks.filter((bank) => bank.id !== id)
                    );
                  } else {
                    const copy = [...selectedBanks];
                    copy.push(bank);
                    console.log("bank", bank);
                    console.log("copy", copy);
                    setSelectedBanks(copy);
                  }
                }}
              />
            ))}
          </Flex>
        </Container>
      </Main>

      <AddToCompareDialog
        selectedBanks={selectedBanks}
        selectedBanksModifier={setSelectedBanks}
      />
    </>
  );
}

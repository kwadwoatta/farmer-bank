"use client";
import { Bank } from "@/app/page";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import React, { ComponentProps, SetStateAction } from "react";
import { GoXCircleFill } from "react-icons/go";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { Text } from "./ui/text";

type AddToCompareDialogProps = {
  selectedBanks: Bank[];
  selectedBanksModifier: (value: SetStateAction<Bank[]>) => void;
} & ComponentProps<typeof Dialog.Root>;

const AddToCompareDialog: React.FC<AddToCompareDialogProps> = (props) => {
  const { selectedBanks, selectedBanksModifier: setSelectedBanks } = props;
  const banks = selectedBanks.slice(0, 3);

  const compareDisabled = banks.length < 2;
  const router = useRouter();

  return (
    <Dialog.Root {...props} modal={false} open={banks.length > 0}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={css({
            position: "fixed",
            inset: 0,
          })}
        />

        <Dialog.Content
          className={css({
            position: "fixed",
            bottom: 0,
            left: 0,
            backgroundColor: "white",
            height: "85px",
            width: "100vw",
            padding: "15px",
            boxShadow: "0 -5px 15px 0 rgba(0,0,0,.1)",
            zIndex: 100,
            transition: "bottom .2s ease-in",
            w: "100%",
            display: "flex",
          })}
        >
          <Container>
            <Flex wrap="wrap" gap="25px" align={"center"}>
              {banks.map((bank) => (
                <Box
                  key={bank.id}
                  css={{
                    position: "relative",
                    padding: "5px 15px",
                    backgroundColor: "white",
                    boxShadow: "lg",
                    height: "fit-content",
                    width: "fit-content",
                    animation: "pop-in .2s ease-in;",
                    border: "1px solid #858d9d",
                  }}
                >
                  <GoXCircleFill
                    className={css({
                      position: "absolute",
                      color: "primary.25",
                      fontSize: "2xl",
                      right: "-2",
                      top: "-2",
                      cursor: "pointer",
                    })}
                    onClick={() =>
                      setSelectedBanks((banks) =>
                        banks.filter((b) => b.id !== bank.id)
                      )
                    }
                  />
                  <Text variant="note" css={{ fontWeight: "bold" }}>
                    {bank.name}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Container>
          <Flex
            gap="30px"
            css={{
              ml: "auto",
              alignSelf: "end",
              "& > button": {
                height: "50px",
                width: "226.25px",
              },
            }}
          >
            <Button
              disabled={compareDisabled}
              onClick={() => {
                const route = `/compare?banks=${banks
                  .map((b) => b.id)
                  .toString()}`;
                router.push(route);
              }}
            >
              COMPARE
            </Button>

            <Dialog.Close asChild>
              <Button color="white" onClick={() => setSelectedBanks([])}>
                REMOVE ALL
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddToCompareDialog;

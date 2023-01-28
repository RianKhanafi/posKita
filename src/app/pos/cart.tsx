"use client";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Button, ButtonIcon, Text } from "components/atoms";
import Image from "next/image";
import ImageNasiGoreng from "assets/images/nasigoreng.png";
import React from "react";
import Icons, { IconsName } from "assets/icons";

const CartProduct = () => {
  return (
    <Box>
      {[...Array(5)].map((_, i) => (
        <Grid
          key={i}
          templateColumns="repeat(4, 1fr)"
          borderBottom="1px solid"
          borderColor="dark.ultrasoft"
          marginBottom="15px"
        >
          <GridItem colSpan={1}>
            <Image
              src={ImageNasiGoreng}
              alt="nasigoreng"
              placeholder="blur"
              width={65}
              height={65}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Text fontSize="12px" px="9px">
              Nasi Goreng Gila, Paket Lengkap dengan pete dan kawanya.
            </Text>
          </GridItem>
          <GridItem
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="13px" fontWeight="semibold">
              Rp. 3000
            </Text>
          </GridItem>

          <GridItem colSpan={1}></GridItem>
          <GridItem colSpan={2}>
            <Text fontSize="16px" px="9px" my="10px">
              2x
            </Text>
          </GridItem>
          <GridItem
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="16px" fontWeight="semibold" my="10px">
              Rp. 3000
            </Text>
          </GridItem>
        </Grid>
      ))}
    </Box>
  );
};

const CartAccum = () => {
  return (
    <Box>
      <Grid
        templateColumns="repeat(4, 1fr)"
        borderBottom="1px solid"
        borderColor="dark.ultrasoft"
      >
        <GridItem colSpan={3}>
          <Box width="73px" height="23px" bg="purple" my="30px">
            <Text textAlign="center" fontSize="10px" color="white">
              20% Diskon
            </Text>
          </Box>
        </GridItem>
        <GridItem
          colSpan={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="16px" fontWeight="semibold" my="10px">
            Rp. 3000
          </Text>
        </GridItem>
      </Grid>

      <Grid
        templateColumns="repeat(4, 1fr)"
        borderBottom="1px solid"
        borderColor="dark.ultrasoft"
      >
        <GridItem colSpan={2}>
          <Text fontSize="20px" fontWeight="semibold" my="10px">
            Total
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text
            fontSize="20px"
            fontWeight="semibold"
            my="10px"
            textAlign="right"
          >
            Rp. 36.600
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default function Cart({ cartOpen, onOpen }: any) {
  return (
    <React.Fragment>
      <Box position="relative">
        <Box
          bg="primary.hard"
          position="fixed"
          {...(cartOpen ? { right: 348 } : { right: 5 })}
          bottom="10"
          cursor="pointer"
          mt="100px"
          onClick={onOpen}
          zIndex="11"
        >
          {/* <Box
            p="10px"
            transform={cartOpen ? "rotate(180deg)" : "rotate(0deg)"}
          >
            <Icons name={IconsName.open} color="white" />
          </Box> */}
          <ButtonIcon
            typeButton="primary"
            rightIcon={<Icons name={IconsName.open} color="white" />}
          >
            3 Items
          </ButtonIcon>
        </Box>
      </Box>
      {cartOpen ? (
        <Box
          position={{ base: "absolute", lg: "fixed", xl: "fixed" }}
          left={{ base: 0, lg: "unset", xl: "unset" }}
          right={{ base: 0, lg: "unset", xl: "unset" }}
          top={{ base: 0, lg: "unset", xl: "unset" }}
          bottom={{ base: 0, lg: "unset", xl: "unset" }}
          zIndex={{ base: 10, lg: "unset", xl: "unset" }}
          backgroundColor="white"
          width={{ base: "100%", lg: "390px", x: "390px" }}
          borderLeft="1px solid"
          borderColor="dark.ultrasoft"
          height="91vh"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Box px="38px" pt="20px">
              <Box ml="30px">
                <Text fontSize={20} fontWeight="bold" mb="20px">
                  Order Details
                </Text>
                <Text fontSize={12} fontWeight="semibold" color="gray.medium">
                  Kasir: Cute Girl
                </Text>
                <Text fontSize={12} fontWeight="semibold" color="gray.medium">
                  18 Agustus 2022
                </Text>
                <Text fontSize={12} fontWeight="semibold" color="gray.medium">
                  #12810291
                </Text>
              </Box>
            </Box>
            <Box px="38px" pb="20px" h="75vh" overflow="auto">
              <Box mt="70px">
                {/* <Box width="100%" display="flex">
            <Box width="80px" bg="red" height="80px"></Box>
            <Box width=></Box>
            <Box width="80px" bg="red" height="80px"></Box>
          </Box> */}
                <CartProduct />

                <CartAccum />
              </Box>

              <Button full typeButton="primary" mb="10px">
                Bayar
              </Button>
            </Box>
          </Box>
        </Box>
      ) : null}
    </React.Fragment>
  );
}

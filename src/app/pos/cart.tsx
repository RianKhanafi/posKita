"use client";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Button, ButtonIcon, Text } from "components/atoms";
import Image from "next/image";
import ImageNasiGoreng from "assets/images/nasigoreng.png";
import React from "react";
import Icons, { IconsName } from "assets/icons";
import Card from "components/molecules/card";
import { notoSans, openSans } from "theme/font";

const CartProduct = () => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <Box key={i} mb={{ base: "10px", lg: "20px", xl: "20px" }}>
          <Card isResponsive={false} />
        </Box>
      ))}
    </div>
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
            <Text
              textAlign="center"
              fontSize="10px"
              color="white"
              className={openSans.className}
            >
              20% Diskon
            </Text>
          </Box>
        </GridItem>
        <GridItem
          colSpan={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Box>
            <Text
              fontSize={{ base: "15px", lg: "22px", xl: "22px" }}
              fontWeight="semibold"
              color="#809C79"
              className={notoSans.className}
              display="flex"
            >
              <Text fontSize={{ base: "8px", lg: "12px", xl: "12px" }}>
                Rp.
              </Text>
              <Text> 18.000</Text>
            </Text>
          </Box>
        </GridItem>
      </Grid>

      <Grid
        templateColumns="repeat(4, 1fr)"
        borderBottom="1px solid"
        borderColor="dark.ultrasoft"
      >
        <GridItem colSpan={2}>
          <Text
            fontSize="18px"
            fontWeight="semibold"
            my="10px"
            className={openSans.className}
          >
            Total
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Box my="10px" display="flex" justifyContent="flex-end">
            <Text
              fontSize={{ base: "15px", lg: "22px", xl: "22px" }}
              fontWeight="semibold"
              color="#809C79"
              className={notoSans.className}
              display="flex"
            >
              <Text fontSize={{ base: "18px", lg: "12px", xl: "12px" }}>
                Rp.
              </Text>
              <Text> 18.000</Text>
            </Text>
          </Box>
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
          {...(cartOpen ? { right: 348, top: -20 } : { right: 5, bottom: 5 })}
          cursor="pointer"
          mt="100px"
          onClick={onOpen}
          zIndex="11"
        >
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
          position={{ base: "fixed", lg: "fixed", xl: "fixed" }}
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
            <Box px="15px" pb="20px">
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

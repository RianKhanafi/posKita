"use client";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Button, Text } from "components/atoms";
import Image from "next/image";
import ImageNasiGoreng from "assets/images/nasigoreng.png";

export default function Cart({ setCartOpen }: any) {
  return (
    <Box
      position="fixed"
      width="390px"
      borderLeft="1px solid"
      borderColor="dark.ultrasoft"
      height="91vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box px="38px" py="20px">
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
        <Box mt="50px">
          {/* <Box width="100%" display="flex">
              <Box width="80px" bg="red" height="80px"></Box>
              <Box width=></Box>
              <Box width="80px" bg="red" height="80px"></Box>
            </Box> */}
          <Grid
            templateColumns="repeat(4, 1fr)"
            borderBottom="1px solid"
            borderColor="dark.ultrasoft"
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
      </Box>

      <Box mb="20px" px="38px" py="20px">
        <Button full typeButton="primary">
          Bayar
        </Button>
      </Box>
    </Box>
  );
}

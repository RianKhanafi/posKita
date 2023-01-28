"use client";
import { Box, Divider, Grid, GridItem } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import { Button, Input, Text } from "components/atoms";
import CategoriesCard from "components/atoms/categories";
import Card from "components/molecules/card";
import { useState } from "react";
import { openSans } from "theme/font";
import Cart from "./cart";

const Categories: { title: string; subtitle: string }[] = [
  {
    title: "All Product",
    subtitle: "all Product",
  },
  {
    title: "Nasi Goreng",
    subtitle: "20 Items",
  },
  {
    title: "Nasi Goreng",
    subtitle: "20 Items",
  },
  {
    title: "Nasi Goreng",
    subtitle: "20 Items",
  },
  {
    title: "Nasi Goreng",
    subtitle: "20 Items",
  },
  {
    title: "Nasi Goreng",
    subtitle: "20 Items",
  },
];

export default function Home() {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  // fontSize={{ base: '24px', md: '40px', lg: '56px' }}
  return (
    <Box position="relative">
      <Grid templateColumns="repeat(11, 1fr)" position="relative">
        {/* <Grid> */}
        <GridItem colSpan={cartOpen ? 8 : 11}>
          <Box margin="auto">
            <Box
              mt={{ base: "10px", lg: "0", xl: "0" }}
              px={{ base: "15px", lg: "37px", xl: "37px" }}
              py={{ base: "0", lg: "30px", xl: "30px" }}
            >
              <Text
                fontSize="19px"
                fontWeight="semibold"
                marginBottom="11px"
                display={{ base: "none", lg: "block", xl: "block" }}
                className={openSans.className}
              >
                Category
              </Text>
              <Box
                display="flex"
                overflowX="auto"
                css={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                {Categories?.map((elm, i) => (
                  <Box key={i} mr="28px" py="20px">
                    <CategoriesCard
                      active={i == 0}
                      title={elm.title}
                      subtitle={elm.subtitle}
                    />
                  </Box>
                ))}
              </Box>
              <Text
                fontSize={{ base: "16px", lg: "19px", xl: "19px" }}
                fontWeight="semibold"
                marginBottom="13px"
                mt={{ base: "15px" }}
                className={openSans.className}
                color="#000339"
                mb={{ base: "15px", lg: "25px", xl: "25px" }}
              >
                Daftar Produk
              </Text>
              <Box display={{ base: "block", lg: "none", xl: "none" }}>
                <Input
                  placeholder="Cari produk"
                  full
                  type="search"
                  rightIcon={IconsName.filter}
                  mb="24px"
                />
              </Box>
              <Text
                fontSize="16px"
                fontWeight="semibold"
                marginBottom="13px"
                className={openSans.className}
                color="#000339"
              >
                Nasi Goreng
              </Text>
              <Divider mt="3px" mb="22px" />
              <Grid
                templateColumns={{
                  base: "repeat(auto-fill,minmax(100%,1fr))",
                  lg: "repeat(auto-fill,minmax(230px,1fr))",
                  xl: "repeat(auto-fill,minmax(230px,1fr))",
                }}
              >
                {[...Array(12)].map((_, i) => (
                  <Box key={i} mb={{ base: "19px", lg: "52px", xl: "52px" }}>
                    <Card />
                  </Box>
                ))}
              </Grid>
            </Box>
          </Box>
        </GridItem>

        <GridItem colSpan={cartOpen ? 3 : 0}>
          <Cart onOpen={() => setCartOpen(!cartOpen)} cartOpen={cartOpen} />
        </GridItem>
      </Grid>
    </Box>
  );
}

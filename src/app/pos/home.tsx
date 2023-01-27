"use client";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import { Button, Input, Text } from "components/atoms";
import CategoriesCard from "components/atoms/categories";
import Card from "components/molecules/card";
import Image from "next/image";
import { useState } from "react";
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
            <Box px={{ base: "15px", lg: "37px", xl: "37px" }} py="30px">
              <Text fontSize="19px" fontWeight="semibold" marginBottom="11px">
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
                fontSize="19px"
                fontWeight="semibold"
                marginBottom="11px"
                mt="29px"
              >
                All Product
              </Text>
              <Input
                placeholder="Cari produk"
                full
                display={{ base: "block", lg: "none", xl: "none" }}
                type="search"
                rightIcon={IconsName.filter}
                mb="24px"
              />
              <Grid
                templateColumns={{
                  base: "repeat(auto-fill,minmax(118px,1fr))",
                  lg: "repeat(auto-fill,minmax(230px,1fr))",
                  xl: "repeat(auto-fill,minmax(230px,1fr))",
                }}
              >
                {[...Array(12)].map((_, i) => (
                  <Box key={i} mb="52px">
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

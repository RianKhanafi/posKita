"use client";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import { Button, Text } from "components/atoms";
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
  const [cartOpen, setCartOpen] = useState(true);

  return (
    <div>
      <Grid templateColumns="repeat(11, 1fr)" position="relative">
        {/* <Grid> */}
        <GridItem colSpan={cartOpen ? 8 : 11}>
          <Box margin="auto">
            <Box px="40px" py="30px">
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
              <Grid templateColumns="repeat(auto-fill,minmax(230px,1fr))">
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
          {cartOpen ? <Cart onOpen={() => setCartOpen(!cartOpen)} /> : null}
          <Box position="relative">
            <Box
              bg="primary.hard"
              position="fixed"
              {...(cartOpen ? { right: 348 } : { right: 0 })}
              top="0"
              cursor="pointer"
              mt="100px"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <Box
                p="10px"
                transform={cartOpen ? "rotate(180deg)" : "rotate(0deg)"}
              >
                <Icons name={IconsName.open} color="white" />
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}

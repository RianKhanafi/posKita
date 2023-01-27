"use client";
import { Badge, Box, Image } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import { Input, Text } from "components/atoms";
import Link from "next/link";
import { colors } from "theme/colors";

export default function Header() {
  return (
    <nav>
      <Box
        position="fixed"
        height="70px"
        width="100%"
        borderBottom="1px"
        borderColor="#DFE0EB"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={{ base: "15px", lg: "37px", xl: "37px" }}
        backgroundColor="white"
        zIndex="3"
      >
        <Box
          display="flex"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Icons name={IconsName.logo} />
          </Box>

          <Box display={{ base: "none", lg: "block", xl: "block" }}>
            <Input
              placeholder="Cari produk"
              width={448}
              type="search"
              rightIcon={IconsName.filter}
            />
          </Box>

          <Box width={540} display="flex">
            <Box
              width={{ base: "200px", lg: "437px", xl: "437px" }}
              display="flex"
              justifyContent="space-evenly"
            >
              <Link href="/">
                <Text
                  _hover={{ color: colors.primary.hard }}
                  fontWeight="medium"
                  fontSize="16px"
                  color="dark.medium"
                >
                  Pos
                </Text>
              </Link>
              <Link href="/">
                <Text
                  _hover={{ color: colors.primary.hard }}
                  fontWeight="medium"
                  fontSize="16px"
                  color="dark.medium"
                >
                  Admin
                </Text>
              </Link>
              <Link href="/">
                <Text
                  _hover={{ color: colors.primary.hard }}
                  fontWeight="medium"
                  fontSize="16px"
                  color="dark.medium"
                >
                  Stock
                </Text>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box width={180}>
          <Box display="flex" alignItems="center">
            <Image
              borderRadius="full"
              boxSize="42px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Box ml="12px">
              <Box lineHeight="14px">
                <Text fontSize="14px" fontWeight="medium" color="dark.hard">
                  CUtiee Girl
                </Text>
                <Text fontSize="10px" fontWeight="regular" color="dark.hard">
                  Cashier
                </Text>
              </Box>
              <Badge
                backgroundColor="green.hard"
                color="white"
                width={77}
                borderRadius="50px"
                fontSize={8}
                fontWeight="bold"
                textAlign="center"
              >
                Active
              </Badge>
            </Box>
          </Box>
        </Box>
      </Box>
    </nav>
  );
}

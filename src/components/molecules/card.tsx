import { Badge, Box } from "@chakra-ui/react";
import Image from "next/image";
import ImageNasiGoreng from "assets/images/nasigoreng.png";
import { Text } from "components/atoms";

export default function Card() {
  return (
    <Box
      // width=""
      width={{ base: "110px", lg: "233px", xl: "233px" }}
      height={{ base: "162px", lg: "307px", xl: "307px" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      cursor="pointer"
      _hover={{
        // boxShadow: "2xl",
        p: "10px",
        border: "1px solid",
        borderColor: "primary.hard",
        borderRadius: "10px",
        height: "180px",
      }}
    >
      <Box height="188px" width="100%">
        <Image
          src={ImageNasiGoreng}
          alt="nasigoreng"
          placeholder="blur"
          height={188}
        />
      </Box>
      <Box>
        <Text
          fontSize={{ base: "12px", lg: "16px", xl: "16px" }}
          fontWeight={{ base: "light" }}
        >
          Nasi Goreng Gila, Paket Lengkap dengan pete.
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Text
            fontSize={{ base: "14px", lg: "22px", xl: "22px" }}
            fontWeight="semibold"
            mt={{ base: "3px" }}
          >
            Rp. 18.000
          </Text>
        </Box>
        <Box>
          <Badge
            bg="primary.ultrasoft"
            fontSize="9"
            fontWeight="extrabold"
            color="primary.hard"
            textTransform="none"
            width="65px"
            textAlign="center"
            py="3px"
            borderRadius="4px"
            display={{ base: "none" }}
          >
            Buy
          </Badge>
        </Box>
      </Box>
    </Box>
  );
}

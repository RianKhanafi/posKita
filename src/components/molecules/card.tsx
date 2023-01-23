import { Badge, Box } from "@chakra-ui/react";
import Image from "next/image";
import ImageNasiGoreng from "assets/images/nasigoreng.png";
import { Text } from "components/atoms";

export default function Card() {
  return (
    <Box
      width="233px"
      height="307px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
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
        <Text fontSize="16px">
          Nasi Goreng Gila, Paket Lengkap dengan pete.
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Text fontSize="22px" fontWeight="semibold">
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
          >
            Buy
          </Badge>
        </Box>
      </Box>
    </Box>
  );
}

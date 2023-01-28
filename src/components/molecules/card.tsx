import { Badge, Box } from "@chakra-ui/react";
import Image from "next/image";
import ImageNasiGoreng from "assets/images/nasigoreng.png";
import { Text } from "components/atoms";
import { notoSans, openSans } from "theme/font";
import Icons, { IconsName } from "assets/icons";

export default function Card() {
  return (
    <Box
      // width=""
      width={{ base: "100%", lg: "233px", xl: "233px" }}
      height={{ base: "72px", lg: "307px", xl: "307px" }}
      display="flex"
      flexDirection={{ base: "row", lg: "column", xl: "column" }}
      justifyContent="space-between"
      cursor="pointer"
      _hover={{
        // boxShadow: "2xl",
        // p: "5px",
        // border: "1px solid",
        // borderColor: "primary.hard",
        // borderRadius: "10px",
        // height: "83px",
        ".imgbg": {
          border: "1px solid",
          borderColor: "primary.hard",
          backgroundColor: "#FEF5F5",
        },
      }}
    >
      <Box
        height={{ base: "72px", lg: "188px", xl: "188px" }}
        width={{ base: "77px", lg: "100%", xl: "100%" }}
        backgroundColor="#F6F6F6"
        borderRadius="20px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="imgbg"
      >
        <Box
          m={{ base: "8px", lg: "initial", xl: "initial" }}
          borderRadius="10px"
          overflow="hidden"
        >
          <Image src={ImageNasiGoreng} alt="nasigoreng" placeholder="blur" />
        </Box>
      </Box>
      <Box
        px={{ base: "12px", lg: "initial", xl: "initial" }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Text
          fontSize={{ base: "13px", lg: "16px", xl: "16px" }}
          className={openSans.className}
        >
          Nasi Goreng Gila, Paket Lengkap dengan pete.
        </Text>

        <Box>
          <Text
            fontSize={{ base: "15px", lg: "22px", xl: "22px" }}
            fontWeight="semibold"
            color="#809C79"
            className={notoSans.className}
            display="flex"
          >
            <Text fontSize={{ base: "8px", lg: "12px", xl: "12px" }}>Rp. </Text>
            <Text> 18.000</Text>
          </Text>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        {/* <Box>
          <Text
            fontSize={{ base: "14px", lg: "22px", xl: "22px" }}
            fontWeight="semibold"
            mt={{ base: "3px" }}
          >
            Rp. 18.000
          </Text>
        </Box> */}
        <Box w="60px" display="flex" alignItems="center">
          <Box
            display="flex"
            justifyContent="space-between"
            w="100%"
            alignItems="center"
          >
            <Box
              width="20px"
              height="20px"
              backgroundColor="#FEF5F5"
              borderRadius="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icons name={IconsName.minus} width={15} height={15} />
            </Box>
            <Box px={{ base: "7px" }}>
              <Text className={notoSans.className} fontSize={{ base: "15px" }}>
                1
              </Text>
            </Box>
            <Box
              width="20px"
              height="20px"
              backgroundColor="#FEF5F5"
              borderRadius="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icons
                name={IconsName.plus}
                color="black"
                width={15}
                height={15}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

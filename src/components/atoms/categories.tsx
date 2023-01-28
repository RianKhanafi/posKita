import { Box } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import Image from "next/image";
import ImageNasiGoreng from "assets/images/nasigoreng.png";
import Text from "./text";
import { openSans } from "theme/font";

interface ICategoriesCard {
  active?: boolean;
  title: string;
  subtitle?: string;
}
export default function CategoriesCard({
  active,
  title,
  subtitle,
}: ICategoriesCard) {
  return (
    <Box
      width={{ base: "142px", lg: "204px", xl: "204px" }}
      borderRadius="8px"
      height={{ base: "64px", lg: "77px", xl: "77px" }}
      bg={active ? "primary.hard" : "#F6F6F6"}
      display="flex"
      alignItems="center"
      cursor="pointer"
      // _hover={{
      // boxShadow: "xl",
      //   backgroundColor: "primary.soft",
      //   border: "none",
      //   ".chakra-text": {
      //     color: "white",
      //   },
      // }}
      _hover={{
        border: "1px solid",
        borderColor: "primary.hard",
        boxShadow: "md",
      }}
    >
      <Box
        width={{ base: "60px", lg: "80px", xl: "80px" }}
        display="flex"
        justifyContent="center"
      >
        {active ? (
          <Icons name={IconsName.allCategories} />
        ) : (
          <Image
            src={ImageNasiGoreng}
            alt="nasigoreng"
            placeholder="blur"
            height={50}
            width={50}
          />
        )}
      </Box>
      <Box>
        <Text
          fontWeight="500"
          fontSize={{ base: "12px", lg: "13px", xl: "13px" }}
          color={active ? "white" : "dark.hard"}
          className={openSans.className}
        >
          {title}
        </Text>
        <Text
          fontWeight="400"
          fontSize={{ base: "9px", lg: "11px", xl: "11px" }}
          color={active ? "white" : "gray.medium"}
          className={openSans.className}
        >
          {subtitle}
        </Text>
      </Box>
    </Box>
  );
}

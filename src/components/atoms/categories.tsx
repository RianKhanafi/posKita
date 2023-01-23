import { Box } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import Image from "next/image";
import ImageNasiGoreng from "assets/images/nasigoreng.png";
import Text from "./text";

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
      width="204px"
      borderRadius="8px"
      height="77px"
      bg={active ? "primary.hard" : "white"}
      display="flex"
      alignItems="center"
      border={active ? "" : "1px solid"}
      borderColor={active ? "" : "dark.ultrasoft"}
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
      <Box width="80px" display="flex" justifyContent="center">
        {active ? (
          <Icons name={IconsName.allCategories} width={39} height={39} />
        ) : (
          <Image
            src={ImageNasiGoreng}
            alt="nasigoreng"
            placeholder="blur"
            height={52}
            width={65}
          />
        )}
      </Box>
      <Box>
        <Text
          fontWeight="500"
          fontSize="13px"
          color={active ? "white" : "dark.hard"}
        >
          {title}
        </Text>
        <Text
          fontWeight="400"
          fontSize="11px"
          color={active ? "white" : "dark.hard"}
        >
          {subtitle}
        </Text>
      </Box>
    </Box>
  );
}

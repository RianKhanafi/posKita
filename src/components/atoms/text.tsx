"use client";
import { Text as ChakraUI, TextProps } from "@chakra-ui/react";

export default function Text({ children, ...rest }: TextProps) {
  return <ChakraUI {...rest}>{children}</ChakraUI>;
}

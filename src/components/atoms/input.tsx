"use client";
import { Input as InputChakraUI, InputProps } from "@chakra-ui/react";

interface TInput extends InputProps {
  full?: boolean;
}

export default function Input({
  full,
  placeholder,
  onChange,
  width,
  value,
  ...rest
}: TInput) {
  return (
    <InputChakraUI
      value={value}
      placeholder={placeholder}
      color="dark.medium"
      borderColor="dark.ultrasoft"
      onChange={onChange}
      width={full ? "100%" : width ? width : "100%"}
      {...rest}
      height="48px"
      borderRadius="8px"
      fontSize="16px"
    />
  );
}

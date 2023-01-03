"use client";

import {
  Button,
  Input as InputChakraUI,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

interface TInput extends InputProps {
  full?: boolean;
}

function PasswordInput({
  full,
  placeholder,
  onChange,
  width,
  value,
  ...rest
}: TInput) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <InputChakraUI
        {...rest}
        pr="4.5rem"
        type={show ? "text" : "password"}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        color="dark.medium"
        borderColor="dark.ultrasoft"
        height="48px"
        borderRadius="8px"
        fontSize="16px"
      />
      <InputRightElement width="4.5rem" mt="3px" mr="2px">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default function Input({
  full,
  placeholder,
  onChange,
  width,
  value,
  ...rest
}: TInput) {
  if (rest.type === "password")
    return (
      <PasswordInput
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        color="dark.medium"
        borderColor="dark.ultrasoft"
        {...rest}
        height="48px"
        borderRadius="8px"
        fontSize="16px"
      />
    );
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

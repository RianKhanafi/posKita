"use client";

import {
  Button,
  Input as InputChakraUI,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import { useState } from "react";

interface TInput extends InputProps {
  full?: boolean;
  leftIcon?: IconsName;
  rightIcon?: IconsName;
  onFilter?: () => React.MouseEvent<HTMLDivElement, MouseEvent>;
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
  leftIcon,
  rightIcon,
  onFilter,
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

  if (rest.type === "search") {
    return (
      <InputGroup width="auto">
        <InputLeftElement pointerEvents="none" mt="3px">
          <Icons name={IconsName.search} />
        </InputLeftElement>

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

        {rightIcon && (
          <InputRightElement
            cursor="pointer"
            borderLeft="1px solid"
            borderColor="dark.ultrasoft"
            h="27px"
            mt="9px"
            onClick={onFilter}
          >
            <Icons name={IconsName.filter} />
          </InputRightElement>
        )}
      </InputGroup>
    );
  }
  return (
    <InputGroup>
      {leftIcon && (
        <InputLeftElement pointerEvents="none" mt="3px">
          <Icons name={leftIcon} />
        </InputLeftElement>
      )}

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

      {rightIcon && (
        <InputRightElement
          pointerEvents="none"
          children={<Icons name={rightIcon} />}
          mt="3px"
        />
      )}
    </InputGroup>
  );
}

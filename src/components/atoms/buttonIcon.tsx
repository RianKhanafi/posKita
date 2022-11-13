"use client";
import { Button as ChakraButton } from "@chakra-ui/react";
import classNames from "classnames";
import Icons, { IconsName } from "assets/icons";
import { colors } from "theme/colors";
import React from "react";

type TTYpe = "primary" | "secondary";

interface TButton {
  type: TTYpe;
  full?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export default function ButtonIcon({
  type,
  full,
  onClick,
  children = <span>Button</span>,
}: TButton) {
  const buttonType = classNames({
    "primary.hard": type === "primary",
    "gray.soft": type === "secondary",
  });

  const buttonTypeColor = classNames({
    white: type === "primary",
    "dark.medium": type === "secondary",
  });

  const IconButtonColor = classNames({
    white: type === "primary",
    [`${colors.dark.medium}`]: type === "secondary",
  });

  return (
    <ChakraButton
      color={buttonTypeColor}
      bg={buttonType}
      fontSize={16}
      width={full ? "100%" : 172}
      onClick={onClick}
      leftIcon={<Icons name={IconsName.plus} color={IconButtonColor} />}
    >
      {children}
    </ChakraButton>
  );
}

"use client";
import { Spacer, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  Modal as ModalChakraUI,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "components/atoms";

interface IModal {
  title?: string;
  primaryTitle?: string;
  secondaryTitle?: string;
  children: React.ReactNode;
  footer?: boolean;
}

export default function Modal({
  title = "Title",
  primaryTitle = "Simpan",
  secondaryTitle = "Batal",
  children,
  footer = true,
}: IModal) {
  const { isOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <ModalChakraUI
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        {footer ? (
          <ModalFooter>
            <Button type="primary" onClick={onClose}>
              {primaryTitle}
            </Button>
            <Spacer />
            <Button type="secondary">{secondaryTitle}</Button>
          </ModalFooter>
        ) : null}
      </ModalContent>
    </ModalChakraUI>
  );
}

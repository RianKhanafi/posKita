"use client";
import { Spacer, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  Modal as ModalChakraUI,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
} from "@chakra-ui/react";
import { Button } from "components/atoms";
export interface IOpenModal {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}

interface IModal extends IOpenModal {
  title?: string;
  primaryTitle?: string;
  secondaryTitle?: string;
  children: React.ReactNode;
  footer?: boolean;
  size: string;
}

export default function Modal({
  title = "Title",
  primaryTitle = "Simpan",
  secondaryTitle = "Batal",
  children,
  footer = true,
  openModal,
  setOpenModal,
  size,
}: IModal) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const finalRef = React.useRef(null);

  useEffect(() => {
    console.log("openModal =>", openModal);
    if (openModal) onOpen();
  }, [openModal]);

  return (
    <ModalChakraUI
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setOpenModal(false);
      }}
      size={size}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        {footer ? (
          <ModalFooter>
            <Button typeButton="secondary" onClick={onClose}>
              {secondaryTitle}
            </Button>
            <Spacer />
            <Button typeButton="primary">{primaryTitle}</Button>
          </ModalFooter>
        ) : null}
      </ModalContent>
    </ModalChakraUI>
  );
}

import { Box, ModalProps } from "@chakra-ui/react";
import { IconsName } from "assets/icons";
import { ButtonIcon } from "components/atoms";
import { FormInput, Modal } from "components/molecules";
import { IOpenModal } from "components/molecules/modal";
import { colors } from "theme/colors";

interface IAddDiscount extends IOpenModal {}
export default function AddDiscount(props: IAddDiscount) {
  return (
    <Modal {...props} size="2xl" title="Tambah Diskon">
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        alignItems="flex-end"
        pt="20px"
        pb="50px"
      >
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box>
            <FormInput
              label="Koda Diskon"
              width="229px"
              placeholder="DISKONKELAPARAN"
            />
          </Box>
          <Box>
            <FormInput label="Percentage" width="229px" placeholder="10%" />
          </Box>
        </Box>
        <Box width={200} display="flex" justifyContent="space-evenly">
          <ButtonIcon
            iconName={IconsName.trash}
            typeButton="secondary"
            border="1px"
            borderColor="primary.hard"
            fill={colors.primary.hard}
            width="fit-content"
          />
          <ButtonIcon iconName={IconsName.plus} typeButton="primary" />
        </Box>
      </Box>
    </Modal>
  );
}

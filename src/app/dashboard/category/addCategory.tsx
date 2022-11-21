import { Box, ModalProps } from "@chakra-ui/react";
import { IconsName } from "assets/icons";
import { ButtonIcon } from "components/atoms";
import { FormInput, Modal } from "components/molecules";
import { IOpenModal } from "components/molecules/modal";
import { colors } from "theme/colors";

interface IAddKategori extends IOpenModal {}
export default function AddKategori(props: IAddKategori) {
  return (
    <Modal {...props} size="xl" title="Tambah Kategori">
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        alignItems="flex-end"
        pt="20px"
        pb="50px"
      >
        <Box display="flex" justifyContent="space-between" width="100%">
          <FormInput
            label="Nama Kategori"
            placeholder="Masukan nama kategori"
          />
        </Box>
        <Box width={250} display="flex" justifyContent="space-evenly">
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

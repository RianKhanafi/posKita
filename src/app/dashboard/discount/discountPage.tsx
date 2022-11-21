"use client";
import { Box } from "@chakra-ui/react";
import { IconsName } from "assets/icons";
import { ButtonIcon, Input } from "components/atoms";
import Table, { ColumnDefinitionType } from "components/molecules/Table";
import React, { useState } from "react";
import AddDiscount from "./addDiskon";

interface Discount {
  name: string;
  diskon: string;
  created_date?: string;
  expired_date?: string;
}

const columns: ColumnDefinitionType<Discount, keyof Discount>[] = [
  {
    key: "name",
    title: "Nama Diskon",
    width: 150,
  },
  {
    key: "diskon",
    title: "Diskon",
    width: 150,
  },
  {
    key: "created_date",
    title: "Created Date",
    width: 150,
  },
  {
    key: "expired_date",
    title: "Expired Date Date",
    width: 150,
  },
];

const data: Discount[] = [
  {
    name: "Diskon Kelaparan",
    diskon: "50%",
    created_date: "11 April 2022 12:00",
    expired_date: "11 Mei 2022 12:00",
  },
  {
    name: "Diskon Kelaparan",
    diskon: "50%",
    created_date: "11 April 2022 12:00",
    expired_date: "11 Mei 2022 12:00",
  },
  {
    name: "Diskon Kelaparan",
    diskon: "50%",
    created_date: "11 April 2022 12:00",
    expired_date: "11 Mei 2022 12:00",
  },
  {
    name: "Diskon Kelaparan",
    diskon: "50%",
    created_date: "11 April 2022 12:00",
    expired_date: "11 Mei 2022 12:00",
  },
  {
    name: "Diskon Kelaparan",
    diskon: "50%",
    created_date: "11 April 2022 12:00",
    expired_date: "11 Mei 2022 12:00",
  },
  {
    name: "Diskon Kelaparan",
    diskon: "50%",
    created_date: "11 April 2022 12:00",
    expired_date: "11 Mei 2022 12:00",
  },
  {
    name: "Diskon Kelaparan",
    diskon: "50%",
    created_date: "11 April 2022 12:00",
    expired_date: "11 Mei 2022 12:00",
  },
  {
    name: "Diskon Kelaparan",
    diskon: "50%",
    created_date: "11 April 2022 12:00",
    expired_date: "11 Mei 2022 12:00",
  },
  {
    name: "Diskon Kelaparan",
    diskon: "50%",
    created_date: "11 April 2022 12:00",
    expired_date: "11 Mei 2022 12:00",
  },
];

export default function DiscountPage() {
  const [page, setPage] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Box>
      <AddDiscount openModal={openModal} setOpenModal={setOpenModal} />
      <Table
        headerTitle="List Diskon"
        headerChildren={
          <Box display="flex">
            <Input width={300} placeholder="Cari diskon" mr="20px" />
            <ButtonIcon
              typeButton="primary"
              width="fit-content"
              onClick={() => setOpenModal(true)}
              iconName={IconsName.plus}
            >
              Diskon Baru
            </ButtonIcon>
          </Box>
        }
        header={columns}
        data={data}
        total={1000}
        pageSize={10}
        current={page}
        onChange={(e) => setPage(e)}
      />
    </Box>
  );
}

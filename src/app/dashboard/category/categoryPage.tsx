"use client";
import { Box } from "@chakra-ui/react";
import { IconsName } from "assets/icons";
import { ButtonIcon, Input } from "components/atoms";
import Table, { ColumnDefinitionType } from "components/molecules/Table";
import React, { useState } from "react";
import AddDiscount from "./addCategory";

interface Categroy {
  name: string;
  created_date?: string;
}

const columns: ColumnDefinitionType<Categroy, keyof Categroy>[] = [
  {
    key: "name",
    title: "Nama Diskon",
  },
  {
    key: "created_date",
    title: "Created Date",
  },
];

const data: Categroy[] = [
  {
    name: "Makanan",
    created_date: "11 April 2022 12:00",
  },
  {
    name: "Makanan",
    created_date: "11 April 2022 12:00",
  },
  {
    name: "Makanan",
    created_date: "11 April 2022 12:00",
  },
  {
    name: "Makanan",
    created_date: "11 April 2022 12:00",
  },
  {
    name: "Makanan",
    created_date: "11 April 2022 12:00",
  },
  {
    name: "Makanan",
    created_date: "11 April 2022 12:00",
  },
  {
    name: "Makanan",
    created_date: "11 April 2022 12:00",
  },
  {
    name: "Makanan",
    created_date: "11 April 2022 12:00",
  },
  {
    name: "Makanan",
    created_date: "11 April 2022 12:00",
  },
];

export default function CategoryPage() {
  const [page, setPage] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Box>
      <AddDiscount openModal={openModal} setOpenModal={setOpenModal} />
      <Table
        headerTitle="List Kategori"
        headerChildren={
          <Box display="flex">
            <Input width={300} placeholder="Cari kategori" mr="20px" />
            <ButtonIcon
              typeButton="primary"
              width="fit-content"
              onClick={() => setOpenModal(true)}
              iconName={IconsName.plus}
            >
              Kategori Baru
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

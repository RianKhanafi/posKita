"use client";
import { Box } from "@chakra-ui/react";
import { IconsName } from "assets/icons";
import { ButtonIcon, Input } from "components/atoms";
import Table, { ColumnDefinitionType } from "components/molecules/Table";

import React, { useState } from "react";

interface Customer {
  name: string;
  date: string;
  option?: string;
}

const columns: ColumnDefinitionType<Customer, keyof Customer>[] = [
  {
    key: "name",
    title: "Name",
  },
  {
    key: "date",
    title: "Date",
  },
  {
    key: "option",
    title: "Options",
    width: 200,
    renders: (e) => (
      <ButtonIcon
        typeButton="none"
        iconName={IconsName.trash}
        style={{ all: "unset" }}

      />
    ),
  },
];

const data: Customer[] = [
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
  },
];

export default function CustomerPage() {
  const [page, setPage] = useState<number>(1);

  return (
    <Box>
      <Table
        headerTitle="List Pelanggan"
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

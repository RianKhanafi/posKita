"use client";
import { Box } from "@chakra-ui/react";
import { IconsName } from "assets/icons";
import { ButtonIcon, Input } from "components/atoms";
import Table, { ColumnDefinitionType } from "components/molecules/Table";

import React, { useState } from "react";

interface Customer {
  name: string;
  date: string;
  no: string;
  option?: string;
}

const columns: ColumnDefinitionType<Customer, keyof Customer>[] = [
  {
    key: "name",
    title: "Name",
  },
  {
    key: "no",
    title: "No",
  },
  {
    key: "date",
    title: "Date",
  },
  {
    key: "option",
    title: "",
    width: 30,
    isOptions: true,
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
    no: "086617777281",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
    no: "086617777281",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
    no: "086617777281",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
    no: "086617777281",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
    no: "086617777281",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
    no: "086617777281",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
    no: "086617777281",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
    no: "086617777281",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
    no: "086617777281",
  },
  {
    name: "Nasi Goreng Komplit",
    date: "May 26, 2019",
    no: "086617777281",
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

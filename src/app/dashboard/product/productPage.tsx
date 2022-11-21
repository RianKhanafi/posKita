"use client";
import { Box } from "@chakra-ui/react";
import { IconsName } from "assets/icons";
import { ButtonIcon, Input } from "components/atoms";
import Table, { ColumnDefinitionType } from "components/molecules/Table";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Cat {
  name: string;
  age: number;
  gender: string;
  color: string;
  activityLevel?: string;
  favoriteFood?: string;
}

const columns: ColumnDefinitionType<Cat, keyof Cat>[] = [
  {
    key: "name",
    title: "Name",
    width: 150,
  },
  {
    key: "age",
    title: "Age",
    width: 150,
  },
  {
    key: "gender",
    title: "Gender",
    width: 150,
  },
];

const data: Cat[] = [
  {
    name: "Mittens",
    color: "black",
    age: 2,
    gender: "female",
    activityLevel: "hight",
    favoriteFood: "milk",
  },
  {
    name: "Mons",
    color: "grey",
    age: 2,
    gender: "male",
    favoriteFood: "old socks",
    activityLevel: "medium",
  },
  {
    name: "Luna",
    color: "black",
    age: 2,
    gender: "female",
    activityLevel: "medium",
    favoriteFood: "fish",
  },
  {
    name: "Bella",
    color: "grey",
    age: 1,
    gender: "female",
    activityLevel: "high",
    favoriteFood: "mice",
  },
  {
    name: "Oliver",
    color: "orange",
    age: 1,
    gender: "male",
    activityLevel: "low",
    favoriteFood: "fish",
  },
  {
    name: "Mittens",
    color: "black",
    age: 2,
    gender: "female",
    activityLevel: "hight",
    favoriteFood: "milk",
  },
  {
    name: "Mons",
    color: "grey",
    age: 2,
    gender: "male",
    favoriteFood: "old socks",
    activityLevel: "medium",
  },
  {
    name: "Luna",
    color: "black",
    age: 2,
    gender: "female",
    activityLevel: "medium",
    favoriteFood: "fish",
  },
  {
    name: "Bella",
    color: "grey",
    age: 1,
    gender: "female",
    activityLevel: "high",
    favoriteFood: "mice",
  },
  {
    name: "Oliver",
    color: "orange",
    age: 1,
    gender: "male",
    activityLevel: "low",
    favoriteFood: "fish",
  },
];

export default function Productpage() {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);

  return (
    <Box>
      <Table
        headerTitle="List Produk"
        headerChildren={
          <Box display="flex">
            <Input
              width={300}
              placeholder="Cari nama & kategori produk"
              mr="20px"
            />
            <ButtonIcon
              typeButton="primary"
              width="fit-content"
              onClick={() => router.push("/dashboard/product/addproduct")}
              iconName={IconsName.plus}
            >
              Produk Baru
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

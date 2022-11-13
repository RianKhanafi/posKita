"use client";
import {
  Table as TableChakraUI,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { Text } from "components/atoms";
import React from "react";

export enum EAlignment {
  left = "left",
  center = "center",
  right = "right",
}

export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  title: string;
  width?: number;
  renders?: (e: T, index: number) => React.ReactNode;
  isNumeric?: boolean;
};

export type ITableHeader<T, K extends keyof T> = {
  header: Array<ColumnDefinitionType<T, K>>;
};

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  header: Array<ColumnDefinitionType<T, K>>;
  noData?: string;
  onClickRow?: (e: T) => void;
  loading?: boolean;
  headerTitle?: string;
};

const TableHeader = <T, K extends keyof T>({
  header,
}: ITableHeader<T, K>): JSX.Element => {
  return (
    <Thead>
      <Tr>
        {header.map((head) => (
          <Th color="gray.medium" isNumeric={head?.isNumeric}>
            {head.title}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

const TableBody = <T, K extends keyof T>({
  data,
  header,
}: TableRowsProps<T, K>): JSX.Element => {
  return (
    <Tbody>
      {data.map((elm: T, idx1: number) => (
        <Tr key={`tr-${idx1}`}>
          {header.map((head, idx2) => (
            <Td
              color="dark.hard"
              isNumeric={head?.isNumeric}
              key={`td-${idx2}`}
            >
              <div>
                {head.renders
                  ? head.renders(elm, idx1)
                  : //   till now, i dont get it as keyof reactNode :')
                    elm[head.key as keyof React.ReactNode]}
              </div>
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
};

export default function Table<T, K extends keyof T>({
  header,
  data,
  headerTitle = "Header Title",
}: TableRowsProps<T, K>): JSX.Element {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Text py="6" px="6" fontSize={19} fontWeight="bold">
        {headerTitle}
      </Text>
      <TableContainer>
        <TableChakraUI variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <TableHeader header={header} />
          <TableBody header={header} data={data} />
        </TableChakraUI>
      </TableContainer>
    </Box>
  );
}

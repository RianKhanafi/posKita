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
import { Pagination, Text } from "components/atoms";
import { PaginationProps } from "rc-pagination";
import React from "react";
import { colors } from "theme/colors";

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

interface TableRowsProps<T, K extends keyof T> extends PaginationProps {
  data: Array<T>;
  header: Array<ColumnDefinitionType<T, K>>;
  noData?: string;
  onClickRow?: (e: T) => void;
  loading?: boolean;
  headerTitle?: string;
  headerChildren?: React.ReactNode;
}

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
        <Tr
          key={`tr-${idx1}`}
          height="15px"
          _hover={{
            backgroundColor: colors.gray.soft,
          }}
        >
          {header.map((head, idx2) => (
            <Td
              color="dark.hard"
              isNumeric={head?.isNumeric}
              key={`td-${idx2}`}
              fontSize="15px"
              height="15px"
              py="13px"
              width={head.width}
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
  total,
  pageSize = 10,
  onChange,
  current,
  headerTitle = "Header Title",
  headerChildren = <div />,
}: TableRowsProps<T, K>): JSX.Element {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box display="flex" justifyContent="space-between" py="6" px="6">
        <Box>
          <Text fontSize={19} fontWeight="bold">
            {headerTitle}
          </Text>
        </Box>
        <Box>{headerChildren}</Box>
      </Box>
      <TableContainer>
        <TableChakraUI variant="simple">
          <TableHeader header={header} />
          <TableBody header={header} data={data} />
        </TableChakraUI>
      </TableContainer>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my="3"
        px="6"
      >
        <Box>
          <Text color="#9FA2B4" fontSize="14px">
            Tampil {data?.length} Dari {total} data
          </Text>
        </Box>
        <Pagination
          total={total!}
          pageSize={pageSize}
          current={current}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
}

"use client";
import React from "react";

import Pagination, { PaginationProps } from "rc-pagination";
import Icons, { IconsName } from "assets/icons";
import { Box } from "@chakra-ui/react";

const itemRender =
  (active?: number) =>
  (current: number, type: string, element: React.ReactNode) => {
    if (type === "page") {
      return (
        <Box
          rounded="5px"
          width={30}
          height={30}
          textAlign="center"
          fontWeight="semibold"
          //   borderColor={current === active ? "primary.hard" : "dark.soft"}
          color={current === active ? "primary.hard" : "gray.medium"}
        >
          {current}
        </Box>
      );
    }
    return element;
  };
interface IPaginationProps extends PaginationProps {
  total: number;
}
export default function PaginationComponent({
  onChange,
  current,
  total,
  pageSize,
  ...rest
}: IPaginationProps) {
  //   const totalPage = React.useMemo(
  //     () => Math.ceil(total / pageSize!),
  //     [total, pageSize]
  //   );

  return (
    <>
      <Pagination
        onChange={onChange}
        current={current}
        total={total}
        pageSize={pageSize}
        itemRender={itemRender(current)}
        jumpPrevIcon={
          <Box transform="rotate(90deg)">
            <Icons name={IconsName.more} />
          </Box>
        }
        jumpNextIcon={
          <Box transform="rotate(90deg)">
            <Icons name={IconsName.more} />
          </Box>
        }
        nextIcon={
          <div>
            <Icons name={IconsName.chevronRight} />
          </div>
        }
        prevIcon={
          <div>
            <Icons name={IconsName.chevronLeft} />
          </div>
        }
        {...rest}
      />
    </>
  );
}

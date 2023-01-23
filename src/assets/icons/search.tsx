import { IConsProps } from "module/common/type";
import * as React from "react";

function SvgSearch(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { fill = "#8B8B8B", width = 16, height = 16 } = props;
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2124 14.5735L11.4044 10.6129C12.3835 9.44901 12.92 7.98455 12.92 6.45999C12.92 2.89801 10.022 0 6.45999 0C2.89801 0 0 2.89801 0 6.45999C0 10.022 2.89801 12.92 6.45999 12.92C7.79721 12.92 9.07152 12.5167 10.161 11.751L13.998 15.7416C14.1583 15.9082 14.374 16 14.6052 16C14.824 16 15.0316 15.9166 15.1891 15.7649C15.5239 15.4428 15.5346 14.9085 15.2124 14.5735ZM6.45999 1.68522C9.09286 1.68522 11.2348 3.82713 11.2348 6.45999C11.2348 9.09286 9.09286 11.2348 6.45999 11.2348C3.82713 11.2348 1.68522 9.09286 1.68522 6.45999C1.68522 3.82713 3.82713 1.68522 6.45999 1.68522Z"
        fill={fill}
      />
    </svg>
  );
}

export default SvgSearch;

import { IConsProps } from "module/common/type";
import * as React from "react";

function SvgFilter(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { width = 24, height = 24, fill = "#7C7C7A" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_222_319)">
        <path
          d="M15.4167 27.75H21.5833V24.6667H15.4167V27.75ZM4.625 9.25V12.3333H32.375V9.25H4.625ZM9.25 20.0417H27.75V16.9583H9.25V20.0417Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_222_319">
          <rect width="37" height="37" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgFilter;

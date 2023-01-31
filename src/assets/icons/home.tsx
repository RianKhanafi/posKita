import { IConsProps } from "module/common/type";
import * as React from "react";

function HomeSvg(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { width = 24, height = 24, fill = "#7C7C7A" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8101 2.44991C11.5288 2.16901 11.1476 2.01123 10.7501 2.01123C10.3526 2.01123 9.97132 2.16901 9.69007 2.44991L7.96107 4.17491C7.88712 3.84172 7.70176 3.54372 7.43559 3.33009C7.16943 3.11646 6.83836 2.99999 6.49707 2.99991H3.49707C3.09925 2.99991 2.71771 3.15795 2.43641 3.43925C2.15511 3.72056 1.99707 4.10209 1.99707 4.49991V12.4979C1.99707 13.0079 2.25207 13.4599 2.64107 13.7299C2.88407 13.8999 3.18107 13.9999 3.50007 13.9999H11.5001C11.8979 13.9999 12.2794 13.8419 12.5607 13.5606C12.842 13.2793 13.0001 12.8977 13.0001 12.4999V9.49991C13 9.16743 12.8894 8.8444 12.6858 8.58157C12.4822 8.31875 12.197 8.13103 11.8751 8.04791L13.5801 6.33991C13.8613 6.05862 14.0192 5.67716 14.0192 5.27941C14.0192 4.88166 13.8613 4.5002 13.5801 4.21891L11.8101 2.44891V2.44991ZM7.99707 6.41991L9.57707 7.99991H7.99707V6.41991ZM6.99707 7.99991H2.99707V4.49991C2.99707 4.3673 3.04975 4.24013 3.14352 4.14636C3.23729 4.05259 3.36446 3.99991 3.49707 3.99991H6.49707C6.62968 3.99991 6.75686 4.05259 6.85062 4.14636C6.94439 4.24013 6.99707 4.3673 6.99707 4.49991V7.99991ZM3.21107 12.9099C3.14558 12.8635 3.09221 12.802 3.05549 12.7307C3.01876 12.6593 2.99975 12.5802 3.00007 12.4999V8.99991H6.99707V12.9979H3.49707C3.39475 12.9981 3.29487 12.9666 3.21107 12.9079V12.9099ZM7.99707 12.9999V8.99991H11.5001C11.6327 8.99991 11.7599 9.05259 11.8536 9.14636C11.9474 9.24012 12.0001 9.3673 12.0001 9.49991V12.4999C12.0001 12.6325 11.9474 12.7597 11.8536 12.8535C11.7599 12.9472 11.6327 12.9999 11.5001 12.9999H7.99707Z"
        fill={fill}
      />
    </svg>
  );
}

export default HomeSvg;
import { SvgProps } from "../types";

export const Alert = ({ size = 16, color = "currentColor" }: SvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_116_38)">
        <path
          d="M6.55002 1.66667H13.45L18.3334 6.55V13.45L13.45 18.3333H6.55002L1.66669 13.45V6.55L6.55002 1.66667Z"
          stroke="#F1972C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 6.66667V10"
          stroke="#F0F2F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 13.3333H10.01"
          stroke="#F0F2F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_116_38">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

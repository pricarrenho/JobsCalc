import { SvgProps } from "../types";

export const PlusSign = ({ size = 16, color = "currentColor" }: SvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.16" width="32" height="32" rx="5" fill={color} />
      <path
        d="M16 9V23"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16H23"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

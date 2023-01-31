const colors = {
  black: "#13131A",
  white: "#FFFFFF",
  orange900: "#F1972C",
  orange800: "#FA9C2D",
  red900: "#EB3B35",
  red800: "#FA3F38",
  green900: "#36B336",
  green800: "#3CC73C",
  gray900: "#41414C",
  gray800: "#5A5A66",
  gray700: " #787880;",
  gray600: "#BFBFCC",
  neutral900: "#E8F8E8",
  neutral800: "#FAECEB",
  neutral700: "#E1E3E6",
  neutral600: "#E1E3E5",
  neutral500: "#F0F2F5",
  neutral400: "#FCFDFF",
  neutral300: "#ECEEF0",
};

const font = {
  family: "IBM Plex Sans",
  sizes: {
    xsm: "14px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xlg: "32px",
  },
};

export const themeWhite = {
  colors: {
    ...colors,
    background: colors.neutral500,
  },
  font,
};

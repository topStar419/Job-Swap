import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import fontTheme from "../styles/font";

const typePattern = {
  s_400: {
    lineHeight: "21px",
  },
};

const MenuLink = styled(Button)(({wcolor, wfontcolor, fontstyle }) => ({
  color: wfontcolor,
  backgroundColor: wcolor,
  // padding: 16,
  fontSize: fontTheme[fontstyle].size,
  fontWeight: fontTheme[fontstyle].weight,
  lineHeight: typePattern[fontstyle].lineHeight,
  gap: 6,
  border: "none",
  // borderColor: wcolor,
}));

export default React.memo(MenuLink);

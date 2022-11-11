import { Dimensions } from "react-native";

export const Screen = {
  Width: Dimensions.get("window").width,
  Height: Dimensions.get("window").height,
};

export const universalPaddingHorizontal = 20;
export const universalPaddingVertical = 10;
export const buttonHeight = 50;
export const inputHeight = 55;
export const sheetOpenDuration = 200;
export const sheetCloseDuration = 200;
export const sheetHeightFull = Screen.Height * 0.5;
export const universalBorderWidth = 0.5;

export const initialLayout = { width: Dimensions.get("window").width };

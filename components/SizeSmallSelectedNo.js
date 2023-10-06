import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SizeSmallSelectedNo = ({
  s,
  sizeSmallSelectedNoPosition,
  sizeSmallSelectedNoBorderRadius,
  sizeSmallSelectedNoBorderStyle,
  sizeSmallSelectedNoBorderColor,
  sizeSmallSelectedNoBorderWidth,
  sizeSmallSelectedNoTop,
  sizeSmallSelectedNoLeft,
  sizeSmallSelectedNoBackgroundColor,
  sizeSmallSelectedNoWidth,
  sizeSmallSelectedNoPadding,
  sizeSmallSelectedNoMarginLeft,
  sFontFamily,
  sColor,
  sFontWeight,
  onButtonPress,
}) => {
  const sizeSmallSelectedNoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", sizeSmallSelectedNoPosition),
      ...getStyleValue("borderRadius", sizeSmallSelectedNoBorderRadius),
      ...getStyleValue("borderStyle", sizeSmallSelectedNoBorderStyle),
      ...getStyleValue("borderColor", sizeSmallSelectedNoBorderColor),
      ...getStyleValue("borderWidth", sizeSmallSelectedNoBorderWidth),
      ...getStyleValue("top", sizeSmallSelectedNoTop),
      ...getStyleValue("left", sizeSmallSelectedNoLeft),
      ...getStyleValue("backgroundColor", sizeSmallSelectedNoBackgroundColor),
      ...getStyleValue("width", sizeSmallSelectedNoWidth),
      ...getStyleValue("padding", sizeSmallSelectedNoPadding),
      ...getStyleValue("marginLeft", sizeSmallSelectedNoMarginLeft),
    };
  }, [
    sizeSmallSelectedNoPosition,
    sizeSmallSelectedNoBorderRadius,
    sizeSmallSelectedNoBorderStyle,
    sizeSmallSelectedNoBorderColor,
    sizeSmallSelectedNoBorderWidth,
    sizeSmallSelectedNoTop,
    sizeSmallSelectedNoLeft,
    sizeSmallSelectedNoBackgroundColor,
    sizeSmallSelectedNoWidth,
    sizeSmallSelectedNoPadding,
    sizeSmallSelectedNoMarginLeft,
  ]);

  const sStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", sFontFamily),
      ...getStyleValue("color", sColor),
      ...getStyleValue("fontWeight", sFontWeight),
    };
  }, [sFontFamily, sColor, sFontWeight]);

  return (
    <View
      style={[styles.sizesmallSelectedno, sizeSmallSelectedNoStyle]}
      onPress={onButtonPress}
    >
      <Text style={[styles.s, sStyle]}>{s}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  s: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
  },
  sizesmallSelectedno: {
    borderRadius: Border.br_6xl,
    borderStyle: "solid",
    borderColor: "#8de97e",
    borderWidth: 1,
    width: 41,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SizeSmallSelectedNo;

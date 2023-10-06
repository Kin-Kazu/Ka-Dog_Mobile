import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Form = ({
  text,
  property1FormPosition,
  property1FormBorderRadius,
  property1FormBorderColor,
  property1FormTop,
  property1FormLeft,
  property1FormWidth,
  property1FormHeight,
  property1FormRight,
  property1FormBottom,
  property1FormBackgroundColor,
  property1FormZIndex,
  property1FormBorderStyle,
  property1FormBorderWidth,
}) => {
  const property1FormStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1FormPosition),
      ...getStyleValue("borderRadius", property1FormBorderRadius),
      ...getStyleValue("borderColor", property1FormBorderColor),
      ...getStyleValue("top", property1FormTop),
      ...getStyleValue("left", property1FormLeft),
      ...getStyleValue("width", property1FormWidth),
      ...getStyleValue("height", property1FormHeight),
      ...getStyleValue("right", property1FormRight),
      ...getStyleValue("bottom", property1FormBottom),
      ...getStyleValue("backgroundColor", property1FormBackgroundColor),
      ...getStyleValue("zIndex", property1FormZIndex),
      ...getStyleValue("borderStyle", property1FormBorderStyle),
      ...getStyleValue("borderWidth", property1FormBorderWidth),
    };
  }, [
    property1FormPosition,
    property1FormBorderRadius,
    property1FormBorderColor,
    property1FormTop,
    property1FormLeft,
    property1FormWidth,
    property1FormHeight,
    property1FormRight,
    property1FormBottom,
    property1FormBackgroundColor,
    property1FormZIndex,
    property1FormBorderStyle,
    property1FormBorderWidth,
  ]);

  return (
    <View style={[styles.property1form, property1FormStyle]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.arapeyRegular,
    color: Color.colorDarkgray_200,
    textAlign: "left",
  },
  property1form: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 312,
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
  },
});

export default Property1Form;

import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import SizeSmallSelectedNo from "./SizeSmallSelectedNo";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1sexMobile = ({
  text,
  property1sexMobilePosition,
  property1sexMobileWidth,
  property1sexMobileHeight,
  property1sexMobileMarginTop,
}) => {
  const property1sexMobileStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1sexMobilePosition),
      ...getStyleValue("width", property1sexMobileWidth),
      ...getStyleValue("height", property1sexMobileHeight),
      ...getStyleValue("marginTop", property1sexMobileMarginTop),
    };
  }, [
    property1sexMobilePosition,
    property1sexMobileWidth,
    property1sexMobileHeight,
    property1sexMobileMarginTop,
  ]);

  return (
    <View style={[styles.property1sexMobile, property1sexMobileStyle]}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.sexSelectionParent}>
        <View style={[styles.sexSelection, styles.sexPosition]}>
          <SizeSmallSelectedNo
            s="M"
            sizeSmallSelectedNoPosition="unset"
            sizeSmallSelectedNoBorderRadius={25}
            sizeSmallSelectedNoBorderStyle="unset"
            sizeSmallSelectedNoBorderColor="unset"
            sizeSmallSelectedNoTop="unset"
            sizeSmallSelectedNoLeft="unset"
            sizeSmallSelectedNoBackgroundColor="#fff"
            sizeSmallSelectedNoWidth={41}
            sizeSmallSelectedNoPadding="unset"
            sizeSmallSelectedNoMarginLeft="unset"
            sFontFamily="Inter-Regular"
            sColor="#000"
            sFontWeight="unset"
          />
        </View>
        <View style={[styles.sexSelection1, styles.sexPosition]}>
          <SizeSmallSelectedNo
            s="F"
            sizeSmallSelectedNoPosition="unset"
            sizeSmallSelectedNoBorderRadius={25}
            sizeSmallSelectedNoBorderStyle="unset"
            sizeSmallSelectedNoBorderColor="unset"
            sizeSmallSelectedNoTop="unset"
            sizeSmallSelectedNoLeft="unset"
            sizeSmallSelectedNoBackgroundColor="#fff"
            sizeSmallSelectedNoWidth={41}
            sizeSmallSelectedNoPadding="unset"
            sizeSmallSelectedNoMarginLeft="unset"
            sFontFamily="Inter-Regular"
            sColor="#000"
            sFontWeight="unset"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sexPosition: {
    top: 3,
    position: "absolute",
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 106,
    height: 18,
  },
  sexSelection: {
    left: 0,
  },
  sexSelection1: {
    left: 58,
  },
  sexSelectionParent: {
    width: 303,
    height: 24,
    overflow: "hidden",
    marginLeft: -1,
    borderRadius: Border.br_8xs,
  },
  property1sexMobile: {
    width: 245,
    height: 28,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_8xs,
  },
});

export default Property1sexMobile;

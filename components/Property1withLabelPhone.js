import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1withLabelPhone = ({
  text,
  text1,
  property1withLabelPhonePosition,
  property1withLabelPhoneMarginTop,
}) => {
  const property1withLabelPhoneStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1withLabelPhonePosition),
      ...getStyleValue("marginTop", property1withLabelPhoneMarginTop),
    };
  }, [property1withLabelPhonePosition, property1withLabelPhoneMarginTop]);

  return (
    <View
      style={[styles.property1withLabelPhone, property1withLabelPhoneStyle]}
    >
      <Text style={styles.text}>{text}</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.text1}>{text1}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    width: 95,
    height: 18,
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 2,
    left: 9,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.arapeyRegular,
    color: Color.colorDarkgray_200,
    textAlign: "left",
  },
  textWrapper: {
    backgroundColor: Color.colorWhite,
    width: 200,
    height: 20,
    overflow: "hidden",
    marginLeft: 10,
    borderRadius: Border.br_8xs,
  },
  property1withLabelPhone: {
    height: 28,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_8xs,
  },
});

export default Property1withLabelPhone;

import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Property1withLabelPhone from "./Property1withLabelPhone";
import Property1sexMobile from "./Property1sexMobile";
import SizeSmallSelectedNo from "./SizeSmallSelectedNo";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PetInfoFormContainer = ({ itemNumber, sTop, sLeft, onDeletePress }) => {
  const petInfoInputFieldsStyle = useMemo(() => {
    return {
      ...getStyleValue("top", sTop),
      ...getStyleValue("left", sLeft),
    };
  }, [sTop, sLeft]);

  return (
    <View style={[styles.petInfoInputfields, petInfoInputFieldsStyle]}>
      <View style={styles.head}>
        <Text style={[styles.text, styles.textTypo]}>{itemNumber}</Text>
        <Pressable style={styles.delete} onPress={onDeletePress}>
          <Text style={[styles.text1, styles.textTypo]}>-</Text>
        </Pressable>
      </View>
      <Property1withLabelPhone
        text="Owner"
        text1="First Name"
        property1withLabelPhonePosition="unset"
        property1withLabelPhoneMarginTop={1}
      />
      <Property1withLabelPhone
        text="Name"
        text1="Placeholder"
        property1withLabelPhonePosition="unset"
        property1withLabelPhoneMarginTop={1}
      />
      <Property1withLabelPhone
        text="Dog Breed"
        text1="Placeholder"
        property1withLabelPhonePosition="unset"
        property1withLabelPhoneMarginTop={1}
      />
      <Property1sexMobile
        text="Sex"
        property1sexMobilePosition="unset"
        property1sexMobileWidth={245}
        property1sexMobileHeight={28}
        property1sexMobileMarginTop={1}
      />
      <Property1withLabelPhone
        text="Contact No."
        text1="Placeholder"
        property1withLabelPhonePosition="unset"
        property1withLabelPhoneMarginTop={1}
      />
      <Property1withLabelPhone
        text="Date of Birth"
        text1="Placeholder"
        property1withLabelPhonePosition="unset"
        property1withLabelPhoneMarginTop={1}
      />
      <Property1withLabelPhone
        text="Age"
        text1="Placeholder"
        property1withLabelPhonePosition="unset"
        property1withLabelPhoneMarginTop={1}
      />
      <Property1withLabelPhone
        text="Event"
        text1="Select Show                             v"
        property1withLabelPhonePosition="unset"
        property1withLabelPhoneMarginTop={1}
      />
      <View style={styles.sizeSelectionParent}>
        <View style={[styles.sizeSelection, styles.text2Position]}>
          <SizeSmallSelectedNo
            s="S"
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
            sizeSmallSelectedNoMarginLeft={10}
            sFontFamily="Inter-Regular"
            sColor="#000"
            sFontWeight="unset"
          />
          <SizeSmallSelectedNo
            s="L"
            sizeSmallSelectedNoPosition="unset"
            sizeSmallSelectedNoBorderRadius={25}
            sizeSmallSelectedNoBorderStyle="unset"
            sizeSmallSelectedNoBorderColor="unset"
            sizeSmallSelectedNoTop="unset"
            sizeSmallSelectedNoLeft="unset"
            sizeSmallSelectedNoBackgroundColor="#fff"
            sizeSmallSelectedNoWidth={41}
            sizeSmallSelectedNoPadding="unset"
            sizeSmallSelectedNoMarginLeft={10}
            sFontFamily="Inter-Regular"
            sColor="#000"
            sFontWeight="unset"
          />
          <SizeSmallSelectedNo
            s="XL"
            sizeSmallSelectedNoPosition="unset"
            sizeSmallSelectedNoBorderRadius={25}
            sizeSmallSelectedNoBorderStyle="unset"
            sizeSmallSelectedNoBorderColor="unset"
            sizeSmallSelectedNoTop="unset"
            sizeSmallSelectedNoLeft="unset"
            sizeSmallSelectedNoBackgroundColor="#fff"
            sizeSmallSelectedNoWidth={41}
            sizeSmallSelectedNoPadding="unset"
            sizeSmallSelectedNoMarginLeft={10}
            sFontFamily="Inter-Regular"
            sColor="#000"
            sFontWeight="unset"
          />
        </View>
        <Text style={[styles.text2, styles.text2Position]}>Size</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontWeight: "700",
    textAlign: "left",
  },
  text2Position: {
    top: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.antonioBold,
    color: Color.colorDarkgray_400,
    textAlign: "left",
    width: 305,
  },
  text1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  delete: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorRed,
    width: 15,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 305,
  },
  sizeSelection: {
    left: 105,
    width: 194,
    flexDirection: "row",
  },
  text2: {
    left: 0,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    width: 77,
    height: 18,
    textAlign: "left",
  },
  sizeSelectionParent: {
    width: 299,
    height: 19,
    marginTop: 1,
  },
  petInfoInputfields: {
    top: 454,
    left: 17,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorLightgray_200,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_8xs,
    paddingBottom: Padding.p_3xs,
    position: "absolute",
  },
});

export default PetInfoFormContainer;

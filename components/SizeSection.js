import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SizeSection = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.numberWrapper}>
        <Text style={styles.number}>Number</Text>
      </View>
      <View style={[styles.nameParent, styles.nameParentFlexBox]}>
        <Text style={[styles.name, styles.nameTypo]}>Name</Text>
        <Image
          style={styles.bxssortIconLayout}
          contentFit="cover"
          source={require("../assets/bxssortalt.png")}
        />
      </View>
      <View style={[styles.dogNameParent, styles.nameParentFlexBox]}>
        <Text style={[styles.dogName, styles.nameTypo]}>Dog Name</Text>
        <Image
          style={[styles.bxssortAltIcon1, styles.bxssortIconLayout]}
          contentFit="cover"
          source={require("../assets/bxssortalt.png")}
        />
      </View>
      <View style={[styles.dogBreedWrapper, styles.nameParentFlexBox]}>
        <Text style={[styles.dogBreed, styles.nameTypo]}>Dog Breed</Text>
      </View>
      <View style={[styles.sizeWrapper, styles.nameParentFlexBox]}>
        <Text style={[styles.size, styles.nameTypo]}>Size</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameParentFlexBox: {
    marginLeft: 6,
    alignItems: "center",
    flexDirection: "row",
  },
  nameTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
  },
  bxssortIconLayout: {
    overflow: "hidden",
    height: 16,
    width: 16,
  },
  number: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    flex: 1,
  },
  numberWrapper: {
    width: 44,
    flexDirection: "row",
  },
  name: {
    width: 33,
  },
  nameParent: {
    width: 65,
  },
  dogName: {
    width: 58,
  },
  bxssortAltIcon1: {
    marginLeft: 1,
  },
  dogNameParent: {
    width: 85,
  },
  dogBreed: {
    width: 65,
  },
  dogBreedWrapper: {
    width: 91,
  },
  size: {
    flex: 1,
    textAlign: "left",
  },
  sizeWrapper: {
    width: 45,
  },
  frameParent: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 0.5,
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default SizeSection;

import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Property1Form from "./Property1Form";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const UserContainer = () => {
  return (
    <View style={[styles.rectangleParent, styles.componentChildLayout]}>
      <View style={[styles.componentChild, styles.componentChildLayout]} />
      <Text style={styles.emailAddress}>Email Address</Text>
      <Image
        style={styles.mailIcon}
        contentFit="cover"
        source={require("../assets/mail.png")}
      />
      <Property1Form
        text="Username"
        property1FormPosition="absolute"
        property1FormBorderRadius={10}
        property1FormBorderColor="#b3b0b0"
        property1FormTop={0}
        property1FormLeft={0}
        property1FormWidth={312}
        property1FormHeight={46}
        property1FormRight="unset"
        property1FormBottom="unset"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Property1Form
        text="Username"
        property1FormPosition="absolute"
        property1FormBorderRadius={10}
        property1FormBorderColor="#b3b0b0"
        property1FormTop={0}
        property1FormLeft={0}
        property1FormWidth={312}
        property1FormHeight={46}
        property1FormRight="unset"
        property1FormBottom="unset"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentChildLayout: {
    height: 47,
    width: 312,
    position: "absolute",
  },
  componentChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderColor: Color.colorLightgray_300,
    borderWidth: 1,
  },
  emailAddress: {
    top: 12,
    left: 17,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.arapeyRegular,
    color: Color.colorDarkgray_200,
    textAlign: "left",
    position: "absolute",
  },
  mailIcon: {
    top: 13,
    left: 276,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    top: 316,
    left: 53,
  },
});

export default UserContainer;

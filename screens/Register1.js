import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import SectionCard from "../components/SectionCard";
import Property1Form from "../components/Property1Form";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Register1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.register}>
      <SectionCard />
      <Text style={styles.registration}>Registration</Text>
      <Text style={[styles.firstName, styles.emailTypo]}>First name</Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.contact, styles.contactTypo]}>Contact #</Text>
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop="35.04%"
        property1FormLeft="27.7%"
        property1FormWidth="61.27%"
        property1FormHeight="3.01%"
        property1FormRight="11.03%"
        property1FormBottom="61.94%"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Text style={[styles.username, styles.contactTypo]}>Username</Text>
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop="39.17%"
        property1FormLeft="27.7%"
        property1FormWidth="61.27%"
        property1FormHeight="3.01%"
        property1FormRight="11.03%"
        property1FormBottom="57.81%"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Text style={styles.password}>Password</Text>
      <Text style={[styles.lastName, styles.sexLayout]}>Last name</Text>
      <Text style={[styles.sex, styles.sexTypo]}>Sex</Text>
      <View style={styles.registerChild} />
      <Text style={[styles.fashionShow, styles.mTypo]}>Fashion Show</Text>
      <Image
        style={[styles.registerItem, styles.registerItemLayout]}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
      <Text style={[styles.dogBreed, styles.mTypo]}>Dog Breed</Text>
      <Text style={[styles.ownerhandler, styles.nameTypo]}>Owner/Handler</Text>
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop="56.25%"
        property1FormLeft="31.22%"
        property1FormWidth="57.75%"
        property1FormHeight="3.01%"
        property1FormRight="11.03%"
        property1FormBottom="40.74%"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.sex1, styles.sexTypo]}>Sex</Text>
      <Text style={[styles.dateOfBirth, styles.mTypo]}>Date of Birth</Text>
      <Text style={[styles.age, styles.sexTypo]}>Age</Text>
      <Text style={[styles.event, styles.nameTypo]}>Event</Text>
      <Text style={[styles.size, styles.sexTypo]}>Size</Text>
      <View style={[styles.registerInner, styles.registerInnerLayout]} />
      <Text style={[styles.generalInformation, styles.informationTypo]}>
        GENERAL INFORMATION
      </Text>
      <View style={[styles.rectangleView, styles.registerInnerLayout]} />
      <Text style={[styles.dogInformation, styles.informationTypo]}>
        DOG INFORMATION
      </Text>
      <View style={[styles.smallButton, styles.buttonLayout]}>
        <Image
          style={[styles.smallButtonChild, styles.buttonLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Text style={[styles.s, styles.sTypo]}>S</Text>
      </View>
      <View style={[styles.mediumButton, styles.buttonLayout]}>
        <Image
          style={[styles.smallButtonChild, styles.buttonLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Text style={[styles.m, styles.mTypo]}>M</Text>
      </View>
      <View style={[styles.xlButton, styles.buttonLayout]}>
        <Image
          style={[styles.smallButtonChild, styles.buttonLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Text style={[styles.xl, styles.sTypo]}>XL</Text>
      </View>
      <View style={[styles.largeButton, styles.buttonLayout]}>
        <Image
          style={[styles.smallButtonChild, styles.buttonLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Text style={[styles.l, styles.sTypo]}>L</Text>
      </View>
      <Pressable
        style={styles.registerButton}
        onPress={() => navigation.navigate("KaDogDashboard2")}
      >
        <View style={styles.rectangle} />
        <Text style={styles.register1}>Register</Text>
      </Pressable>
      <Image
        style={[styles.addbtnRemovebgPreview2Icon, styles.registerItemLayout]}
        contentFit="cover"
        source={require("../assets/addbtnremovebgpreview-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    height: 28,
    width: 390,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 34,
    position: "absolute",
  },
  contactTypo: {
    width: 86,
    left: 32,
    height: 28,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  sexLayout: {
    height: 26,
    width: 85,
  },
  sexTypo: {
    left: 39,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  mTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  registerItemLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  nameTypo: {
    left: 36,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  registerInnerLayout: {
    opacity: 0.8,
    height: 31,
    width: 386,
    backgroundColor: Color.colorLightgray_100,
    position: "absolute",
  },
  informationTypo: {
    height: 25,
    width: 175,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  buttonLayout: {
    height: 30,
    width: 33,
    position: "absolute",
  },
  sTypo: {
    top: 5,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  registration: {
    top: 57,
    left: 129,
    fontSize: FontSize.size_8xl,
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorGray_100,
    textAlign: "center",
    position: "absolute",
  },
  firstName: {
    top: 136,
  },
  email: {
    top: 246,
  },
  contact: {
    top: 282,
  },
  username: {
    top: 318,
  },
  password: {
    top: 354,
    width: 77,
    left: 32,
    height: 28,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  lastName: {
    top: 174,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
    left: 34,
  },
  sex: {
    top: 208,
    height: 26,
    width: 85,
  },
  registerChild: {
    top: 705,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 220,
    height: 29,
    left: 138,
    position: "absolute",
  },
  fashionShow: {
    top: "79.19%",
    left: "45.54%",
  },
  registerItem: {
    height: "1.26%",
    width: "3.25%",
    top: "79.83%",
    right: "16.21%",
    bottom: "18.92%",
    left: "80.53%",
  },
  dogBreed: {
    top: 550,
    left: 34,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  ownerhandler: {
    top: 459,
    width: 103,
    height: 50,
  },
  name: {
    top: 508,
    width: 65,
    height: 18,
  },
  sex1: {
    top: 590,
  },
  dateOfBirth: {
    top: 624,
    left: 26,
  },
  age: {
    top: 663,
  },
  event: {
    top: 710,
  },
  size: {
    top: 759,
  },
  registerInner: {
    top: 90,
    left: 19,
  },
  generalInformation: {
    top: 95,
    left: 35,
  },
  rectangleView: {
    top: 419,
    left: 15,
  },
  dogInformation: {
    top: 426,
    left: 31,
  },
  smallButtonChild: {
    top: 0,
    left: 0,
  },
  s: {
    left: 11,
  },
  smallButton: {
    top: 753,
    width: 33,
    left: 138,
  },
  m: {
    top: 6,
    left: 9,
  },
  mediumButton: {
    left: 202,
    top: 753,
    width: 33,
  },
  xl: {
    left: 7,
  },
  xlButton: {
    left: 325,
    top: 753,
    width: 33,
  },
  l: {
    left: 12,
  },
  largeButton: {
    left: 266,
    top: 753,
    width: 33,
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSteelblue_100,
    position: "absolute",
    width: "100%",
  },
  register1: {
    height: "34.55%",
    width: "42.94%",
    top: "32.73%",
    left: "30.59%",
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  registerButton: {
    height: "6.14%",
    width: "39.91%",
    top: "88.17%",
    right: "31.22%",
    bottom: "5.69%",
    left: "28.87%",
    position: "absolute",
  },
  addbtnRemovebgPreview2Icon: {
    height: "2.9%",
    width: "5.87%",
    top: "47.1%",
    right: "7.98%",
    bottom: "50%",
    left: "86.15%",
  },
  register: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorDeepskyblue_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 23,
    elevation: 23,
    shadowOpacity: 1,
    flex: 1,
    height: 896,
    width: "100%",
  },
});

export default Register1;

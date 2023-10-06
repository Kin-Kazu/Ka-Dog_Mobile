import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1withLabelPhone from "../components/Property1withLabelPhone";
import Property1sexMobile from "../components/Property1sexMobile";
import PetInfoFormContainer from "../components/PetInfoFormContainer";
import SizeSmallSelectedNo from "../components/SizeSmallSelectedNo";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Register2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.register2}>
      <Image
        style={styles.register2Child}
        contentFit="cover"
        source={require("../assets/rectangle-193.png")}
      />
      <Text style={styles.registration}>Registration</Text>
      <View style={[styles.genInfo, styles.infoSpaceBlock]}>
        <Text style={styles.generalInformation}>General Information</Text>
      </View>
      <View style={[styles.dogInfo, styles.infoSpaceBlock]}>
        <Text style={styles.generalInformation}>Pet Information</Text>
        <Image
          style={styles.addbtnRemovebgPreview2Icon}
          contentFit="cover"
          source={require("../assets/addbtnremovebgpreview-2.png")}
        />
      </View>
      <View style={styles.genInfoInputfields}>
        <Property1withLabelPhone
          text="First Name"
          text1="First Name"
          property1withLabelPhonePosition="unset"
          property1withLabelPhoneMarginTop="unset"
        />
        <Property1withLabelPhone
          text="Last Name"
          text1="Placeholder"
          property1withLabelPhonePosition="unset"
          property1withLabelPhoneMarginTop={2}
        />
        <Property1sexMobile
          text="Sex"
          property1sexMobilePosition="unset"
          property1sexMobileWidth={245}
          property1sexMobileHeight={28}
          property1sexMobileMarginTop={2}
        />
        <Property1withLabelPhone
          text="Email Address"
          text1="Placeholder"
          property1withLabelPhonePosition="unset"
          property1withLabelPhoneMarginTop={2}
        />
        <Property1withLabelPhone
          text="Contact No."
          text1="Placeholder"
          property1withLabelPhonePosition="unset"
          property1withLabelPhoneMarginTop={2}
        />
        <Property1withLabelPhone
          text="Username"
          text1="Placeholder"
          property1withLabelPhonePosition="unset"
          property1withLabelPhoneMarginTop={2}
        />
        <Property1withLabelPhone
          text="Password"
          text1="Placeholder"
          property1withLabelPhonePosition="unset"
          property1withLabelPhoneMarginTop={2}
        />
        <Property1withLabelPhone
          text="Confirm Pass"
          text1="Placeholder"
          property1withLabelPhonePosition="unset"
          property1withLabelPhoneMarginTop={2}
        />
      </View>
      <Image
        style={styles.logokadogRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/logokadogremovebgpreview-1.png")}
      />
      <PetInfoFormContainer
        itemNumber="#1"
        onDeletePress={() => navigation.navigate("Register")}
      />
      <PetInfoFormContainer
        itemNumber="#2"
        sTop={745}
        sLeft={18}
        onDeletePress={() => navigation.navigate("Register")}
      />
      <SizeSmallSelectedNo
        s="Register"
        sizeSmallSelectedNoPosition="absolute"
        sizeSmallSelectedNoBorderRadius={20}
        sizeSmallSelectedNoBorderStyle="unset"
        sizeSmallSelectedNoBorderColor="unset"
        sizeSmallSelectedNoTop={1048}
        sizeSmallSelectedNoLeft={28}
        sizeSmallSelectedNoBackgroundColor="#0386d0"
        sizeSmallSelectedNoWidth={305}
        sizeSmallSelectedNoPadding={10}
        sizeSmallSelectedNoMarginLeft="unset"
        sFontFamily="Inter-Bold"
        sColor="#fff"
        sFontWeight="700"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  infoSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    flexDirection: "row",
    width: 340,
    backgroundColor: Color.colorGainsboro_200,
    left: 10,
    position: "absolute",
  },
  register2Child: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    width: 360,
    height: 1123,
    position: "absolute",
  },
  registration: {
    top: 58,
    left: 30,
    fontSize: FontSize.size_8xl,
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_100,
    textAlign: "center",
    position: "absolute",
  },
  generalInformation: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  genInfo: {
    top: 112,
  },
  addbtnRemovebgPreview2Icon: {
    width: 25,
    height: 26,
    marginLeft: 162,
  },
  dogInfo: {
    top: 407,
  },
  genInfoInputfields: {
    top: 146,
    left: 32,
    position: "absolute",
  },
  logokadogRemovebgPreview1Icon: {
    top: 27,
    left: 245,
    width: 96,
    height: 80,
    position: "absolute",
  },
  register2: {
    backgroundColor: Color.colorLightblue,
    flex: 1,
    width: "100%",
    height: 1127,
    overflow: "hidden",
  },
});

export default Register2;

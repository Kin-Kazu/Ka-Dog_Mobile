import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1withLabelPhone from "../components/Property1withLabelPhone";
import Property1sexMobile from "../components/Property1sexMobile";
import SizeSmallSelectedNo from "../components/SizeSmallSelectedNo";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.register1}>
      <Image
        style={[styles.register1Child, styles.text1Position]}
        contentFit="cover"
        source={require("../assets/rectangle-191.png")}
      />
      <Text style={styles.registration}>Registration</Text>
      <View style={[styles.genInfo, styles.infoSpaceBlock]}>
        <Text style={[styles.generalInformation, styles.text1Clr]}>
          General Information
        </Text>
      </View>
      <View style={[styles.dogInfo, styles.infoSpaceBlock]}>
        <Text style={[styles.generalInformation, styles.text1Clr]}>
          Pet Information
        </Text>
        <Pressable
          style={styles.addbtnRemovebgPreview2}
          onPress={() => navigation.navigate("Register2")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/addbtnremovebgpreview-2.png")}
          />
        </Pressable>
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
      <View style={styles.petInfoInputfields}>
        <Text style={styles.text}>#1</Text>
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
          <View style={styles.sizeSelection}>
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
          <Text style={[styles.text1, styles.text1Clr]}>Size</Text>
        </View>
      </View>
      <SizeSmallSelectedNo
        s="Register"
        sizeSmallSelectedNoPosition="absolute"
        sizeSmallSelectedNoBorderRadius={20}
        sizeSmallSelectedNoBorderStyle="unset"
        sizeSmallSelectedNoBorderColor="unset"
        sizeSmallSelectedNoTop={778}
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
  text1Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  infoSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    width: 340,
    backgroundColor: Color.colorGainsboro_200,
    left: 10,
    flexDirection: "row",
    position: "absolute",
  },
  text1Clr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  register1Child: {
    borderRadius: Border.br_mini,
    width: 360,
    height: 867,
  },
  registration: {
    top: 58,
    left: 30,
    fontSize: FontSize.size_8xl,
    lineHeight: 19,
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_100,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  generalInformation: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
  },
  genInfo: {
    top: 112,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  addbtnRemovebgPreview2: {
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
  text: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.antonioBold,
    color: Color.colorDarkgray_400,
    textAlign: "left",
    fontWeight: "700",
  },
  sizeSelection: {
    left: 105,
    width: 194,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    width: 77,
    height: 18,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
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
  register1: {
    backgroundColor: Color.colorLightblue,
    flex: 1,
    height: 881,
    overflow: "hidden",
    width: "100%",
  },
});

export default Register;

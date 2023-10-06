import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const OTP = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.otp}>
      <Text style={[styles.yourOtp, styles.textFlexBox]}>Your OTP</Text>
      <Text style={[styles.text, styles.textFlexBox]}>9823</Text>
      <Image
        style={[styles.backgroundPic2Icon, styles.backgroundIconLayout]}
        contentFit="cover"
        source={require("../assets/backgroundpic-2.png")}
      />
      <Image
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon, styles.removebgIconPosition]}
        contentFit="cover"
        source={require("../assets/1removebgpreview-1.png")}
      />
      <Image
        style={styles.removebgPreview1Icon1}
        contentFit="cover"
        source={require("../assets/2removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon2, styles.removebgIconPosition]}
        contentFit="cover"
        source={require("../assets/3removebgpreview-1.png")}
      />
      <Image
        style={styles.removebgPreview1Icon3}
        contentFit="cover"
        source={require("../assets/4removebgpreview-1.png")}
      />
      <Pressable
        style={[styles.profileParent, styles.profileParentLayout]}
        onPress={() => navigation.navigate("DetailsAtTheEvent")}
      >
        <Text style={[styles.profile, styles.textFlexBox]}>Confirmation</Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileParentLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.registerButton}
        onPress={() => navigation.navigate("KaDogDashboard2")}
      >
        <View style={styles.rectangle} />
        <Text style={[styles.confirm, styles.textFlexBox]}>Confirm</Text>
      </Pressable>
      <Image
        style={styles.logokadogRemovebgPreview2Icon}
        contentFit="cover"
        source={require("../assets/logokadogremovebgpreview-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  backgroundIconLayout: {
    width: 390,
    position: "absolute",
  },
  backgroundPic3IconPosition: {
    left: 0,
    top: 0,
  },
  removebgIconPosition: {
    top: 783,
    position: "absolute",
  },
  profileParentLayout: {
    height: 22,
    position: "absolute",
  },
  yourOtp: {
    top: 312,
    left: 137,
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    textAlign: "center",
    fontSize: FontSize.size_8xl,
  },
  text: {
    top: 358,
    left: 122,
    fontSize: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 152,
    height: 32,
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    textAlign: "center",
  },
  backgroundPic2Icon: {
    top: 1525,
    left: 504,
    height: 85,
  },
  backgroundPic3Icon: {
    height: 111,
    width: 390,
    position: "absolute",
  },
  removebgPreview1Icon: {
    left: 298,
    width: 61,
    height: 43,
  },
  removebgPreview1Icon1: {
    top: 778,
    left: 123,
    width: 60,
    height: 54,
    position: "absolute",
  },
  removebgPreview1Icon2: {
    left: 217,
    width: 52,
    height: 37,
  },
  removebgPreview1Icon3: {
    top: 771,
    left: 3,
    width: 109,
    height: 61,
    position: "absolute",
  },
  profile: {
    top: 2,
    left: 85,
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    textAlign: "center",
    fontSize: FontSize.size_8xl,
  },
  iconlylightarrowLeft: {
    width: 22,
    left: 0,
    top: 0,
  },
  profileParent: {
    top: 78,
    left: 26,
    width: 258,
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
  confirm: {
    height: "34.55%",
    width: "42.94%",
    top: "32.73%",
    left: "30.59%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.colorWhite,
  },
  registerButton: {
    height: "6.52%",
    width: "43.59%",
    top: "68.36%",
    right: "28.21%",
    bottom: "25.12%",
    left: "28.21%",
    position: "absolute",
  },
  logokadogRemovebgPreview2Icon: {
    top: 127,
    left: 78,
    width: 234,
    height: 158,
    position: "absolute",
  },
  otp: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default OTP;

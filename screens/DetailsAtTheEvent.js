import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const DetailsAtTheEvent = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.detailsAtTheEvent}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={[styles.smDowntown, styles.profileFlexBox]}>
        SM DOWNTOWN
      </Text>
      <Text style={[styles.hereAtSm, styles.hereAtSmTypo]}>
        Here at SM Downtown there will be an event held chuchu and also freebies
      </Text>
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
        onPress={() => navigation.navigate("KaDogDashboard2")}
      >
        <Text style={[styles.profile, styles.profileFlexBox]}>
          Details at the event
        </Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileParentLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left1.png")}
        />
      </Pressable>
      <Text style={[styles.august172023, styles.hereAtSmTypo]}>
        August 17, 2023
      </Text>
      <Pressable
        style={styles.registerButton}
        onPress={() => navigation.navigate("OTP")}
      >
        <View style={styles.rectangle} />
        <Text style={[styles.register, styles.profileFlexBox]}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  profileFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  hereAtSmTypo: {
    fontFamily: FontFamily.dMSansRegular,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 19,
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
  image1Icon: {
    top: 130,
    width: 213,
    height: 173,
    left: 88,
    position: "absolute",
  },
  smDowntown: {
    top: 312,
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_8xl,
    textAlign: "center",
    left: 88,
  },
  hereAtSm: {
    top: 384,
    left: 49,
    fontSize: FontSize.size_lg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 297,
    height: 85,
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
    left: 44,
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_8xl,
    textAlign: "center",
  },
  iconlylightarrowLeft: {
    width: 22,
    left: 0,
    top: 0,
  },
  profileParent: {
    top: 78,
    left: 26,
    width: 299,
  },
  august172023: {
    top: 340,
    left: 152,
    fontSize: FontSize.size_xs,
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
  register: {
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
  detailsAtTheEvent: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default DetailsAtTheEvent;

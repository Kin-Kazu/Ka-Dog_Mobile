import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Notification2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.notification}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Pressable
        style={styles.smDowntown}
        onPress={() => navigation.navigate("DetailsAtTheEvent")}
      >
        <Text style={styles.profileTypo}>SM DOWNTOWN</Text>
      </Pressable>
      <Text style={[styles.ayalaMall, styles.ayalaMallPosition]}>
        Ayala Mall
      </Text>
      <Text style={[styles.hereAtSm, styles.hereFlexBox]}>
        Here at SM Downtown there will be an event held chuchu and also freebies
      </Text>
      <Text style={[styles.hereAtAyala, styles.hereFlexBox]}>
        Here at Ayala Mall there will be a fun event where you invite your four
        legged friends to play
      </Text>
      <Image
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon, styles.removebgIconPosition]}
        contentFit="cover"
        source={require("../assets/2removebgpreview-1.png")}
      />
      <Image
        style={styles.removebgPreview1Icon1}
        contentFit="cover"
        source={require("../assets/3removebgpreview-1.png")}
      />
      <Image
        style={styles.removebgPreview1Icon2}
        contentFit="cover"
        source={require("../assets/4removebgpreview-1.png")}
      />
      <Pressable
        style={[styles.profileParent, styles.profileParentLayout]}
        onPress={() => navigation.navigate("KaDogDashboard2")}
      >
        <Text style={[styles.profile, styles.profileTypo]}>Notification</Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileParentLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left1.png")}
        />
      </Pressable>
      <Text style={styles.august172023}>August 17, 2023</Text>
      <Image
        style={[styles.removebgPreview3Icon, styles.removebgIconPosition]}
        contentFit="cover"
        source={require("../assets/1removebgpreview-1.png")}
      />
      <View style={styles.notificationChild} />
      <Text style={styles.july62023}>July 6, 2023</Text>
      <Image
        style={[styles.image4Icon, styles.ayalaMallPosition]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ayalaMallPosition: {
    top: 332,
    position: "absolute",
  },
  hereFlexBox: {
    width: 204,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 19,
    position: "absolute",
  },
  backgroundPic3IconPosition: {
    left: 0,
    top: 0,
  },
  removebgIconPosition: {
    top: 778,
    position: "absolute",
  },
  profileParentLayout: {
    height: 22,
    position: "absolute",
  },
  profileTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_8xl,
    color: Color.colorBlack,
  },
  image1Icon: {
    top: 159,
    left: 6,
    width: 114,
    height: 89,
    position: "absolute",
  },
  smDowntown: {
    top: 167,
    left: 129,
    position: "absolute",
  },
  ayalaMall: {
    left: 158,
    textAlign: "center",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_8xl,
    color: Color.colorBlack,
  },
  hereAtSm: {
    top: 204,
    left: 129,
  },
  hereAtAyala: {
    top: 369,
    left: 145,
  },
  backgroundPic3Icon: {
    width: 390,
    height: 111,
    position: "absolute",
  },
  removebgPreview1Icon: {
    left: 123,
    width: 60,
    height: 54,
  },
  removebgPreview1Icon1: {
    top: 783,
    left: 217,
    width: 52,
    height: 37,
    position: "absolute",
  },
  removebgPreview1Icon2: {
    top: 771,
    left: 3,
    width: 109,
    height: 61,
    position: "absolute",
  },
  profile: {
    top: 2,
    left: 94,
    position: "absolute",
  },
  iconlylightarrowLeft: {
    width: 22,
    left: 0,
    top: 0,
  },
  profileParent: {
    top: 78,
    left: 26,
    width: 248,
  },
  august172023: {
    top: 140,
    left: 20,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 19,
    position: "absolute",
  },
  removebgPreview3Icon: {
    left: 303,
    width: 61,
    height: 43,
  },
  notificationChild: {
    width: 385,
    height: 4,
  },
  july62023: {
    top: 301,
    left: 16,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  image4Icon: {
    left: 12,
    width: 122,
    height: 95,
  },
  notification: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Notification2;

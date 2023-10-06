import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Event1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.event}>
      <Image
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <View style={[styles.profileParent, styles.profileLayout]}>
        <Text style={[styles.profile, styles.profileFlexBox]}>Vaccine</Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left1.png")}
        />
      </View>
      <Image
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Pressable
        style={[styles.profileGroup, styles.profileLayout]}
        onPress={() => navigation.navigate("Notification1")}
      >
        <Text style={[styles.profile1, styles.profileFlexBox]}>Events</Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left1.png")}
        />
      </Pressable>
      <Image
        style={[styles.eventChild, styles.eventPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-18882.png")}
      />
      <Pressable
        style={[styles.editModifyIcoEditPencilIc, styles.editLayout]}
        onPress={() => navigation.navigate("AddEvents")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/4394390267-editmodifyicoeditpenciliconpngtransparent-1.png")}
        />
      </Pressable>
      <View style={styles.changeEmailAddress}>
        <View style={[styles.rectangle, styles.iconLayout]} />
        <Text style={[styles.changeEmailAddress1, styles.profileFlexBox]}>
          Remove
        </Text>
      </View>
      <Text style={[styles.higalaayFestival, styles.eventDetailsLayout]}>
        Higalaay Festival
      </Text>
      <Text style={styles.description}>Description:</Text>
      <Text style={[styles.time, styles.timeTypo]}>Time:</Text>
      <Text style={[styles.date, styles.timeTypo]}>Date:</Text>
      <Text style={[styles.address, styles.timeTypo]}>Address:</Text>
      <Text style={[styles.activities, styles.timeTypo]}>Activities:</Text>
      <Text style={[styles.text, styles.textFlexBox]}>8:00</Text>
      <Text style={[styles.august172023, styles.textFlexBox]}>
        August 17, 2023
      </Text>
      <Text style={[styles.limketkaiAtrium, styles.fashionShowLayout]}>
        Limketkai Atrium
      </Text>
      <Text style={[styles.fashionShow, styles.fashionShowLayout]}>
        Fashion Show
      </Text>
      <Text style={styles.theEventIs}>
        The Event is free for all spectator and everyone can come with their
        dogs. Its an opportunity to watch the fashion show or enjoy the
        entertainment
      </Text>
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Pressable
        style={[styles.image2, styles.editLayout]}
        onPress={() => navigation.navigate("AddEvents")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </Pressable>
      <Image
        style={[styles.eventItem, styles.eventPosition]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
      <Text style={[styles.eventDetails, styles.eventDetailsLayout]}>
        Event Details
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundPic3IconPosition: {
    left: 0,
    top: 0,
  },
  profileLayout: {
    height: 22,
    position: "absolute",
  },
  profileFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  eventPosition: {
    width: 389,
    left: 0,
    position: "absolute",
  },
  editLayout: {
    height: 38,
    width: 36,
    top: 115,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  eventDetailsLayout: {
    height: 21,
    width: 202,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 19,
    position: "absolute",
  },
  timeTypo: {
    left: 25,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 19,
    position: "absolute",
  },
  textFlexBox: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 19,
    position: "absolute",
  },
  fashionShowLayout: {
    height: 16,
    width: 219,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 19,
    position: "absolute",
  },
  backgroundPic3Icon: {
    width: 390,
    height: 111,
    position: "absolute",
  },
  profile: {
    left: 119,
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_8xl,
    top: 2,
    textAlign: "center",
  },
  iconlylightarrowLeft: {
    width: 22,
    left: 0,
    top: 0,
  },
  profileParent: {
    width: 224,
    left: 26,
    top: 78,
    height: 22,
  },
  profile1: {
    left: 127,
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_8xl,
    top: 2,
    textAlign: "center",
  },
  profileGroup: {
    width: 215,
    left: 26,
    top: 78,
    height: 22,
  },
  eventChild: {
    top: 111,
    height: 733,
  },
  editModifyIcoEditPencilIc: {
    left: 296,
  },
  rectangle: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorFirebrick,
    position: "absolute",
  },
  changeEmailAddress1: {
    marginTop: -8.5,
    width: "58.82%",
    top: "50%",
    left: "20.59%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.colorWhite,
    opacity: 0.91,
  },
  changeEmailAddress: {
    height: "6.52%",
    width: "43.59%",
    top: "87.8%",
    right: "27.18%",
    bottom: "5.69%",
    left: "29.23%",
    position: "absolute",
    overflow: "hidden",
  },
  higalaayFestival: {
    top: 269,
    left: 94,
  },
  description: {
    top: 459,
    left: 16,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 19,
    position: "absolute",
  },
  time: {
    top: 351,
  },
  date: {
    top: 329,
  },
  address: {
    top: 371,
  },
  activities: {
    top: 391,
  },
  text: {
    top: 350,
    left: 114,
    width: 96,
  },
  august172023: {
    top: 330,
    left: 95,
    width: 133,
  },
  limketkaiAtrium: {
    left: 58,
    top: 371,
  },
  fashionShow: {
    top: 393,
    left: 61,
  },
  theEventIs: {
    top: 473,
    left: 8,
    textAlign: "left",
    width: 386,
    height: 99,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    lineHeight: 19,
    position: "absolute",
  },
  image2Icon: {
    top: 171,
    left: 135,
    width: 114,
    height: 89,
    position: "absolute",
  },
  image2: {
    left: 342,
  },
  eventItem: {
    top: 162,
    height: 2,
  },
  eventDetails: {
    top: 140,
    left: -19,
  },
  event: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Event1;

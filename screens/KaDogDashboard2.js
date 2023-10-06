import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const KaDogDashboard2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.kaDogDashboard}>
      <Image
        style={[styles.image1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
      <View style={[styles.profileWrapper, styles.profileWrapperPosition]}>
        <Text style={styles.profile}>Ka-Dog Events</Text>
      </View>
      <Image
        style={[styles.backgroundPic2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-2.png")}
      />
      <Image
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Text style={[styles.kaDog, styles.textTypo2]}>Ka-Dog</Text>
      <Image
        style={[
          styles.iphoneXstatusBarsstatusBa,
          styles.backgroundPic3IconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/iphone-xstatus-barsstatus-bar-black.png")}
      />
      <View style={styles.kaDogDashboardChild} />
      <View style={[styles.kaDogDashboardItem, styles.dogPosition]} />
      <View style={[styles.kaDogDashboardInner, styles.dogPosition]} />
      <View style={styles.rectangleView} />
      <View style={[styles.kaDogDashboardChild1, styles.dogChildLayout]} />
      <Text style={[styles.text, styles.textTypo1]}>113</Text>
      <View style={[styles.kaDogDashboardChild2, styles.dogChildLayout]} />
      <Text style={[styles.text1, styles.textTypo1]}>300</Text>
      <View style={styles.kaDogDashboardChild3} />
      <Text style={[styles.totalParticipants, styles.totalTypo]}>
        TOTAL PARTICIPANTS
      </Text>
      <Text style={[styles.totalMembers, styles.totalTypo]}>TOTAL MEMBERS</Text>
      <Text style={[styles.text2, styles.textTypo]}>51/100</Text>
      <Text style={[styles.text3, styles.textTypo]}>92/100</Text>
      <Text style={[styles.text4, styles.textTypo]}>92/100</Text>
      <Text style={[styles.text5, styles.textTypo]}>89/100</Text>
      <Text style={[styles.totalOrganizers, styles.totalTypo]}>
        TOTAL ORGANIZERS
      </Text>
      <Text style={[styles.text6, styles.textTypo1]}>{`10
`}</Text>
      <Text style={[styles.participants, styles.participantsTypo]}>
        Participants
      </Text>
      <Text style={[styles.participants1, styles.participantsTypo]}>
        Participants
      </Text>
      <Text style={[styles.participants2, styles.participantsTypo]}>
        Participants
      </Text>
      <Text style={[styles.participants3, styles.participantsTypo]}>
        Participants
      </Text>
      <Image
        style={[styles.removebgPreview1Icon, styles.removebgIconPosition]}
        contentFit="cover"
        source={require("../assets/1removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon1, styles.vaccinePosition]}
        contentFit="cover"
        source={require("../assets/2removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon2, styles.removebgIconPosition]}
        contentFit="cover"
        source={require("../assets/3removebgpreview-1.png")}
      />
      <Text style={[styles.petBlessing, styles.textTypo1]}>Pet Blessing</Text>
      <Text style={[styles.seeMore, styles.seeLayout]}>See More</Text>
      <Text style={[styles.funMatch, styles.funMatchPosition]}>Fun Match</Text>
      <Text style={[styles.seeMore1, styles.funMatchPosition]}>See More</Text>
      <Text style={[styles.parade, styles.paradePosition]}>Parade</Text>
      <Text style={[styles.seeMore2, styles.paradePosition]}>See More</Text>
      <Text style={[styles.seeMore3, styles.seePosition]}>See More</Text>
      <Text style={[styles.fashionShow, styles.textTypo1]}>Fashion Show</Text>
      <Image
        style={styles.removebgPreview1Icon3}
        contentFit="cover"
        source={require("../assets/4removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon4, styles.profileWrapperPosition]}
        contentFit="cover"
        source={require("../assets/5removebgpreview-1.png")}
      />
      <Image
        style={[styles.image1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
      <View style={[styles.profileWrapper, styles.profileWrapperPosition]}>
        <Text style={styles.profile}>Ka-Dog Events</Text>
      </View>
      <Image
        style={[styles.backgroundPic2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-2.png")}
      />
      <Image
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Text style={[styles.kaDog, styles.textTypo2]}>Ka-Dog</Text>
      <View style={styles.kaDogDashboardChild} />
      <View style={[styles.kaDogDashboardItem, styles.dogPosition]} />
      <View style={[styles.kaDogDashboardInner, styles.dogPosition]} />
      <View style={styles.rectangleView} />
      <View style={[styles.kaDogDashboardChild1, styles.dogChildLayout]} />
      <Text style={[styles.text, styles.textTypo1]}>113</Text>
      <View style={[styles.kaDogDashboardChild2, styles.dogChildLayout]} />
      <Text style={[styles.text1, styles.textTypo1]}>300</Text>
      <View style={styles.kaDogDashboardChild3} />
      <Text style={[styles.totalParticipants, styles.totalTypo]}>
        TOTAL PARTICIPANTS
      </Text>
      <Text style={[styles.totalMembers, styles.totalTypo]}>TOTAL MEMBERS</Text>
      <Text style={[styles.text2, styles.textTypo]}>51/100</Text>
      <Text style={[styles.text3, styles.textTypo]}>92/100</Text>
      <Text style={[styles.text4, styles.textTypo]}>92/100</Text>
      <Text style={[styles.text5, styles.textTypo]}>89/100</Text>
      <Text style={[styles.totalOrganizers, styles.totalTypo]}>
        TOTAL VACCINATION
      </Text>
      <Text style={[styles.text6, styles.textTypo1]}>{`10
`}</Text>
      <Text style={[styles.participants, styles.participantsTypo]}>
        Participants
      </Text>
      <Text style={[styles.participants1, styles.participantsTypo]}>
        Participants
      </Text>
      <Text style={[styles.participants2, styles.participantsTypo]}>
        Participants
      </Text>
      <Text style={[styles.participants3, styles.participantsTypo]}>
        Participants
      </Text>
      <Pressable
        style={[styles.removebgPreview1Icon, styles.removebgIconPosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/1removebgpreview-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.removebgPreview1Icon1, styles.vaccinePosition]}
        onPress={() => navigation.navigate("Notification2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/2removebgpreview-1.png")}
        />
      </Pressable>
      <Text style={[styles.petBlessing, styles.textTypo1]}>Pet Blessing</Text>
      <Text style={[styles.seeMore, styles.seeLayout]}>See More</Text>
      <Text style={[styles.funMatch, styles.funMatchPosition]}>Fun Match</Text>
      <Text style={[styles.seeMore1, styles.funMatchPosition]}>See More</Text>
      <Text style={[styles.parade, styles.paradePosition]}>Parade</Text>
      <Text style={[styles.seeMore2, styles.paradePosition]}>See More</Text>
      <Pressable
        style={styles.seePosition}
        onPress={() => navigation.navigate("KaDogEventList")}
      >
        <Text style={[styles.seeMore8, styles.seeLayout]}>See More</Text>
      </Pressable>
      <Text style={[styles.fashionShow, styles.textTypo1]}>Fashion Show</Text>
      <Image
        style={styles.removebgPreview1Icon3}
        contentFit="cover"
        source={require("../assets/4removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon4, styles.profileWrapperPosition]}
        contentFit="cover"
        source={require("../assets/5removebgpreview-1.png")}
      />
      <Pressable
        style={[styles.stopCovid19VaccineVaccine, styles.vaccinePosition]}
        onPress={() => navigation.navigate("Vaccine1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/stopcovid19vaccinevaccineicon-149152679removebgpreview-2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  profileWrapperPosition: {
    left: 23,
    position: "absolute",
  },
  backgroundPic3IconPosition: {
    top: 0,
    width: 390,
    left: 0,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  dogPosition: {
    width: 353,
    left: 13,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  dogChildLayout: {
    height: 65,
    width: 76,
    top: 621,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  totalTypo: {
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo: {
    height: 13,
    width: 82,
    left: 260,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  participantsTypo: {
    height: 27,
    width: 200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  removebgIconPosition: {
    top: 783,
    position: "absolute",
  },
  vaccinePosition: {
    top: 778,
    position: "absolute",
  },
  seeLayout: {
    height: 12,
    width: 91,
    color: Color.colorDeepskyblue_200,
    fontSize: FontSize.size_xs,
  },
  funMatchPosition: {
    top: 365,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  paradePosition: {
    top: 265,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  seePosition: {
    top: 173,
    left: 290,
    position: "absolute",
  },
  image1Icon: {
    top: 111,
    height: 649,
  },
  profile: {
    fontSize: FontSize.size_8xl,
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    textAlign: "center",
    color: Color.colorBlack,
    top: 0,
    left: 0,
    position: "absolute",
  },
  profileWrapper: {
    top: 125,
    width: 191,
    height: 19,
  },
  backgroundPic2Icon: {
    top: 760,
    height: 85,
  },
  backgroundPic3Icon: {
    height: 111,
  },
  kaDog: {
    top: 52,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    left: 151,
    position: "absolute",
  },
  iphoneXstatusBarsstatusBa: {
    height: 44,
  },
  kaDogDashboardChild: {
    top: 159,
    height: 93,
    width: 351,
    backgroundColor: Color.colorGray_300,
    left: 15,
    position: "absolute",
  },
  kaDogDashboardItem: {
    top: 260,
    height: 83,
  },
  kaDogDashboardInner: {
    top: 355,
    height: 101,
  },
  rectangleView: {
    top: 470,
    height: 89,
    left: 13,
    width: 351,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  kaDogDashboardChild1: {
    left: 33,
  },
  text: {
    top: 638,
    left: 54,
    width: 33,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  kaDogDashboardChild2: {
    left: 151,
  },
  text1: {
    top: 637,
    left: 170,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  kaDogDashboardChild3: {
    left: 260,
    height: 65,
    width: 76,
    top: 621,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  totalParticipants: {
    left: 36,
    width: 79,
    height: 22,
    top: 664,
    fontSize: FontSize.size_5xs,
  },
  totalMembers: {
    top: 673,
    left: 155,
  },
  text2: {
    top: 215,
  },
  text3: {
    top: 526,
  },
  text4: {
    top: 419,
  },
  text5: {
    top: 317,
  },
  totalOrganizers: {
    left: 262,
    width: 71,
    height: 15,
    top: 664,
    fontSize: FontSize.size_5xs,
  },
  text6: {
    top: 636,
    left: 286,
    width: 41,
    height: 25,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  participants: {
    top: 214,
    left: 27,
    height: 27,
    width: 200,
  },
  participants1: {
    top: 316,
    left: 26,
  },
  participants2: {
    left: 27,
    height: 27,
    width: 200,
    top: 419,
  },
  participants3: {
    top: 531,
    left: 27,
    height: 27,
    width: 200,
  },
  removebgPreview1Icon: {
    left: 298,
    width: 61,
    height: 43,
  },
  removebgPreview1Icon1: {
    left: 123,
    width: 60,
    height: 54,
  },
  removebgPreview1Icon2: {
    left: 217,
    width: 52,
    height: 37,
  },
  petBlessing: {
    top: 477,
    left: 15,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  seeMore: {
    top: 474,
    left: 290,
    height: 12,
    width: 91,
    color: Color.colorDeepskyblue_200,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  funMatch: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    left: 15,
  },
  seeMore1: {
    height: 12,
    width: 91,
    color: Color.colorDeepskyblue_200,
    fontSize: FontSize.size_xs,
    left: 290,
  },
  parade: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    left: 15,
  },
  seeMore2: {
    height: 12,
    width: 91,
    color: Color.colorDeepskyblue_200,
    fontSize: FontSize.size_xs,
    left: 290,
  },
  seeMore3: {
    height: 12,
    width: 91,
    color: Color.colorDeepskyblue_200,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  fashionShow: {
    top: 166,
    width: 132,
    height: 14,
    left: 15,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  removebgPreview1Icon3: {
    top: 771,
    left: 3,
    width: 109,
    height: 61,
    position: "absolute",
  },
  removebgPreview1Icon4: {
    top: 49,
    width: 58,
    height: 42,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  seeMore8: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  stopCovid19VaccineVaccine: {
    left: 208,
    width: 66,
    height: 41,
  },
  kaDogDashboard: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default KaDogDashboard2;

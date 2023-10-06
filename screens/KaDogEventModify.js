import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const KaDogEventModify = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.kaDogEventModify}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <View style={[styles.profileWrapper, styles.profileWrapperPosition]}>
        <Text style={styles.profile}>Ka-Dog Events</Text>
      </View>
      <Image
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Text style={[styles.kaDog, styles.kaDogTypo]}>Ka-Dog</Text>
      <Image
        style={[
          styles.iphoneXstatusBarsstatusBa,
          styles.backgroundPic3IconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/iphone-xstatus-barsstatus-bar-black.png")}
      />
      <View style={styles.kaDogEventModifyChild} />
      <View style={[styles.kaDogEventModifyItem, styles.dogPosition]} />
      <View style={[styles.kaDogEventModifyInner, styles.dogPosition]} />
      <View style={styles.rectangleView} />
      <View style={[styles.kaDogEventModifyChild1, styles.dogChildLayout1]} />
      <Text style={[styles.text, styles.textTypo3]}>113</Text>
      <View style={[styles.kaDogEventModifyChild2, styles.dogChildLayout1]} />
      <Text style={[styles.text1, styles.textTypo3]}>300</Text>
      <View style={[styles.kaDogEventModifyChild3, styles.dogChildLayout1]} />
      <Text style={[styles.totalParticipants, styles.dogNameAndLayout]}>
        TOTAL PARTICIPANTS
      </Text>
      <Text style={[styles.totalMembers, styles.removeTypo]}>
        TOTAL MEMBERS
      </Text>
      <Text style={[styles.text2, styles.textTypo2]}>51/100</Text>
      <Text style={[styles.text3, styles.textTypo2]}>92/100</Text>
      <Text style={[styles.text4, styles.textTypo2]}>92/100</Text>
      <Text style={[styles.text5, styles.textTypo2]}>89/100</Text>
      <Text style={styles.totalOrganizers}>TOTAL ORGANIZERS</Text>
      <Text style={[styles.text6, styles.textTypo3]}>{`10
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
      <Text style={[styles.petBlessing, styles.textTypo3]}>Pet Blessing</Text>
      <Text style={[styles.seeMore, styles.seeLayout]}>See More</Text>
      <Text style={[styles.funMatch, styles.textTypo3]}>Fun Match</Text>
      <Text style={[styles.seeMore1, styles.seeLayout]}>See More</Text>
      <Text style={[styles.parade, styles.textTypo3]}>Parade</Text>
      <Text style={[styles.seeMore2, styles.seeLayout]}>See More</Text>
      <Text style={[styles.seeMore3, styles.removePosition]}>See More</Text>
      <Text style={[styles.fashionShow, styles.textTypo3]}>Fashion Show</Text>
      <Image
        style={[styles.removebgPreview1Icon, styles.profileWrapperPosition]}
        contentFit="cover"
        source={require("../assets/5removebgpreview-1.png")}
      />
      <View style={[styles.profileWrapper, styles.profileWrapperPosition]}>
        <Text style={styles.profile}>Ka-Dog Events</Text>
      </View>
      <Image
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Text style={[styles.kaDog, styles.kaDogTypo]}>Ka-Dog</Text>
      <View style={styles.kaDogEventModifyChild} />
      <View style={[styles.kaDogEventModifyItem, styles.dogPosition]} />
      <View style={[styles.kaDogEventModifyInner, styles.dogPosition]} />
      <View style={styles.rectangleView} />
      <View style={[styles.kaDogEventModifyChild1, styles.dogChildLayout1]} />
      <Text style={[styles.text, styles.textTypo3]}>113</Text>
      <View style={[styles.kaDogEventModifyChild3, styles.dogChildLayout1]} />
      <Text style={[styles.totalParticipants, styles.dogNameAndLayout]}>
        TOTAL PARTICIPANTS
      </Text>
      <Text style={[styles.text2, styles.textTypo2]}>51/100</Text>
      <Text style={[styles.text3, styles.textTypo2]}>92/100</Text>
      <Text style={[styles.text4, styles.textTypo2]}>92/100</Text>
      <Text style={[styles.text5, styles.textTypo2]}>89/100</Text>
      <Text style={styles.totalOrganizers}>TOTAL ORGANIZERS</Text>
      <Text style={[styles.text6, styles.textTypo3]}>{`10
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
      <Text style={[styles.petBlessing, styles.textTypo3]}>Pet Blessing</Text>
      <Text style={[styles.seeMore, styles.seeLayout]}>See More</Text>
      <Text style={[styles.funMatch, styles.textTypo3]}>Fun Match</Text>
      <Text style={[styles.seeMore1, styles.seeLayout]}>See More</Text>
      <Text style={[styles.parade, styles.textTypo3]}>Parade</Text>
      <Text style={[styles.seeMore2, styles.seeLayout]}>See More</Text>
      <Text style={[styles.seeMore3, styles.removePosition]}>See More</Text>
      <Text style={[styles.fashionShow, styles.textTypo3]}>Fashion Show</Text>
      <Pressable
        style={[styles.removebgPreview1Icon, styles.profileWrapperPosition]}
        onPress={() => navigation.navigate("KaDogDashboard")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/5removebgpreview-1.png")}
        />
      </Pressable>
      <View style={styles.kaDogEventModifyChild10} />
      <View style={styles.kaDogEventModifyChild11} />
      <View
        style={[styles.kaDogEventModifyChild12, styles.dogChildShadowBox]}
      />
      <View
        style={[styles.kaDogEventModifyChild13, styles.dogChildShadowBox]}
      />
      <Text style={[styles.s, styles.sTypo]}>S</Text>
      <View style={styles.closeButton}>
        <View style={styles.rectangle} />
        <Text style={[styles.refresh, styles.refreshPosition]}>Refresh</Text>
      </View>
      <Text style={[styles.fashionShow2, styles.refreshPosition]}>
        Fashion Show
      </Text>
      <Text style={[styles.pleaseRefreshThe, styles.refreshPosition]}>
        Please refresh the page to see the update status.
      </Text>
      <Text style={[styles.handler, styles.kaDogTypo]}>{`Handler: `}</Text>
      <Text style={[styles.size, styles.sizePosition]}>{`Size: `}</Text>
      <Text style={[styles.dogNameAnd, styles.sizePosition]}>
        Dog Name and Dog breed:
      </Text>
      <Text style={[styles.cassandra, styles.limLayout]}>Cassandra</Text>
      <Text style={[styles.s1, styles.sTypo]}>S</Text>
      <Text style={[styles.s2, styles.sTypo]}>S</Text>
      <Text style={[styles.s3, styles.sTypo]}>S</Text>
      <Text style={[styles.l, styles.sTypo]}>L</Text>
      <Text style={[styles.l1, styles.sTypo]}>L</Text>
      <Text style={[styles.l2, styles.l2Typo]}>L</Text>
      <Text style={[styles.m, styles.sTypo]}>M</Text>
      <Text style={[styles.m1, styles.sTypo]}>M</Text>
      <Text style={[styles.lim, styles.l2Typo]}>Lim</Text>
      <Text style={[styles.speed, styles.limLayout]}>Speed</Text>
      <Text style={[styles.plushie, styles.limLayout]}>Plushie</Text>
      <Text style={[styles.lacre, styles.limLayout]}>Lacre</Text>
      <Text style={[styles.benedict, styles.limLayout]}>Benedict</Text>
      <Text style={[styles.alexander, styles.limLayout]}>Alexander</Text>
      <Text style={[styles.paul, styles.limLayout]}>Paul</Text>
      <Text style={[styles.rebecca, styles.limLayout]}>Rebecca</Text>
      <Text style={styles.text13}>1</Text>
      <Text style={[styles.text14, styles.textTypo1]}>2</Text>
      <Text style={[styles.text15, styles.textTypo1]}>3</Text>
      <Text style={[styles.text16, styles.textTypo]}>4</Text>
      <Text style={[styles.text17, styles.textTypo]}>5</Text>
      <Text style={[styles.text18, styles.textTypo]}>6</Text>
      <Text style={[styles.text19, styles.textTypo1]}>7</Text>
      <Text style={[styles.text20, styles.textTypo1]}>8</Text>
      <Text style={[styles.text21, styles.textTypo1]}>9</Text>
      <Text style={styles.numberReserved}>{`Number Reserved: `}</Text>
      <Image
        style={[styles.lineIcon, styles.dogChildLayout]}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={[styles.kaDogEventModifyChild14, styles.dogChildLayout]}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={[styles.kaDogEventModifyChild15, styles.dogChildLayout]}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={[styles.kaDogEventModifyChild16, styles.dogChildLayout]}
        contentFit="cover"
        source={require("../assets/line-8.png")}
      />
      <Image
        style={styles.kaDogEventModifyChild17}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
      <Image
        style={[styles.pngClipartComputerIconsSym, styles.pngLayout]}
        contentFit="cover"
        source={require("../assets/pngclipartcomputericonssymboldeletestrademarklogo-3.png")}
      />
      <Image
        style={[styles.pngClipartComputerIconsSym1, styles.pngLayout]}
        contentFit="cover"
        source={require("../assets/pngclipartcomputericonssymboldeletestrademarklogo-3.png")}
      />
      <Image
        style={[styles.pngClipartComputerIconsSym2, styles.pngLayout]}
        contentFit="cover"
        source={require("../assets/pngclipartcomputericonssymboldeletestrademarklogo-3.png")}
      />
      <Image
        style={[styles.pngClipartComputerIconsSym3, styles.pngLayout]}
        contentFit="cover"
        source={require("../assets/pngclipartcomputericonssymboldeletestrademarklogo-3.png")}
      />
      <Image
        style={[styles.pngClipartComputerIconsSym4, styles.pngLayout]}
        contentFit="cover"
        source={require("../assets/pngclipartcomputericonssymboldeletestrademarklogo-3.png")}
      />
      <Image
        style={[styles.pngClipartComputerIconsSym5, styles.pngLayout]}
        contentFit="cover"
        source={require("../assets/pngclipartcomputericonssymboldeletestrademarklogo-3.png")}
      />
      <Image
        style={[styles.pngClipartComputerIconsSym6, styles.pngLayout]}
        contentFit="cover"
        source={require("../assets/pngclipartcomputericonssymboldeletestrademarklogo-3.png")}
      />
      <Image
        style={[styles.pngClipartComputerIconsSym7, styles.pngLayout]}
        contentFit="cover"
        source={require("../assets/pngclipartcomputericonssymboldeletestrademarklogo-3.png")}
      />
      <Image
        style={[styles.pngClipartComputerIconsSym8, styles.pngLayout]}
        contentFit="cover"
        source={require("../assets/pngclipartcomputericonssymboldeletestrademarklogo-3.png")}
      />
      <Text style={[styles.remove, styles.removePosition]}>Remove</Text>
      <Text style={[styles.gilgoldenRetreiver, styles.lizcorgiTypo]}>
        Gil/Golden Retreiver
      </Text>
      <Text style={[styles.jimborzoi, styles.lizcorgiTypo]}>Jim/Borzoi</Text>
      <Text style={[styles.shishibaInu, styles.shishibaInuTypo]}>
        Shi/Shiba Inu
      </Text>
      <Text style={[styles.lizcorgi, styles.lizcorgiTypo]}>Liz/Corgi</Text>
      <Text style={[styles.mitzsheltie, styles.lizcorgiTypo]}>
        Mitz/Sheltie
      </Text>
      <Text style={[styles.zeeshihTzu, styles.lizcorgiTypo]}>Zee/Shih Tzu</Text>
      <Text style={[styles.gilpitbull, styles.lizcorgiTypo]}>Gil/Pitbull</Text>
      <Text style={[styles.readachsund, styles.lizcorgiTypo]}>
        Rea/Dachsund
      </Text>
      <Text style={[styles.remchihuahua, styles.shishibaInuTypo]}>
        Rem/Chihuahua
      </Text>
      <Image
        style={styles.addbtnRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/addbtnremovebgpreview-21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  kaDogTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  dogPosition: {
    width: 353,
    left: 13,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  dogChildLayout1: {
    height: 65,
    width: 76,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  textTypo3: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  dogNameAndLayout: {
    height: 22,
    fontSize: FontSize.size_5xs,
  },
  removeTypo: {
    fontSize: FontSize.size_5xs,
    color: Color.colorBlack,
  },
  textTypo2: {
    height: 13,
    width: 82,
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
  seeLayout: {
    height: 12,
    color: Color.colorDeepskyblue_200,
    fontSize: FontSize.size_xs,
    width: 91,
  },
  removePosition: {
    left: 346,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  dogChildShadowBox: {
    height: 340,
    width: 366,
    backgroundColor: Color.colorGainsboro_400,
    marginLeft: -180,
    borderWidth: 1,
    borderColor: Color.colorLightgray_400,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  sTypo: {
    width: 18,
    fontSize: FontSize.size_smi,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  refreshPosition: {
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  sizePosition: {
    top: 234,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  limLayout: {
    width: 99,
    left: 20,
  },
  l2Typo: {
    top: 372,
    fontSize: FontSize.size_smi,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo1: {
    right: 216,
    width: 16,
    fontSize: FontSize.size_smi,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo: {
    right: 217,
    width: 16,
    fontSize: FontSize.size_smi,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  dogChildLayout: {
    height: 341,
    width: 3,
    position: "absolute",
  },
  pngLayout: {
    width: 17,
    left: 355,
    height: 15,
    position: "absolute",
  },
  lizcorgiTypo: {
    width: 73,
    fontSize: FontSize.size_4xs,
    left: 277,
    height: 6,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  shishibaInuTypo: {
    left: 275,
    width: 73,
    fontSize: FontSize.size_4xs,
    height: 6,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  image1Icon: {
    height: 735,
    width: 390,
    left: 0,
    top: 109,
    position: "absolute",
  },
  profile: {
    fontSize: FontSize.size_8xl,
    lineHeight: 19,
    fontFamily: FontFamily.dMSansBold,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
    top: 0,
    left: 0,
    position: "absolute",
  },
  profileWrapper: {
    top: 125,
    width: 191,
    height: 19,
  },
  backgroundPic3Icon: {
    height: 111,
  },
  kaDog: {
    top: 52,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    left: 151,
    textAlign: "left",
  },
  iphoneXstatusBarsstatusBa: {
    height: 44,
  },
  kaDogEventModifyChild: {
    top: 157,
    height: 93,
    width: 351,
    backgroundColor: Color.colorGray_300,
    left: 15,
    position: "absolute",
  },
  kaDogEventModifyItem: {
    top: 258,
    height: 83,
  },
  kaDogEventModifyInner: {
    top: 353,
    height: 101,
  },
  rectangleView: {
    top: 468,
    height: 89,
    left: 13,
    width: 351,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  kaDogEventModifyChild1: {
    left: 33,
    top: 621,
    height: 65,
    width: 76,
  },
  text: {
    left: 54,
    width: 33,
    top: 638,
    fontSize: FontSize.size_xl,
  },
  kaDogEventModifyChild2: {
    top: 622,
    left: 148,
  },
  text1: {
    left: 170,
    top: 638,
    fontSize: FontSize.size_xl,
  },
  kaDogEventModifyChild3: {
    left: 260,
    top: 621,
    height: 65,
    width: 76,
  },
  totalParticipants: {
    left: 36,
    width: 79,
    top: 664,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  totalMembers: {
    top: 673,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: 151,
  },
  text2: {
    top: 215,
    left: 316,
    height: 13,
    width: 82,
  },
  text3: {
    top: 526,
    left: 316,
    height: 13,
    width: 82,
  },
  text4: {
    top: 417,
    left: 260,
  },
  text5: {
    top: 315,
    left: 260,
  },
  totalOrganizers: {
    left: 262,
    width: 71,
    height: 15,
    fontSize: FontSize.size_5xs,
    top: 664,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  text6: {
    top: 636,
    left: 286,
    width: 41,
    height: 25,
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
    top: 419,
    left: 27,
    height: 27,
    width: 200,
  },
  participants3: {
    top: 531,
    left: 27,
    height: 27,
    width: 200,
  },
  petBlessing: {
    top: 477,
    left: 15,
    fontSize: FontSize.size_xl,
  },
  seeMore: {
    left: 290,
    height: 12,
    color: Color.colorDeepskyblue_200,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    top: 472,
  },
  funMatch: {
    top: 365,
    left: 15,
    fontSize: FontSize.size_xl,
  },
  seeMore1: {
    top: 363,
    left: 290,
    height: 12,
    color: Color.colorDeepskyblue_200,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  parade: {
    top: 265,
    left: 15,
    fontSize: FontSize.size_xl,
  },
  seeMore2: {
    top: 263,
    left: 290,
    height: 12,
    color: Color.colorDeepskyblue_200,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  seeMore3: {
    top: 173,
    height: 12,
    color: Color.colorDeepskyblue_200,
    fontSize: FontSize.size_xs,
    width: 91,
  },
  fashionShow: {
    top: 166,
    width: 132,
    height: 14,
    left: 15,
    fontSize: FontSize.size_xl,
  },
  removebgPreview1Icon: {
    top: 49,
    width: 58,
    height: 42,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  kaDogEventModifyChild10: {
    left: -5,
    backgroundColor: Color.colorGray_200,
    width: 402,
    height: 621,
    top: 109,
    position: "absolute",
  },
  kaDogEventModifyChild11: {
    marginTop: -261,
    marginLeft: -192,
    backgroundColor: Color.colorDeepskyblue_300,
    width: 382,
    height: 579,
    borderWidth: 1,
    borderColor: Color.colorLightgray_400,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
    top: "50%",
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  kaDogEventModifyChild12: {
    marginTop: -190,
  },
  kaDogEventModifyChild13: {
    marginTop: -200,
  },
  s: {
    top: 396,
    left: 234,
    width: 18,
  },
  rectangle: {
    height: "106.25%",
    width: "101.6%",
    top: "-3.12%",
    right: "-0.8%",
    bottom: "-3.12%",
    left: "-0.8%",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorAliceblue,
    borderColor: Color.colorSilver,
    borderWidth: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  refresh: {
    height: "50.84%",
    marginLeft: -35.5,
    top: "12.5%",
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    width: 70,
    color: Color.colorBlack,
  },
  closeButton: {
    height: "3.79%",
    width: "32.05%",
    top: "80.33%",
    right: "34.36%",
    bottom: "15.88%",
    left: "33.59%",
    position: "absolute",
  },
  fashionShow2: {
    marginLeft: -103,
    top: 192,
    fontFamily: FontFamily.interBold,
    width: 207,
    height: 14,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    left: "50%",
  },
  pleaseRefreshThe: {
    marginLeft: -95,
    top: 596,
    color: Color.colorYellow,
    width: 183,
    fontSize: FontSize.size_base,
    height: 14,
    fontFamily: FontFamily.interRegular,
    left: "50%",
  },
  handler: {
    top: 236,
    left: 38,
    width: 66,
    height: 28,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  size: {
    left: 225,
    width: 47,
    height: 28,
    fontSize: FontSize.size_base,
  },
  dogNameAnd: {
    left: 280,
    width: 64,
    height: 22,
    fontSize: FontSize.size_5xs,
  },
  cassandra: {
    top: 272,
    fontSize: FontSize.size_smi,
    left: 20,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  s1: {
    top: 270,
    left: 234,
    width: 18,
  },
  s2: {
    top: 293,
    left: 234,
    width: 18,
  },
  s3: {
    left: 234,
    width: 18,
    top: 472,
  },
  l: {
    left: 235,
    top: 322,
  },
  l1: {
    top: 446,
    left: 237,
  },
  l2: {
    width: 12,
    left: 235,
  },
  m: {
    top: 346,
    left: 234,
    width: 18,
  },
  m1: {
    top: 422,
    left: 234,
    width: 18,
  },
  lim: {
    width: 99,
    left: 20,
  },
  speed: {
    top: 397,
    fontSize: FontSize.size_smi,
    left: 20,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  plushie: {
    top: 423,
    fontSize: FontSize.size_smi,
    left: 20,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  lacre: {
    top: 444,
    fontSize: FontSize.size_smi,
    left: 20,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  benedict: {
    top: 471,
    fontSize: FontSize.size_smi,
    left: 20,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  alexander: {
    top: 299,
    fontSize: FontSize.size_smi,
    left: 20,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  paul: {
    top: 325,
    fontSize: FontSize.size_smi,
    left: 20,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  rebecca: {
    top: 349,
    fontSize: FontSize.size_smi,
    left: 20,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  text13: {
    top: 271,
    right: 214,
    width: 16,
    fontSize: FontSize.size_smi,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  text14: {
    top: 294,
  },
  text15: {
    top: 322,
  },
  text16: {
    top: 347,
  },
  text17: {
    top: 370,
  },
  text18: {
    top: 397,
  },
  text19: {
    top: 423,
  },
  text20: {
    top: 444,
  },
  text21: {
    top: 472,
  },
  numberReserved: {
    left: 141,
    fontSize: 11,
    top: 233,
    height: 28,
    width: 91,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  lineIcon: {
    left: 112,
    top: 232,
    height: 341,
    width: 3,
  },
  kaDogEventModifyChild14: {
    left: 205,
    top: 232,
    height: 341,
    width: 3,
  },
  kaDogEventModifyChild15: {
    top: 231,
    left: 270,
  },
  kaDogEventModifyChild16: {
    left: 341,
    top: 233,
  },
  kaDogEventModifyChild17: {
    top: 254,
    height: 6,
    width: 366,
    left: 15,
    position: "absolute",
  },
  pngClipartComputerIconsSym: {
    top: 269,
  },
  pngClipartComputerIconsSym1: {
    top: 294,
  },
  pngClipartComputerIconsSym2: {
    top: 323,
  },
  pngClipartComputerIconsSym3: {
    top: 346,
  },
  pngClipartComputerIconsSym4: {
    top: 371,
  },
  pngClipartComputerIconsSym5: {
    top: 397,
  },
  pngClipartComputerIconsSym6: {
    top: 423,
  },
  pngClipartComputerIconsSym7: {
    top: 448,
  },
  pngClipartComputerIconsSym8: {
    top: 474,
  },
  remove: {
    top: 241,
    fontSize: FontSize.size_5xs,
    color: Color.colorBlack,
  },
  gilgoldenRetreiver: {
    top: 318,
  },
  jimborzoi: {
    top: 373,
  },
  shishibaInu: {
    top: 423,
  },
  lizcorgi: {
    top: 474,
  },
  mitzsheltie: {
    top: 346,
  },
  zeeshihTzu: {
    top: 397,
  },
  gilpitbull: {
    top: 448,
  },
  readachsund: {
    top: 294,
  },
  remchihuahua: {
    top: 272,
  },
  addbtnRemovebgPreview1Icon: {
    top: 185,
    left: 337,
    width: 35,
    height: 36,
    position: "absolute",
  },
  kaDogEventModify: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default KaDogEventModify;

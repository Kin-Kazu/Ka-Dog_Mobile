import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const VaccineAvailVaccination = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vaccineAvailVaccination}>
      <Image
        style={styles.image1IconPosition}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
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
      <Pressable
        style={[styles.profileParent, styles.profileParentLayout]}
        onPress={() => navigation.navigate("Vaccine1")}
      >
        <Text style={styles.profile}>Vaccine</Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileParentLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left1.png")}
        />
      </Pressable>
      <View style={styles.vaccineAvailVaccinationChild} />
      <View
        style={[styles.vaccineAvailVaccinationItem, styles.image1IconPosition]}
      />
      <Text style={styles.seeMore}>See More</Text>
      <Text style={[styles.antiRabies, styles.antiTypo]}>Anti Rabies</Text>
      <Text style={[styles.available, styles.textTypo]}>Available</Text>
      <Text style={[styles.text, styles.textTypo]}>100/100</Text>
      <View
        style={[styles.vaccineAvailVaccinationInner, styles.rectangleBorder]}
      />
      <Text style={[styles.pleaseRefreshThe, styles.antiRabiesTypo]}>
        Please refresh the page to see the update status.
      </Text>
      <Text style={[styles.antiRabiesLeft, styles.wouldYouLikeClr]}>
        Anti Rabies Left:
      </Text>
      <Text style={[styles.wouldYouLike, styles.wouldYouLikeClr]}>
        Would you like to avail vaccination today?
      </Text>
      <Text style={[styles.text1, styles.text1Typo]}>100/100</Text>
      <Text style={[styles.availVaccination, styles.text1Typo]}>
        Avail Vaccination
      </Text>
      <Pressable
        style={[styles.closeButton, styles.closePosition]}
        onPress={() => navigation.navigate("Vaccine1")}
      >
        <View style={[styles.rectangle, styles.rectangleBorder]} />
        <Text style={styles.close}>Close</Text>
      </Pressable>
      <Pressable
        style={[styles.closeButton1, styles.closePosition]}
        onPress={() => navigation.navigate("VaccineAvailVaccination2")}
      >
        <View style={[styles.rectangle, styles.rectangleBorder]} />
        <Text style={styles.close}>Yes</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundIconLayout: {
    width: 390,
    position: "absolute",
  },
  backgroundPic3IconPosition: {
    top: 0,
    left: 0,
  },
  profileParentLayout: {
    height: 22,
    position: "absolute",
  },
  image1IconPosition: {
    height: 649,
    top: 111,
    width: 390,
    left: 0,
    position: "absolute",
  },
  antiTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  textTypo: {
    top: 200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  antiRabiesTypo: {
    fontFamily: FontFamily.interRegular,
    height: 14,
    position: "absolute",
  },
  wouldYouLikeClr: {
    color: Color.colorWhite,
    height: 14,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    left: "50%",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  closePosition: {
    bottom: "20.38%",
    top: "75.83%",
    width: "32.05%",
    height: "3.79%",
    position: "absolute",
  },
  backgroundPic2Icon: {
    top: 760,
    height: 85,
    left: 0,
    width: 390,
  },
  backgroundPic3Icon: {
    height: 111,
    width: 390,
    position: "absolute",
  },
  profile: {
    top: 2,
    left: 119,
    fontSize: FontSize.size_8xl,
    lineHeight: 19,
    fontFamily: FontFamily.dMSansBold,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
    position: "absolute",
  },
  iconlylightarrowLeft: {
    width: 22,
    top: 0,
    left: 0,
  },
  profileParent: {
    top: 78,
    left: 26,
    width: 224,
  },
  vaccineAvailVaccinationChild: {
    top: 153,
    left: 19,
    backgroundColor: Color.colorGray_300,
    width: 351,
    height: 93,
    position: "absolute",
  },
  vaccineAvailVaccinationItem: {
    backgroundColor: Color.colorGray_200,
  },
  seeMore: {
    top: 166,
    left: 275,
    fontSize: FontSize.size_xs,
    color: Color.colorDeepskyblue_200,
    width: 91,
    height: 12,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  antiRabies: {
    top: 159,
    left: 33,
    width: 132,
    height: 14,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    color: Color.colorBlack,
  },
  available: {
    left: 45,
    width: 200,
    height: 27,
  },
  text: {
    left: 268,
    width: 82,
    height: 13,
  },
  vaccineAvailVaccinationInner: {
    marginTop: -275,
    marginLeft: -173,
    top: "50%",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorDeepskyblue_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderColor: Color.colorLightgray_400,
    borderWidth: 1,
    width: 347,
    height: 550,
    left: "50%",
  },
  pleaseRefreshThe: {
    marginLeft: -91,
    top: 540,
    fontSize: FontSize.size_base,
    color: Color.colorYellow,
    width: 183,
    left: "50%",
    height: 14,
    textAlign: "center",
  },
  antiRabiesLeft: {
    top: 249,
    left: 40,
    width: 296,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  wouldYouLike: {
    marginLeft: -123,
    top: 415,
    fontSize: FontSize.size_3xl,
    width: 247,
    left: "50%",
    textAlign: "center",
  },
  text1: {
    marginLeft: -85,
    top: 311,
    fontSize: FontSize.size_18xl,
    width: 170,
    height: 30,
  },
  availVaccination: {
    marginLeft: -103,
    top: 177,
    fontSize: FontSize.size_5xl,
    width: 207,
    height: 14,
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
  },
  close: {
    height: "50.84%",
    marginLeft: -35.5,
    top: "12.5%",
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    width: 70,
    left: "50%",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  closeButton: {
    right: "53.85%",
    left: "14.1%",
  },
  closeButton1: {
    right: "12.05%",
    left: "55.9%",
  },
  vaccineAvailVaccination: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default VaccineAvailVaccination;

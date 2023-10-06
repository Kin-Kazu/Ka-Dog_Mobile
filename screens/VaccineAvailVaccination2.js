import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const VaccineAvailVaccination2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vaccineAvailVaccination2}>
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
        onPress={() => navigation.navigate("VaccineAvailVaccination")}
      >
        <Text style={styles.profile}>Vaccine</Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileParentLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left1.png")}
        />
      </Pressable>
      <View style={styles.vaccineAvailVaccination2Child} />
      <View
        style={[styles.vaccineAvailVaccination2Item, styles.image1IconPosition]}
      />
      <Text style={styles.seeMore}>See More</Text>
      <Text style={[styles.antiRabies, styles.antiRabiesLayout]}>
        Anti Rabies
      </Text>
      <Text style={[styles.available, styles.textTypo]}>Available</Text>
      <Text style={[styles.text, styles.textTypo]}>100/100</Text>
      <View
        style={[
          styles.vaccineAvailVaccination2Inner,
          styles.rectangleViewShadowBox,
        ]}
      />
      <Text style={[styles.pleaseRefreshThe, styles.antiRabiesLayout]}>
        Please refresh the page to see the update status.
      </Text>
      <Text style={[styles.antiRabiesLeft, styles.text1Clr]}>
        Anti Rabies Left:
      </Text>
      <Text style={[styles.wouldYouLike, styles.text1Clr]}>
        Would you like to avail vaccination today?
      </Text>
      <Text style={[styles.text1, styles.text1Typo]}>100/100</Text>
      <Text style={[styles.availVaccination, styles.pleaseInputYourPosition]}>
        Avail Vaccination
      </Text>
      <View style={[styles.closeButton, styles.closePosition]}>
        <View style={styles.rectangle} />
        <Text style={styles.close}>Close</Text>
      </View>
      <View style={[styles.closeButton1, styles.closePosition]}>
        <View style={styles.rectangle} />
        <Text style={styles.close}>Avail</Text>
      </View>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Pressable
        style={styles.closeButton2}
        onPress={() => navigation.navigate("KaDogDashboard2")}
      >
        <View style={styles.rectangle} />
        <Text style={styles.close}>Ok</Text>
      </Pressable>
      <Text style={[styles.pleaseInputYour, styles.pleaseInputYourPosition]}>
        Please input your avail in Anti-Rabies.
      </Text>
      <View style={styles.vaccineAvailVaccination2Child1} />
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
  antiRabiesLayout: {
    height: 14,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo: {
    top: 200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleViewShadowBox: {
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
    backgroundColor: Color.colorDeepskyblue_300,
    borderRadius: Border.br_6xl,
    top: "50%",
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  text1Clr: {
    color: Color.colorWhite,
    height: 14,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
  },
  pleaseInputYourPosition: {
    width: 207,
    fontSize: FontSize.size_5xl,
    marginLeft: -103,
    color: Color.colorWhite,
    left: "50%",
    height: 14,
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
  vaccineAvailVaccination2Child: {
    top: 153,
    left: 19,
    backgroundColor: Color.colorGray_300,
    width: 351,
    height: 93,
    position: "absolute",
  },
  vaccineAvailVaccination2Item: {
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
    fontSize: FontSize.size_xl,
    textAlign: "left",
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
  vaccineAvailVaccination2Inner: {
    marginTop: -275,
    marginLeft: -173,
    width: 347,
    height: 550,
  },
  pleaseRefreshThe: {
    marginLeft: -91,
    top: 540,
    fontSize: FontSize.size_base,
    color: Color.colorYellow,
    width: 183,
    left: "50%",
    textAlign: "center",
  },
  antiRabiesLeft: {
    top: 249,
    left: 40,
    width: 296,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  wouldYouLike: {
    marginLeft: -123,
    top: 415,
    fontSize: FontSize.size_3xl,
    width: 247,
    left: "50%",
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  text1: {
    marginLeft: -85,
    top: 299,
    fontSize: FontSize.size_18xl,
    width: 170,
    color: Color.colorWhite,
    height: 14,
    position: "absolute",
    left: "50%",
  },
  availVaccination: {
    top: 177,
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
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
  rectangleView: {
    marginTop: -173,
    marginLeft: -147,
    width: 302,
    height: 437,
  },
  closeButton2: {
    top: "73.46%",
    right: "33.85%",
    bottom: "22.75%",
    left: "34.1%",
    width: "32.05%",
    height: "3.79%",
    position: "absolute",
  },
  pleaseInputYour: {
    top: 305,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  vaccineAvailVaccination2Child1: {
    marginLeft: -65,
    top: 456,
    backgroundColor: Color.colorGainsboro_300,
    width: 130,
    height: 62,
    left: "50%",
    position: "absolute",
  },
  vaccineAvailVaccination2: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default VaccineAvailVaccination2;

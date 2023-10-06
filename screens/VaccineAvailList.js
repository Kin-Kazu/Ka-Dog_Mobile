import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const VaccineAvailList = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vaccineAvailList}>
      <Image
        style={[styles.backgroundPic5Icon, styles.backgroundIconLayout]}
        contentFit="cover"
        source={require("../assets/backgroundpic-2.png")}
      />
      <Image
        style={[styles.backgroundPic7Icon, styles.backgroundPic7IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-2.png")}
      />
      <Pressable
        style={[styles.profileParent, styles.profileParentLayout]}
        onPress={() => navigation.navigate("Vaccine")}
      >
        <Text style={[styles.profile, styles.editFlexBox]}>Vaccine</Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileParentLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left1.png")}
        />
      </Pressable>
      <Image
        style={[styles.backgroundPic4Icon, styles.backgroundIconLayout]}
        contentFit="cover"
        source={require("../assets/backgroundpic-2.png")}
      />
      <Image
        style={[styles.backgroundPic4Icon, styles.backgroundIconLayout]}
        contentFit="cover"
        source={require("../assets/backgroundpic-2.png")}
      />
      <View
        style={[styles.vaccineAvailListChild, styles.rectangleViewLayout]}
      />
      <View style={[styles.vaccineAvailListItem, styles.vaccinePosition]} />
      <View style={[styles.vaccineAvailListInner, styles.vaccinePosition]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>1</Text>
      <Text style={[styles.text2, styles.textTypo]}>1</Text>
      <Text style={[styles.text3, styles.textTypo]}>1</Text>
      <Text style={[styles.text4, styles.textTypo]}>1</Text>
      <Text style={[styles.name, styles.availTypo]}>{`Name: `}</Text>
      <Text
        style={[styles.numberOfAvail, styles.availTypo]}
      >{`Number of Avail: `}</Text>
      <Text style={[styles.melusine, styles.rubyLayout]}>Melusine</Text>
      <Text style={[styles.magellan, styles.rubyLayout]}>Magellan</Text>
      <Text style={[styles.cassandra, styles.melusineTypo]}>Cassandra</Text>
      <Text style={[styles.antiRabiesVaccineAvail, styles.availTypo]}>
        Anti-Rabies Vaccine Avail List
      </Text>
      <Text style={[styles.bato, styles.batoTypo]}>Bato</Text>
      <Text style={[styles.ruby, styles.batoTypo]}>Ruby</Text>
      <View style={styles.editButton}>
        <View style={styles.rectangle} />
        <Text style={[styles.edit, styles.editFlexBox]}>Edit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundIconLayout: {
    height: 85,
    width: 390,
    position: "absolute",
  },
  backgroundPic7IconPosition: {
    top: 0,
    left: 0,
  },
  profileParentLayout: {
    height: 22,
    position: "absolute",
  },
  editFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  rectangleViewLayout: {
    opacity: 0.8,
    height: 31,
    backgroundColor: Color.colorLightgray_100,
    width: 390,
    position: "absolute",
  },
  vaccinePosition: {
    left: 1,
    opacity: 0.8,
    height: 31,
    backgroundColor: Color.colorLightgray_100,
    width: 390,
    position: "absolute",
  },
  textTypo: {
    height: 20,
    width: 17,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: "absolute",
  },
  availTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: "absolute",
  },
  rubyLayout: {
    height: 26,
    width: 85,
  },
  melusineTypo: {
    left: 27,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: "absolute",
  },
  batoTypo: {
    left: 28,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: "absolute",
  },
  backgroundPic5Icon: {
    top: 758,
    left: 0,
  },
  backgroundPic7Icon: {
    height: 85,
    width: 390,
    position: "absolute",
  },
  profile: {
    top: 2,
    left: 119,
    fontSize: FontSize.size_8xl,
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  iconlylightarrowLeft: {
    width: 22,
    top: 0,
    left: 0,
  },
  profileParent: {
    top: 55,
    left: 16,
    width: 224,
  },
  backgroundPic4Icon: {
    top: 759,
    left: 0,
  },
  vaccineAvailListChild: {
    top: 110,
    left: 0,
  },
  vaccineAvailListItem: {
    top: 194,
  },
  vaccineAvailListInner: {
    top: 248,
  },
  rectangleView: {
    top: 304,
    left: -1,
  },
  text: {
    left: 194,
    height: 20,
    width: 17,
    top: 203,
  },
  text1: {
    top: 228,
    left: 194,
    height: 20,
    width: 17,
  },
  text2: {
    top: 252,
    left: 195,
  },
  text3: {
    top: 280,
    left: 194,
    height: 20,
    width: 17,
  },
  text4: {
    top: 308,
    left: 194,
    height: 20,
    width: 17,
  },
  name: {
    top: 161,
    left: 34,
    width: 61,
    height: 28,
  },
  numberOfAvail: {
    top: 163,
    left: 147,
    width: 130,
    height: 28,
  },
  melusine: {
    left: 27,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: "absolute",
    top: 228,
  },
  magellan: {
    top: 254,
    left: 27,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: "absolute",
  },
  cassandra: {
    height: 28,
    top: 203,
    width: 390,
  },
  antiRabiesVaccineAvail: {
    marginLeft: -113,
    top: 116,
    left: "50%",
    width: 227,
    height: 25,
  },
  bato: {
    height: 28,
    top: 280,
    width: 390,
  },
  ruby: {
    top: 305,
    height: 26,
    width: 85,
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
  edit: {
    height: "34.55%",
    width: "42.94%",
    top: "32.73%",
    left: "30.59%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.colorWhite,
  },
  editButton: {
    height: "6.52%",
    width: "43.59%",
    top: "91.71%",
    right: "28.21%",
    bottom: "1.78%",
    left: "28.21%",
    position: "absolute",
  },
  vaccineAvailList: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default VaccineAvailList;

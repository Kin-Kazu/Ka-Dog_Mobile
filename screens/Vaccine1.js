import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Vaccine1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vaccine}>
      <Image
        style={[styles.image1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
      <Image
        style={[styles.backgroundPic2Icon, styles.iconLayout]}
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
        onPress={() => navigation.navigate("KaDogEventList")}
      >
        <Text style={styles.profile}>Vaccine</Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileParentLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vaccineChild}
        onPress={() => navigation.navigate("VaccineAvailVaccination")}
      />
      <Text style={styles.antiRabies}>Anti Rabies</Text>
      <Text style={[styles.available, styles.textTypo]}>Available</Text>
      <Text style={[styles.text, styles.textTypo]}>100/100</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
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
  textTypo: {
    top: 200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  image1Icon: {
    top: 111,
    height: 649,
    left: 0,
    width: 390,
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
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    textAlign: "center",
    color: Color.colorBlack,
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
  vaccineChild: {
    top: 153,
    left: 19,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorGray_300,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_300,
    borderWidth: 1.5,
    width: 351,
    height: 93,
    position: "absolute",
  },
  antiRabies: {
    top: 159,
    left: 33,
    width: 132,
    height: 14,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    position: "absolute",
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
  vaccine: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Vaccine1;

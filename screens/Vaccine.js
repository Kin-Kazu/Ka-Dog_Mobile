import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Vaccine = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vaccine}>
      <Image
        style={[styles.image1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
      <Image
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Pressable
        style={[styles.profileParent, styles.profileParentLayout]}
        onPress={() => navigation.navigate("KaDogDashboard")}
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
        onPress={() => navigation.navigate("VaccineAvailList")}
      />
      <Text style={styles.antiRabies}>Anti Rabies</Text>
      <Text style={[styles.available, styles.textTypo]}>Available</Text>
      <Text style={[styles.text, styles.textTypo]}>100/100</Text>
      <Pressable
        style={styles.image3}
        onPress={() => navigation.navigate("VaccinationAdd")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </Pressable>
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
    height: 733,
    left: 0,
    width: 390,
    top: 111,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  image3: {
    left: 332,
    width: 36,
    height: 38,
    top: 111,
    position: "absolute",
  },
  vaccine: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Vaccine;

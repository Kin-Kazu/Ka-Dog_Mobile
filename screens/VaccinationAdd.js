import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Form from "../components/Property1Form";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const VaccinationAdd = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vaccinationAdd}>
      <Image
        style={styles.vaccinationAddChild}
        contentFit="cover"
        source={require("../assets/rectangle-18882.png")}
      />
      <Image
        style={styles.backgroundPic3Icon}
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
        style={styles.backgroundPic3Icon}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Pressable
        style={[styles.profileGroup, styles.profileLayout]}
        onPress={() => navigation.navigate("Vaccine")}
      >
        <Text style={[styles.profile1, styles.profileFlexBox]}>
          Vaccination
        </Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left1.png")}
        />
      </Pressable>
      <Text style={[styles.quantity, styles.dateTypo]}>Quantity</Text>
      <Text style={[styles.date, styles.dateTypo]}>Date</Text>
      <Text style={[styles.time, styles.dateTypo]}>Time</Text>
      <Pressable
        style={styles.closeButton}
        onPress={() => navigation.navigate("Vaccine")}
      >
        <View style={styles.rectangle} />
        <Text style={[styles.confirm, styles.profileFlexBox]}>Confirm</Text>
      </Pressable>
      <Text style={styles.vaccine}>Vaccine</Text>
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop={169}
        property1FormLeft={92}
        property1FormWidth={261}
        property1FormHeight={27}
        property1FormRight="unset"
        property1FormBottom="unset"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop={218}
        property1FormLeft={92}
        property1FormWidth={261}
        property1FormHeight={27}
        property1FormRight="unset"
        property1FormBottom="unset"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop={274}
        property1FormLeft={92}
        property1FormWidth={261}
        property1FormHeight={27}
        property1FormRight="unset"
        property1FormBottom="unset"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop={318}
        property1FormLeft={92}
        property1FormWidth={261}
        property1FormHeight={27}
        property1FormRight="unset"
        property1FormBottom="unset"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    height: 22,
    position: "absolute",
  },
  profileFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  dateTypo: {
    height: 28,
    left: 14,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    width: 390,
    position: "absolute",
  },
  vaccinationAddChild: {
    top: 111,
    width: 389,
    height: 733,
    left: 0,
    position: "absolute",
  },
  backgroundPic3Icon: {
    height: 111,
    width: 390,
    top: 0,
    left: 0,
    position: "absolute",
  },
  profile: {
    left: 119,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_8xl,
    top: 2,
    color: Color.colorBlack,
  },
  iconlylightarrowLeft: {
    width: 22,
    height: 22,
    top: 0,
    left: 0,
  },
  profileParent: {
    width: 224,
    left: 26,
    top: 78,
    height: 22,
  },
  profile1: {
    left: 93,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_8xl,
    top: 2,
    color: Color.colorBlack,
  },
  profileGroup: {
    width: 249,
    left: 26,
    top: 78,
    height: 22,
  },
  quantity: {
    top: 221,
  },
  date: {
    top: 279,
  },
  time: {
    top: 326,
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
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderWidth: 2,
    position: "absolute",
  },
  confirm: {
    marginLeft: -35.5,
    top: "12.5%",
    left: "50%",
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    width: 70,
  },
  closeButton: {
    height: "3.79%",
    width: "32.05%",
    top: "67.3%",
    right: "33.33%",
    bottom: "28.91%",
    left: "34.62%",
    position: "absolute",
  },
  vaccine: {
    top: 173,
    left: 11,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: "absolute",
  },
  vaccinationAdd: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default VaccinationAdd;

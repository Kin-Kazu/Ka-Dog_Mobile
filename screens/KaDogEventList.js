import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer1 from "../components/FormContainer1";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const KaDogEventList = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.kaDogEventList}
      resizeMode="cover"
      source={require("../assets/kadogeventlist.png")}
    >
      <Image
        style={[styles.backgroundPic2Icon, styles.tablePosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-2.png")}
      />
      <Image
        style={[styles.backgroundPic3Icon, styles.profilePosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Text style={styles.kaDog}>Ka-Dog</Text>
      <Image
        style={[styles.iphoneXstatusBarsstatusBa, styles.profilePosition]}
        contentFit="cover"
        source={require("../assets/iphone-xstatus-barsstatus-bar-black.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon, styles.removebgIconPosition]}
        contentFit="cover"
        source={require("../assets/1removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon1, styles.removebgLayout]}
        contentFit="cover"
        source={require("../assets/2removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon2, styles.removebgIconPosition]}
        contentFit="cover"
        source={require("../assets/3removebgpreview-1.png")}
      />
      <Image
        style={styles.removebgPreview1Icon3}
        contentFit="cover"
        source={require("../assets/4removebgpreview-1.png")}
      />
      <Image
        style={styles.removebgPreview1Icon4}
        contentFit="cover"
        source={require("../assets/5removebgpreview-1.png")}
      />
      <Image
        style={[styles.backgroundPic2Icon, styles.tablePosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-2.png")}
      />
      <Image
        style={[styles.backgroundPic3Icon, styles.profilePosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Text style={styles.kaDog}>Ka-Dog</Text>
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
        style={styles.removebgPreview1Icon3}
        onPress={() => navigation.navigate("KaDogDashboard2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/4removebgpreview-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.removebgPreview1Icon4}
        onPress={() => navigation.navigate("KaDogDashboard2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/5removebgpreview-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.removebgPreview3, styles.removebgLayout]}
        onPress={() => navigation.navigate("Notification2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/2removebgpreview-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.stopCovid19VaccineVaccine}
        onPress={() => navigation.navigate("Vaccine1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/stopcovid19vaccinevaccineicon-149152679removebgpreview-2.png")}
        />
      </Pressable>
      <View style={[styles.table, styles.tablePosition]}>
        <FormContainer1 />
      </View>
      <View style={styles.profileWrapper}>
        <Text style={[styles.profile, styles.profilePosition]}>
          Fashion Show
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  tablePosition: {
    left: 0,
    position: "absolute",
  },
  profilePosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  removebgIconPosition: {
    top: 783,
    position: "absolute",
  },
  removebgLayout: {
    height: 54,
    width: 60,
    position: "absolute",
  },
  backgroundPic2Icon: {
    top: 760,
    height: 85,
    width: 390,
  },
  backgroundPic3Icon: {
    height: 111,
    width: 390,
  },
  kaDog: {
    top: 52,
    left: 151,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  iphoneXstatusBarsstatusBa: {
    height: 44,
    width: 390,
  },
  removebgPreview1Icon: {
    left: 298,
    width: 61,
    height: 43,
  },
  removebgPreview1Icon1: {
    top: 778,
    left: 123,
  },
  removebgPreview1Icon2: {
    left: 217,
    width: 52,
    height: 37,
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
    left: 23,
    width: 58,
    height: 42,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  removebgPreview3: {
    left: 119,
    top: 779,
  },
  stopCovid19VaccineVaccine: {
    left: 208,
    top: 781,
    width: 66,
    height: 41,
    position: "absolute",
  },
  table: {
    top: 175,
    height: 516,
    flexDirection: "row",
  },
  profile: {
    fontSize: FontSize.size_13xl,
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  profileWrapper: {
    top: 136,
    left: 16,
    width: 218,
    height: 19,
    position: "absolute",
  },
  kaDogEventList: {
    borderRadius: Border.br_30xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default KaDogEventList;

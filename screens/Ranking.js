import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer from "../components/FormContainer";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Ranking = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.ranking}>
      <Image
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Text style={styles.kaDog}>Ka-Dog</Text>
      <Image
        style={[
          styles.iphoneXstatusBarsstatusBa,
          styles.backgroundPic3IconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/iphone-xstatus-barsstatus-bar-black.png")}
      />
      <Image
        style={styles.removebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/5removebgpreview-1.png")}
      />
      <Image
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Text style={styles.kaDog}>Ka-Dog</Text>
      <Pressable
        style={styles.removebgPreview1Icon}
        onPress={() => navigation.navigate("KaDogDashboard1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/5removebgpreview-1.png")}
        />
      </Pressable>
      <FormContainer />
      <View style={styles.profileWrapper}>
        <Text style={styles.profile}>Ranking</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundPic3IconPosition: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  backgroundPic3Icon: {
    height: 111,
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
  },
  removebgPreview1Icon: {
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
  profile: {
    fontSize: FontSize.size_13xl,
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  profileWrapper: {
    top: 131,
    left: 133,
    width: 127,
    height: 19,
    position: "absolute",
  },
  ranking: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Ranking;

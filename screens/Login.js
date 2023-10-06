import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Form from "../components/Property1Form";
import SizeSmallSelectedNo from "../components/SizeSmallSelectedNo";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login1}>
      <Image
        style={[styles.login1Child, styles.login1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-1911.png")}
      />
      <Image
        style={[styles.login1Item, styles.login1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-192.png")}
      />
      <Image
        style={styles.logokadogRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/logokadogremovebgpreview-11.png")}
      />
      <View style={styles.welcomeMsg}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.bySigningInContainer}>
          <Text style={styles.bySigningIn}>
            By signing in you are agreeing our
          </Text>
          <Text>
            <Text style={styles.termAndPrivacy}>Term and privacy polic</Text>
            <Text style={styles.y}>y</Text>
          </Text>
        </Text>
      </View>
      <Property1Form
        text="Username"
        property1FormPosition="absolute"
        property1FormBorderRadius={10}
        property1FormBorderColor="unset"
        property1FormTop={336}
        property1FormLeft={42}
        property1FormWidth={266}
        property1FormHeight={40}
        property1FormRight="unset"
        property1FormBottom="unset"
        property1FormBackgroundColor="#fff"
        property1FormZIndex={0}
        property1FormBorderStyle="unset"
      />
      <Property1Form
        text="Password"
        property1FormPosition="absolute"
        property1FormBorderRadius={10}
        property1FormBorderColor="unset"
        property1FormTop={391}
        property1FormLeft={42}
        property1FormWidth={266}
        property1FormHeight={40}
        property1FormRight="unset"
        property1FormBottom="unset"
        property1FormBackgroundColor="#fff"
        property1FormZIndex={0}
        property1FormBorderStyle="unset"
      />
      <View style={[styles.rememberMe, styles.orLayout]}>
        <Image
          style={styles.checkmarkIcon}
          contentFit="cover"
          source={require("../assets/checkmark.png")}
        />
        <Text style={styles.rememberMe1}>Remember me?</Text>
      </View>
      <Text style={[styles.forgotPassword, styles.or2Typo]}>
        Forgot Password?
      </Text>
      <SizeSmallSelectedNo
        s="Login"
        sizeSmallSelectedNoPosition="absolute"
        sizeSmallSelectedNoBorderRadius={20}
        sizeSmallSelectedNoBorderStyle="unset"
        sizeSmallSelectedNoBorderColor="unset"
        sizeSmallSelectedNoTop={576}
        sizeSmallSelectedNoLeft={47}
        sizeSmallSelectedNoBackgroundColor="#0386d0"
        sizeSmallSelectedNoWidth={266}
        sizeSmallSelectedNoPadding={10}
        sizeSmallSelectedNoMarginLeft="unset"
        sFontFamily="Inter-Bold"
        sColor="#fff"
        sFontWeight="700"
      />
      <View style={[styles.or, styles.orLayout]}>
        <View style={styles.orChild} />
        <View style={[styles.or1, styles.orLayout]}>
          <Text style={[styles.or2, styles.or2Typo]}>or</Text>
        </View>
      </View>
      <SizeSmallSelectedNo
        s="Register"
        sizeSmallSelectedNoPosition="absolute"
        sizeSmallSelectedNoBorderRadius={20}
        sizeSmallSelectedNoBorderStyle="solid"
        sizeSmallSelectedNoBorderColor="#0386d0"
        sizeSmallSelectedNoBorderWidth={1}
        sizeSmallSelectedNoTop={666}
        sizeSmallSelectedNoLeft={47}
        sizeSmallSelectedNoBackgroundColor="unset"
        sizeSmallSelectedNoWidth={266}
        sizeSmallSelectedNoPadding={10}
        sizeSmallSelectedNoMarginLeft="unset"
        sFontFamily="Inter-Bold"
        sColor="#0386d0"
        sFontWeight="700"
        onButtonPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  login1Layout: {
    width: 352,
    position: "absolute",
  },
  orLayout: {
    height: 15,
    position: "absolute",
  },
  or2Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  login1Child: {
    top: 17,
    left: 4,
    height: 535,
  },
  login1Item: {
    top: 474,
    left: 5,
    height: 305,
  },
  logokadogRemovebgPreview1Icon: {
    top: 48,
    left: 98,
    width: 164,
    height: 138,
    position: "absolute",
  },
  welcome: {
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.fontdinerSwankyRegular,
    width: 242,
    height: 35,
    textAlign: "center",
    color: Color.colorBlack,
  },
  bySigningIn: {
    color: Color.colorDimgray,
  },
  termAndPrivacy: {
    color: Color.colorSteelblue_100,
  },
  y: {
    color: Color.colorCornflowerblue,
  },
  bySigningInContainer: {
    fontSize: FontSize.size_base,
    lineHeight: 29,
    width: 244,
    height: 66,
    marginTop: -12,
    fontFamily: FontFamily.arapeyRegular,
    textAlign: "center",
  },
  welcomeMsg: {
    top: 217,
    left: 58,
    position: "absolute",
  },
  checkmarkIcon: {
    top: 1,
    left: -1,
    width: 14,
    height: 14,
    position: "absolute",
  },
  rememberMe1: {
    left: 18,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: 0,
    fontFamily: FontFamily.arapeyRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  rememberMe: {
    top: 444,
    left: 42,
    width: 105,
  },
  forgotPassword: {
    top: 538,
    left: 211,
    color: "#2295d6",
    fontFamily: FontFamily.arapeyRegular,
  },
  orChild: {
    top: 10,
    left: 0,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 267,
    height: 1,
    position: "absolute",
  },
  or2: {
    left: 8,
    fontFamily: FontFamily.interRegular,
    top: 0,
    color: Color.colorBlack,
  },
  or1: {
    left: 114,
    backgroundColor: "#f5f5f5",
    width: 28,
    top: 0,
  },
  or: {
    top: 633,
    left: 47,
    width: 266,
  },
  login1: {
    backgroundColor: Color.colorLightblue,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Login;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Form from "../components/Property1Form";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Login1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login2}>
      <Image
        style={[styles.login2Child, styles.login2Position]}
        contentFit="cover"
        source={require("../assets/rectangle-171.png")}
      />
      <Image
        style={[styles.login2Item, styles.login2Position]}
        contentFit="cover"
        source={require("../assets/rectangle-181.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate("KaDogDashboard2")}
      >
        <View style={[styles.frameChild, styles.frameShadowBox]} />
        <Text style={[styles.login, styles.passwordTypo1]}>Login</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Register1")}
      >
        <View style={[styles.frameItem, styles.frameBorder]} />
        <Text style={[styles.register, styles.passwordTypo1]}>Register</Text>
      </Pressable>
      <View style={styles.welcomeParent}>
        <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome</Text>
        <Text style={[styles.bySigningInContainer, styles.welcomeTypo]}>
          <Text
            style={styles.bySigningIn}
          >{`By signing in you are agreeing our `}</Text>
          <Text style={styles.termAndPrivacy}>Term and privacy polic</Text>
          <Text style={styles.y}>y</Text>
        </Text>
      </View>
      <Text style={[styles.forgetPassword, styles.passwordTypo1]}>
        Forget password
      </Text>
      <View style={[styles.rememberPasswordParent, styles.groupChildLayout]}>
        <Text style={[styles.rememberPassword, styles.passwordTypo1]}>
          Remember password
        </Text>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-7.png")}
        />
      </View>
      <Image
        style={styles.login2Inner}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <View style={[styles.rectangleContainer, styles.frameLayout]}>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Text style={[styles.emailAddress, styles.passwordTypo]}>
          Email Address
        </Text>
        <Image
          style={[styles.mailIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mail.png")}
        />
        <Property1Form
          text="Username"
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={1}
          property1FormLeft={0}
          property1FormWidth={312}
          property1FormHeight={46}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#f9f9f9"
          property1FormZIndex={0}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
      </View>
      <View style={[styles.frameView, styles.frameLayout]}>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <Image
          style={[styles.lockIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/lock.png")}
        />
        <Property1Form
          text="Password"
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={0}
          property1FormLeft={0}
          property1FormWidth={312}
          property1FormHeight={46}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#f9f9f9"
          property1FormZIndex={0}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
      </View>
      <Image
        style={styles.logokadogRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/logokadogremovebgpreview-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  login2Position: {
    width: 402,
    left: 7,
    position: "absolute",
  },
  rectangleLayout: {
    height: 45,
    width: 151,
    top: 601,
    position: "absolute",
  },
  frameShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_8xl,
    height: 45,
    width: 151,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  passwordTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.arapeyRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frameBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  welcomeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.arapeyRegular,
  },
  groupChildLayout: {
    height: 25,
    position: "absolute",
  },
  frameLayout: {
    height: 47,
    width: 312,
    position: "absolute",
  },
  passwordTypo: {
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_mini,
    top: 12,
    textAlign: "left",
    fontFamily: FontFamily.arapeyRegular,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  login2Child: {
    top: 18,
    height: 586,
  },
  login2Item: {
    top: 441,
    height: 447,
  },
  frameChild: {
    backgroundColor: Color.colorSteelblue_100,
    left: 0,
    shadowRadius: 4,
    borderRadius: Border.br_8xl,
    top: 0,
  },
  login: {
    color: Color.colorWhite,
    width: 54,
    top: 13,
    left: 54,
  },
  rectangleParent: {
    left: 54,
  },
  frameItem: {
    borderColor: Color.colorSteelblue_100,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_8xl,
    height: 45,
    width: 151,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  register: {
    left: 49,
    width: 62,
    color: Color.colorCornflowerblue,
    top: 13,
  },
  rectangleGroup: {
    left: 210,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhite,
  },
  welcome: {
    fontSize: FontSize.size_2xl,
    color: Color.colorBlack,
    width: 242,
    height: 35,
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
  },
  welcomeParent: {
    top: 212,
    left: 83,
    position: "absolute",
  },
  forgetPassword: {
    top: 558,
    left: 253,
    width: 109,
    color: Color.colorSteelblue_100,
  },
  rememberPassword: {
    left: 35,
    width: 156,
    color: Color.colorDimgray,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.arapeyRegular,
    fontSize: FontSize.size_sm,
  },
  groupChild: {
    top: 3,
    left: -2,
    borderRadius: Border.br_11xs,
    width: 28,
  },
  rememberPasswordParent: {
    top: 452,
    left: 55,
    width: 191,
  },
  login2Inner: {
    top: 1,
    left: 537,
    width: 414,
    height: 895,
    position: "absolute",
  },
  frameInner: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorLightgray_300,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  emailAddress: {
    left: 17,
  },
  mailIcon: {
    left: 276,
    top: 13,
  },
  rectangleContainer: {
    top: 320,
    left: 53,
    width: 312,
  },
  password: {
    left: 18,
  },
  lockIcon: {
    top: 11,
    left: 275,
  },
  frameView: {
    top: 385,
    left: 53,
    width: 312,
  },
  logokadogRemovebgPreview1Icon: {
    top: 28,
    left: 88,
    width: 234,
    height: 184,
    position: "absolute",
  },
  login2: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorDeepskyblue_100,
    shadowRadius: 23,
    elevation: 23,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default Login1;

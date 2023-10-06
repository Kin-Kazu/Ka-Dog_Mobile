import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserContainer from "../components/UserContainer";
import Property1Form from "../components/Property1Form";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Judge = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.judge, styles.judgeLayout]}>
      <Image
        style={[styles.judgeChild, styles.judgePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <Image
        style={[styles.judgeItem, styles.judgePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <View style={[styles.rectangleParent, styles.frameViewLayout]}>
        <Pressable
          style={[styles.frameChild, styles.frameLayout]}
          onPress={() => navigation.navigate("KaDogDashboard1")}
        />
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </View>
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
      <View style={styles.rememberPasswordParent}>
        <Text style={[styles.rememberPassword, styles.passwordTypo1]}>
          Remember password
        </Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/rectangle-7.png")}
        />
      </View>
      <Image
        style={styles.judgeInner}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <UserContainer />
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameItem, styles.frameItemPosition]} />
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
        style={styles.logokadogRemovebgPreview2Icon}
        contentFit="cover"
        source={require("../assets/logokadogremovebgpreview-2.png")}
      />
      <View style={[styles.admin, styles.adminShadowBox]}>
        <Image
          style={[styles.adminChild, styles.adminLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-17.png")}
        />
        <Image
          style={[styles.adminItem, styles.adminLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-18.png")}
        />
        <Pressable
          style={[styles.rectangleParent, styles.frameViewLayout]}
          onPress={() => navigation.navigate("KaDogDashboard")}
        >
          <View style={[styles.frameInner, styles.adminShadowBox]} />
          <Text style={[styles.login1, styles.loginTypo]}>Login</Text>
        </Pressable>
        <View style={[styles.frameView, styles.frameViewLayout]}>
          <View style={[styles.rectangleView, styles.frameItemPosition]} />
          <Text style={[styles.register, styles.passwordTypo1]}>Register</Text>
        </View>
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
        <View style={styles.rememberPasswordParent}>
          <Text style={[styles.rememberPassword, styles.passwordTypo1]}>
            Remember password
          </Text>
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/rectangle-7.png")}
          />
        </View>
        <Image
          style={styles.judgeInner}
          contentFit="cover"
          source={require("../assets/rectangle-10.png")}
        />
        <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
          <View style={[styles.frameItem, styles.frameItemPosition]} />
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
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.frameItem, styles.frameItemPosition]} />
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
        <Image
          style={styles.logokadogRemovebgPreview2Icon}
          contentFit="cover"
          source={require("../assets/logokadogremovebgpreview-2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  judgeLayout: {
    overflow: "hidden",
    height: 896,
    elevation: 23,
    shadowRadius: 23,
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_30xl,
  },
  judgePosition: {
    width: 402,
    left: 7,
    position: "absolute",
  },
  frameViewLayout: {
    height: 45,
    width: 151,
    top: 601,
    position: "absolute",
  },
  frameLayout: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_8xl,
    height: 45,
    width: 151,
  },
  loginTypo: {
    width: 54,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.arapeyRegular,
    fontSize: FontSize.size_sm,
    top: 13,
    position: "absolute",
  },
  welcomeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.arapeyRegular,
  },
  passwordTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.arapeyRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  rectangleLayout: {
    height: 47,
    width: 312,
  },
  frameItemPosition: {
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
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
  adminShadowBox: {
    left: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  adminLayout: {
    width: 374,
    position: "absolute",
  },
  judgeChild: {
    top: 18,
    height: 586,
  },
  judgeItem: {
    top: 441,
    height: 447,
  },
  frameChild: {
    left: 82,
    backgroundColor: Color.colorSteelblue_100,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_8xl,
    top: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  login: {
    left: 136,
  },
  rectangleParent: {
    left: 54,
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
    fontFamily: FontFamily.arapeyRegular,
    fontSize: FontSize.size_sm,
  },
  groupChild: {
    top: 3,
    left: -2,
    width: 28,
    borderRadius: Border.br_11xs,
    height: 25,
    position: "absolute",
  },
  rememberPasswordParent: {
    top: 452,
    left: 55,
    width: 191,
    height: 25,
    position: "absolute",
  },
  judgeInner: {
    top: 1,
    left: 537,
    width: 414,
    height: 895,
    position: "absolute",
  },
  frameItem: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorLightgray_300,
    height: 47,
    width: 312,
  },
  password: {
    left: 18,
  },
  lockIcon: {
    top: 11,
    left: 275,
  },
  rectangleGroup: {
    top: 385,
    left: 53,
    width: 312,
    position: "absolute",
  },
  logokadogRemovebgPreview2Icon: {
    top: 54,
    left: 91,
    width: 234,
    height: 158,
    position: "absolute",
  },
  adminChild: {
    top: 28,
    left: 21,
    height: 558,
  },
  adminItem: {
    top: 870,
    left: 395,
    height: 419,
  },
  frameInner: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_8xl,
    height: 45,
    width: 151,
    backgroundColor: Color.colorSteelblue_100,
    top: 0,
  },
  login1: {
    left: 54,
  },
  rectangleView: {
    borderColor: Color.colorSteelblue_100,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_8xl,
    height: 45,
    width: 151,
    borderWidth: 1,
    borderStyle: "solid",
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
  frameView: {
    left: 210,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhite,
  },
  groupItem: {
    top: 4,
    height: 21,
    width: 24,
    left: 0,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  emailAddress: {
    left: 17,
  },
  mailIcon: {
    left: 276,
    top: 13,
  },
  rectangleParent1: {
    top: 316,
    left: 53,
    width: 312,
    position: "absolute",
  },
  admin: {
    top: 995,
    width: 426,
    overflow: "hidden",
    height: 896,
    elevation: 23,
    shadowRadius: 23,
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_30xl,
  },
  judge: {
    flex: 1,
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default Judge;

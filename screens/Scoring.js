import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import Property1Form from "../components/Property1Form";
import { useNavigation } from "@react-navigation/native";
import FormFooter from "../components/FormFooter";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Scoring = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.scoringIcon}
      resizeMode="cover"
      source={require("../assets/scoring.png")}
    >
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.frameInner, styles.frameChildLayout]} />
        <View style={[styles.rectangleView, styles.frameChildLayout]} />
        <Image
          style={[styles.rectangleIcon, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-18828.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-18828.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-18828.png")}
        />
        <Image
          style={[styles.frameChild3, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-18828.png")}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={179}
          property1FormLeft={33}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={8}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={176}
          property1FormLeft={128}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={9}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={176}
          property1FormLeft={215}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={10}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={176}
          property1FormLeft={305}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={11}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={283}
          property1FormLeft={306}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={12}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={283}
          property1FormLeft={216}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={13}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={286}
          property1FormLeft={127}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={14}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={283}
          property1FormLeft={33}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={15}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={397}
          property1FormLeft={33}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={16}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={397}
          property1FormLeft={127}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={17}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={397}
          property1FormLeft={215}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={18}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={394}
          property1FormLeft={306}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={19}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={501}
          property1FormLeft={300}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={20}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={501}
          property1FormLeft={213}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={21}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={501}
          property1FormLeft={121}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={22}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={501}
          property1FormLeft={27}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={23}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Text style={[styles.contestant1, styles.contestantTypo1]}>
          Contestant #1
        </Text>
        <Text style={[styles.contestant2, styles.contestantTypo]}>
          Contestant #2
        </Text>
        <Text style={[styles.contestant3, styles.contestantTypo1]}>
          Contestant #3
        </Text>
        <Text style={[styles.contestant4, styles.contestantTypo]}>
          Contestant #4
        </Text>
        <Text style={[styles.contestant5, styles.contestantTypo1]}>
          Contestant #5
        </Text>
        <Text style={[styles.text, styles.textTypo7]}>1</Text>
        <Text style={[styles.text1, styles.textTypo7]}>2</Text>
        <Text style={[styles.text2, styles.textTypo7]}>4</Text>
        <Text style={[styles.text3, styles.textTypo7]}>3</Text>
        <Text style={[styles.text4, styles.textTypo6]}>1</Text>
        <Text style={[styles.text5, styles.textTypo6]}>2</Text>
        <Text style={[styles.text6, styles.textTypo6]}>4</Text>
        <Text style={[styles.text7, styles.textTypo6]}>3</Text>
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={613}
          property1FormLeft={295}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={37}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={613}
          property1FormLeft={208}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={38}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={613}
          property1FormLeft={116}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={39}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={613}
          property1FormLeft={22}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={40}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={721}
          property1FormLeft={28}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={41}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={721}
          property1FormLeft={121}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={42}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={721}
          property1FormLeft={208}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={43}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={721}
          property1FormLeft={300}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={44}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={832}
          property1FormLeft={301}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={45}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={832}
          property1FormLeft={208}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={46}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={832}
          property1FormLeft={121}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={47}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={832}
          property1FormLeft={28}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={48}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Text style={[styles.contestant6, styles.contestantTypo1]}>
          Contestant #6
        </Text>
        <Text style={[styles.text8, styles.textTypo5]}>1</Text>
        <Text style={[styles.text9, styles.textTypo5]}>2</Text>
        <Text style={[styles.text10, styles.textTypo5]}>4</Text>
        <Text style={[styles.text11, styles.textTypo5]}>3</Text>
        <Text style={[styles.contestant8, styles.contestantTypo1]}>
          Contestant #8
        </Text>
        <Text style={[styles.text12, styles.textTypo4]}>1</Text>
        <Text style={[styles.text13, styles.textTypo4]}>2</Text>
        <Text style={[styles.text14, styles.textTypo4]}>4</Text>
        <Text style={[styles.text15, styles.textTypo4]}>3</Text>
        <Text style={[styles.contestant7, styles.contestantTypo1]}>
          Contestant #7
        </Text>
        <Text style={[styles.text16, styles.textTypo3]}>1</Text>
        <Text style={[styles.text17, styles.textTypo3]}>2</Text>
        <Text style={[styles.text18, styles.textTypo3]}>4</Text>
        <Text style={[styles.text19, styles.textTypo3]}>3</Text>
        <Text style={[styles.text20, styles.textTypo2]}>1</Text>
        <Text style={[styles.text21, styles.textTypo2]}>2</Text>
        <Text style={[styles.text22, styles.textTypo2]}>4</Text>
        <Text style={[styles.text23, styles.textTypo2]}>3</Text>
        <Text style={[styles.text24, styles.textTypo1]}>1</Text>
        <Text style={[styles.text25, styles.textTypo1]}>2</Text>
        <Text style={[styles.text26, styles.textTypo1]}>4</Text>
        <Text style={[styles.text27, styles.textTypo1]}>3</Text>
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={55}
          property1FormLeft={35}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={72}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={55}
          property1FormLeft={127}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={73}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={52}
          property1FormLeft={215}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={74}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Property1Form
          property1FormPosition="absolute"
          property1FormBorderRadius={10}
          property1FormBorderColor="#b3b0b0"
          property1FormTop={52}
          property1FormLeft={304}
          property1FormWidth={29}
          property1FormHeight={22}
          property1FormRight="unset"
          property1FormBottom="unset"
          property1FormBackgroundColor="#4cb2fe"
          property1FormZIndex={75}
          property1FormBorderStyle="solid"
          property1FormBorderWidth={1}
        />
        <Text style={[styles.text28, styles.textTypo7]}>1</Text>
        <Text style={[styles.text29, styles.textTypo7]}>2</Text>
        <Text style={[styles.text30, styles.textTypo7]}>4</Text>
        <Text style={[styles.text31, styles.textTypo7]}>3</Text>
        <Text style={[styles.text32, styles.textTypo]}>1</Text>
        <Text style={[styles.text33, styles.textTypo]}>2</Text>
        <Text style={[styles.text34, styles.textTypo]}>4</Text>
        <Text style={[styles.text35, styles.textTypo]}>3</Text>
      </View>
      <Image
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Pressable
        style={[styles.profileParent, styles.profileParentLayout]}
        onPress={() => navigation.navigate("KaDogDashboard1")}
      >
        <Text style={styles.profile}>Judging</Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileParentLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left1.png")}
        />
      </Pressable>
      <FormFooter />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    marginTop: 18,
    height: 93,
    width: 351,
  },
  contestantTypo1: {
    height: 27,
    width: 200,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  contestantTypo: {
    left: 16,
    height: 27,
    width: 200,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo7: {
    height: 28,
    width: 26,
    top: 33,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo6: {
    top: 479,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo5: {
    top: 591,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo4: {
    top: 809,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo3: {
    top: 699,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo2: {
    top: 369,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo1: {
    top: 151,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo: {
    top: 258,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  backgroundPic3IconPosition: {
    left: 0,
    top: 0,
  },
  profileParentLayout: {
    height: 22,
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
    height: 93,
    width: 351,
    backgroundColor: Color.colorGray_300,
  },
  frameItem: {
    zIndex: 1,
    backgroundColor: Color.colorGray_300,
    marginTop: 18,
  },
  frameInner: {
    zIndex: 2,
    backgroundColor: Color.colorGray_300,
    marginTop: 18,
  },
  rectangleView: {
    zIndex: 3,
    backgroundColor: Color.colorGray_300,
    marginTop: 18,
  },
  rectangleIcon: {
    zIndex: 4,
  },
  frameChild1: {
    zIndex: 5,
  },
  frameChild2: {
    zIndex: 6,
  },
  frameChild3: {
    zIndex: 7,
  },
  contestant1: {
    top: 7,
    zIndex: 24,
    left: 13,
    height: 27,
    width: 200,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  contestant2: {
    zIndex: 25,
    top: 124,
  },
  contestant3: {
    top: 225,
    zIndex: 26,
    left: 13,
    height: 27,
    width: 200,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  contestant4: {
    top: 342,
    zIndex: 27,
  },
  contestant5: {
    top: 451,
    zIndex: 28,
    left: 13,
    height: 27,
    width: 200,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  text: {
    zIndex: 29,
    left: 34,
  },
  text1: {
    zIndex: 30,
    left: 128,
  },
  text2: {
    zIndex: 31,
    left: 306,
  },
  text3: {
    zIndex: 32,
    left: 216,
  },
  text4: {
    zIndex: 33,
    left: 28,
  },
  text5: {
    zIndex: 34,
    left: 122,
  },
  text6: {
    zIndex: 35,
    left: 300,
  },
  text7: {
    zIndex: 36,
    left: 210,
  },
  contestant6: {
    top: 563,
    left: 8,
    zIndex: 49,
  },
  text8: {
    left: 23,
    zIndex: 50,
  },
  text9: {
    left: 117,
    zIndex: 51,
  },
  text10: {
    left: 295,
    zIndex: 52,
  },
  text11: {
    left: 205,
    zIndex: 53,
  },
  contestant8: {
    top: 781,
    zIndex: 54,
    left: 13,
    height: 27,
    width: 200,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  text12: {
    zIndex: 55,
    left: 28,
  },
  text13: {
    zIndex: 56,
    left: 122,
  },
  text14: {
    zIndex: 57,
    left: 300,
  },
  text15: {
    zIndex: 58,
    left: 210,
  },
  contestant7: {
    top: 671,
    zIndex: 59,
    left: 13,
    height: 27,
    width: 200,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  text16: {
    zIndex: 60,
    left: 28,
  },
  text17: {
    zIndex: 61,
    left: 122,
  },
  text18: {
    zIndex: 62,
    left: 300,
  },
  text19: {
    zIndex: 63,
    left: 210,
  },
  text20: {
    zIndex: 64,
    left: 34,
  },
  text21: {
    zIndex: 65,
    left: 128,
  },
  text22: {
    zIndex: 66,
    left: 306,
  },
  text23: {
    zIndex: 67,
    left: 216,
  },
  text24: {
    zIndex: 68,
    left: 34,
  },
  text25: {
    zIndex: 69,
    left: 128,
  },
  text26: {
    zIndex: 70,
    left: 306,
  },
  text27: {
    zIndex: 71,
    left: 216,
  },
  text28: {
    zIndex: 76,
    left: 34,
  },
  text29: {
    zIndex: 77,
    left: 128,
  },
  text30: {
    zIndex: 78,
    left: 306,
  },
  text31: {
    zIndex: 79,
    left: 216,
  },
  text32: {
    left: 35,
    zIndex: 80,
  },
  text33: {
    left: 129,
    zIndex: 81,
  },
  text34: {
    left: 307,
    zIndex: 82,
  },
  text35: {
    left: 217,
    zIndex: 83,
  },
  rectangleParent: {
    left: 20,
    height: 991,
    alignItems: "flex-end",
    top: 124,
    position: "absolute",
  },
  backgroundPic3Icon: {
    width: 390,
    height: 111,
    position: "absolute",
  },
  profile: {
    top: 2,
    left: 120,
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
    left: 0,
    top: 0,
  },
  profileParent: {
    top: 78,
    left: 26,
    width: 223,
  },
  scoringIcon: {
    borderRadius: Border.br_30xl,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Scoring;

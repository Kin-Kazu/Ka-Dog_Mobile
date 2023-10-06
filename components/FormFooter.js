import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const FormFooter = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.footer, styles.footerLayout]}>
      <View style={[styles.taskbar, styles.footerLayout]}>
        <Image
          style={[styles.taskbar, styles.footerLayout]}
          contentFit="cover"
          source={require("../assets/backgroundpic-2.png")}
        />
      </View>
      <Pressable
        style={styles.editButton}
        onPress={() => navigation.navigate("Ranking")}
      >
        <View style={styles.rectangle} />
        <Text style={styles.submit}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footerLayout: {
    height: 85,
    width: 390,
    left: 0,
    position: "absolute",
  },
  taskbar: {
    top: 0,
  },
  rectangle: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSteelblue_100,
    position: "absolute",
  },
  submit: {
    height: "34.55%",
    width: "42.94%",
    top: "32.73%",
    left: "30.59%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  editButton: {
    height: "64.71%",
    width: "43.59%",
    top: "17.65%",
    right: "29.74%",
    bottom: "17.65%",
    left: "26.67%",
    position: "absolute",
  },
  footer: {
    top: 760,
  },
});

export default FormFooter;

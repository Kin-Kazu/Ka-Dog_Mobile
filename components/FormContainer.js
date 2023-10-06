import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import SizeSection from "./SizeSection";
import { Padding, FontSize, Color, FontFamily } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={styles.table}>
      <View style={styles.table1}>
        <SizeSection />
        <View style={[styles.frameParent, styles.frameFlexBox]}>
          <View style={styles.wrapperLayout}>
            <Text style={styles.text}>9</Text>
          </View>
          <View style={styles.poppyRoseWrapper}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>Poppy-Rose</Text>
          </View>
          <View style={styles.koroWrapper}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>Koro</Text>
          </View>
          <View style={styles.chowchowWrapper}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>ChowChow</Text>
          </View>
          <View style={[styles.mediumWrapper, styles.wrapperLayout]}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>Medium</Text>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <View style={styles.wrapperLayout}>
            <Text style={styles.text}>7</Text>
          </View>
          <View style={styles.poppyRoseWrapper}>
            <Text style={styles.dominicTypo}>Dominic</Text>
          </View>
          <View style={styles.koroWrapper}>
            <Text style={[styles.croni, styles.croniTypo]}>Croni</Text>
          </View>
          <View style={styles.chowchowWrapper}>
            <Text style={[styles.labradoodle, styles.croniTypo]}>
              Labradoodle
            </Text>
          </View>
          <View style={[styles.mediumWrapper, styles.wrapperLayout]}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>Medium</Text>
          </View>
        </View>
        <View style={[styles.frameParent, styles.frameFlexBox]}>
          <View style={styles.wrapperLayout}>
            <Text style={styles.text}>8</Text>
          </View>
          <View style={styles.poppyRoseWrapper}>
            <Text style={[styles.shanice, styles.dominicTypo]}>Shanice</Text>
          </View>
          <View style={styles.koroWrapper}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>Botan</Text>
          </View>
          <View style={styles.chowchowWrapper}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>Sarabi dog</Text>
          </View>
          <View style={[styles.mediumWrapper, styles.wrapperLayout]}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>Large</Text>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <View style={styles.wrapperLayout}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.poppyRoseWrapper}>
            <Text style={styles.dominicTypo}>Wiktoria</Text>
          </View>
          <View style={styles.koroWrapper}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>Rem</Text>
          </View>
          <View style={styles.chowchowWrapper}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>
              Maltese dog
            </Text>
          </View>
          <View style={[styles.mediumWrapper, styles.wrapperLayout]}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>Small</Text>
          </View>
        </View>
        <View style={[styles.frameParent, styles.frameFlexBox]}>
          <View style={styles.wrapperLayout}>
            <Text style={styles.text}>6</Text>
          </View>
          <View style={styles.poppyRoseWrapper}>
            <Text style={styles.dominicTypo}>Miriam Kidd</Text>
          </View>
          <View style={styles.koroWrapper}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>Suisei</Text>
          </View>
          <View style={styles.chowchowWrapper}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>Shih Tzu</Text>
          </View>
          <View style={[styles.mediumWrapper, styles.wrapperLayout]}>
            <Text style={[styles.poppyRose, styles.croniTypo]}>Small</Text>
          </View>
        </View>
        <View style={styles.tableChild} />
        <View style={styles.tableChild} />
        <View style={styles.tableChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    padding: Padding.p_base,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  croniTypo: {
    textAlign: "left",
    fontSize: FontSize.size_4xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  wrapperLayout: {
    width: 45,
    flexDirection: "row",
  },
  dominicTypo: {
    width: 60,
    textAlign: "left",
    fontSize: FontSize.size_4xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  text: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    flex: 1,
  },
  poppyRose: {
    flex: 1,
    fontSize: FontSize.size_4xs,
  },
  poppyRoseWrapper: {
    width: 75,
    flexDirection: "row",
  },
  koroWrapper: {
    width: 90,
    alignItems: "center",
    flexDirection: "row",
  },
  chowchowWrapper: {
    width: 100,
    alignItems: "center",
    flexDirection: "row",
  },
  mediumWrapper: {
    alignItems: "center",
  },
  frameParent: {
    backgroundColor: Color.colorWhite,
  },
  croni: {
    width: 90,
  },
  labradoodle: {
    width: 100,
  },
  frameGroup: {
    backgroundColor: Color.colorGhostwhite,
  },
  shanice: {
    opacity: 0.75,
  },
  tableChild: {
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
  },
  table1: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 390,
  },
  table: {
    position: "absolute",
    top: 175,
    left: 0,
    height: 255,
    flexDirection: "row",
  },
});

export default FormContainer;

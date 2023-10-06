import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import SizeSection from "./SizeSection";
import { Padding, FontSize, Color, FontFamily } from "../GlobalStyles";

const FormContainer1 = () => {
  return (
    <View style={styles.table}>
      <SizeSection />
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={styles.wrapperLayout}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.wiktoriaWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Wiktoria</Text>
        </View>
        <View style={styles.remWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Rem</Text>
        </View>
        <View style={styles.malteseDogWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Maltese dog</Text>
        </View>
        <View style={[styles.smallWrapper, styles.wrapperLayout]}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Small</Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <View style={styles.wrapperLayout}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.wiktoriaWrapper}>
          <Text style={styles.bradMasonTypo}>Trixie Byrd</Text>
        </View>
        <View style={styles.remWrapper}>
          <Text style={[styles.ars, styles.arsTypo]}>Ars</Text>
        </View>
        <View style={styles.malteseDogWrapper}>
          <Text style={[styles.borderCollie, styles.arsTypo]}>
            Border Collie
          </Text>
        </View>
        <View style={[styles.smallWrapper, styles.wrapperLayout]}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Medium</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={styles.wrapperLayout}>
          <Text style={styles.text}>3</Text>
        </View>
        <View style={styles.wiktoriaWrapper}>
          <Text style={[styles.bradMason, styles.bradMasonTypo]}>
            Brad Mason
          </Text>
        </View>
        <View style={styles.remWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Fauna</Text>
        </View>
        <View style={styles.malteseDogWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Rottweiler</Text>
        </View>
        <View style={[styles.smallWrapper, styles.wrapperLayout]}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Medium</Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <View style={styles.wrapperLayout}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.wiktoriaWrapper}>
          <Text style={styles.bradMasonTypo}>Sanderson</Text>
        </View>
        <View style={styles.remWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Towa</Text>
        </View>
        <View style={styles.malteseDogWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>
            Australian Shepherd
          </Text>
        </View>
        <View style={[styles.mediumFrame, styles.wrapperLayout]}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Medium</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={styles.wrapperLayout}>
          <Text style={styles.text}>5</Text>
        </View>
        <View style={styles.wiktoriaWrapper}>
          <Text style={styles.bradMasonTypo}>Jun Redfern</Text>
        </View>
        <View style={styles.remWrapper}>
          <Text style={[styles.ars, styles.arsTypo]}>Watame</Text>
        </View>
        <View style={styles.malteseDogWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>
            Anatolian Shepherd Dog
          </Text>
        </View>
        <View style={[styles.smallWrapper, styles.wrapperLayout]}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Medium</Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <View style={styles.wrapperLayout}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.wiktoriaWrapper}>
          <Text style={styles.bradMasonTypo}>Miriam Kidd</Text>
        </View>
        <View style={styles.remWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Suisei</Text>
        </View>
        <View style={styles.malteseDogWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Shih Tzu</Text>
        </View>
        <View style={[styles.smallWrapper, styles.wrapperLayout]}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Small</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={styles.wrapperLayout}>
          <Text style={styles.text}>7</Text>
        </View>
        <View style={styles.wiktoriaWrapper}>
          <Text style={styles.bradMasonTypo}>Dominic</Text>
        </View>
        <View style={styles.remWrapper}>
          <Text style={[styles.ars, styles.arsTypo]}>Croni</Text>
        </View>
        <View style={styles.malteseDogWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>{`Labradoodle
`}</Text>
        </View>
        <View style={[styles.smallWrapper, styles.wrapperLayout]}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Medium</Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <View style={styles.wrapperLayout}>
          <Text style={styles.text}>8</Text>
        </View>
        <View style={styles.wiktoriaWrapper}>
          <Text style={styles.bradMasonTypo}>Shanice</Text>
        </View>
        <View style={styles.remWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Botan</Text>
        </View>
        <View style={styles.malteseDogWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Sarabi dog</Text>
        </View>
        <View style={[styles.smallWrapper, styles.wrapperLayout]}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Large</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={styles.wrapperLayout}>
          <Text style={styles.text}>9</Text>
        </View>
        <View style={styles.wiktoriaWrapper}>
          <Text style={styles.bradMasonTypo}>Poppy-Rose</Text>
        </View>
        <View style={styles.remWrapper}>
          <Text style={[styles.ars, styles.arsTypo]}>Koro</Text>
        </View>
        <View style={styles.malteseDogWrapper}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Chow Chow</Text>
        </View>
        <View style={[styles.smallWrapper, styles.wrapperLayout]}>
          <Text style={[styles.wiktoria, styles.arsTypo]}>Medium</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  arsTypo: {
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
  bradMasonTypo: {
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
  wiktoria: {
    flex: 1,
    fontSize: FontSize.size_4xs,
  },
  wiktoriaWrapper: {
    width: 75,
    flexDirection: "row",
  },
  remWrapper: {
    width: 90,
    alignItems: "center",
    flexDirection: "row",
  },
  malteseDogWrapper: {
    width: 100,
    alignItems: "center",
    flexDirection: "row",
  },
  smallWrapper: {
    alignItems: "center",
  },
  frameParent: {
    backgroundColor: Color.colorWhite,
  },
  ars: {
    width: 90,
  },
  borderCollie: {
    width: 100,
  },
  frameGroup: {
    backgroundColor: Color.colorGhostwhite,
  },
  bradMason: {
    opacity: 0.75,
  },
  mediumFrame: {
    opacity: 0.4,
    alignItems: "center",
  },
  table: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 390,
  },
});

export default FormContainer1;

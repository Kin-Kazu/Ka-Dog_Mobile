import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <Image
        style={[styles.backgroundPic5Icon, styles.backgroundIconLayout]}
        contentFit="cover"
        source={require("../assets/backgroundpic-2.png")}
      />
      <View style={[styles.profileChild, styles.profileChildPosition]} />
      <Image
        style={[styles.backgroundPic7Icon, styles.profileChildPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-2.png")}
      />
      <Image
        style={styles.profileItem}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={styles.profileParent}
        onPress={() => navigation.navigate("KaDogDashboard2")}
      >
        <Text style={styles.profile1}>Profile</Text>
        <Image
          style={[
            styles.iconlylightarrowLeft,
            styles.iconlylightarrowLeftLayout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left1.png")}
        />
      </Pressable>
      <View style={[styles.profileInner, styles.profileInnerLayout]} />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-71.png")}
      />
      <View style={[styles.rectangleView, styles.profileInnerLayout]} />
      <Text style={[styles.name, styles.sexTypo]}>Name</Text>
      <Text style={[styles.email, styles.sexTypo]}>Email</Text>
      <Text style={[styles.dogBreed, styles.sexTypo]}>Dog Breed</Text>
      <Text style={[styles.sex, styles.sexTypo]}>Sex</Text>
      <Text style={[styles.dateOfBirth, styles.sexTypo]}>Date of Birth</Text>
      <Text style={[styles.age, styles.sexTypo]}>Age</Text>
      <Text style={[styles.phone, styles.sexTypo]}>Phone</Text>
      <Text style={[styles.lastName, styles.sex1Typo]}>Last name</Text>
      <Text style={[styles.sex1, styles.sex1Typo]}>Sex</Text>
      <View style={[styles.profileChild1, styles.profileChildLayout1]} />
      <View style={[styles.profileChild2, styles.profileChildLayout1]} />
      <View style={[styles.profileChild3, styles.profileChildLayout1]} />
      <Text style={[styles.generalInformation, styles.informationTypo]}>
        GENERAL INFORMATION
      </Text>
      <Text style={[styles.contacts, styles.informationTypo]}>CONTACTS</Text>
      <Text style={[styles.dogInformation, styles.informationTypo]}>
        DOG INFORMATION
      </Text>
      <Image
        style={[styles.backgroundPic4Icon, styles.backgroundIconLayout]}
        contentFit="cover"
        source={require("../assets/backgroundpic-2.png")}
      />
      <View style={[styles.changeEmailAddress, styles.editButtonPosition]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Text style={[styles.changeEmailAddress1, styles.editTypo]}>
          Deactivate Account
        </Text>
      </View>
      <View style={[styles.profileChild4, styles.profileChildLayout]} />
      <View style={[styles.profileChild5, styles.profileChildLayout]} />
      <View style={[styles.profileChild6, styles.profileChildLayout]} />
      <View style={[styles.profileChild7, styles.profileChildLayout]} />
      <View style={[styles.profileChild8, styles.profileChildLayout]} />
      <View style={[styles.profileChild9, styles.profileChildLayout]} />
      <View style={[styles.profileChild10, styles.profileChildLayout]} />
      <View style={[styles.profileChild11, styles.profileChildLayout]} />
      <View style={[styles.profileChild11, styles.profileChildLayout]} />
      <View style={[styles.profileChild13, styles.profileChildLayout]} />
      <Image
        style={[styles.removebgPreview1Icon, styles.removebgIconLayout]}
        contentFit="cover"
        source={require("../assets/6removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview2Icon, styles.removebgIconLayout]}
        contentFit="cover"
        source={require("../assets/6removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview3Icon, styles.removebgIconLayout]}
        contentFit="cover"
        source={require("../assets/6removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon1, styles.removebgIconPosition1]}
        contentFit="cover"
        source={require("../assets/7removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview2Icon1, styles.removebgIconPosition1]}
        contentFit="cover"
        source={require("../assets/7removebgpreview-1.png")}
      />
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-22.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon2, styles.removebgIconPosition]}
        contentFit="cover"
        source={require("../assets/8removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon3, styles.removebgIconPosition]}
        contentFit="cover"
        source={require("../assets/9removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon4, styles.backgroundIconPosition]}
        contentFit="cover"
        source={require("../assets/10removebgpreview-1.png")}
      />
      <View style={[styles.editButton, styles.editButtonPosition]}>
        <View style={[styles.rectangle1, styles.rectanglePosition]} />
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundIconLayout: {
    height: 85,
    width: 390,
  },
  profileChildPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconlylightarrowLeftLayout: {
    width: 22,
    height: 22,
  },
  profileInnerLayout: {
    height: 35,
    width: 351,
    left: 17,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  sexTypo: {
    height: 28,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 34,
    color: Color.colorBlack,
    width: 390,
    position: "absolute",
  },
  sex1Typo: {
    height: 26,
    width: 85,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 34,
    color: Color.colorBlack,
    position: "absolute",
  },
  profileChildLayout1: {
    opacity: 0.8,
    height: 31,
    backgroundColor: Color.colorLightgray_100,
    width: 390,
    left: 0,
    position: "absolute",
  },
  informationTypo: {
    height: 25,
    width: 175,
    fontSize: FontSize.size_sm,
    left: 12,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  editButtonPosition: {
    bottom: "1.78%",
    top: "91.71%",
    width: "43.59%",
    height: "6.52%",
    position: "absolute",
  },
  rectanglePosition: {
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  editTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  profileChildLayout: {
    height: 2,
    width: 325,
    backgroundColor: Color.colorGainsboro_300,
    left: 35,
    opacity: 0.8,
    position: "absolute",
  },
  removebgIconLayout: {
    height: 17,
    width: 20,
    left: 9,
    position: "absolute",
  },
  removebgIconPosition1: {
    left: 3,
    width: 29,
    height: 31,
    position: "absolute",
  },
  removebgIconPosition: {
    left: 6,
    position: "absolute",
  },
  backgroundIconPosition: {
    left: 0,
    position: "absolute",
  },
  backgroundPic5Icon: {
    top: 758,
    left: 0,
    position: "absolute",
  },
  profileChild: {
    width: 390,
    top: 0,
    height: 844,
    backgroundColor: Color.colorWhite,
  },
  backgroundPic7Icon: {
    height: 85,
    width: 390,
  },
  profileItem: {
    top: 101,
    left: 125,
    width: 139,
    height: 131,
    position: "absolute",
  },
  profile1: {
    top: 2,
    left: 129,
    fontSize: FontSize.size_8xl,
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconlylightarrowLeft: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  profileParent: {
    top: 55,
    left: 16,
    width: 213,
    height: 22,
    position: "absolute",
  },
  profileInner: {
    top: 361,
  },
  rectangleIcon: {
    top: 694,
    left: 18,
    width: 354,
    height: 37,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  rectangleView: {
    top: 609,
  },
  name: {
    top: 285,
  },
  email: {
    top: 408,
  },
  dogBreed: {
    top: 511,
  },
  sex: {
    top: 536,
  },
  dateOfBirth: {
    top: 559,
  },
  age: {
    top: 581,
  },
  phone: {
    top: 436,
  },
  lastName: {
    top: 310,
  },
  sex1: {
    top: 336,
  },
  profileChild1: {
    top: 240,
  },
  profileChild2: {
    top: 370,
  },
  profileChild3: {
    top: 474,
  },
  generalInformation: {
    top: 246,
  },
  contacts: {
    top: 376,
  },
  dogInformation: {
    top: 481,
  },
  backgroundPic4Icon: {
    top: 759,
    left: 0,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.colorFirebrick,
  },
  changeEmailAddress1: {
    marginTop: -17.5,
    width: "58.82%",
    top: "50%",
    left: "20.59%",
    opacity: 0.91,
  },
  changeEmailAddress: {
    right: "4.62%",
    left: "51.79%",
    overflow: "hidden",
  },
  profileChild4: {
    top: 304,
  },
  profileChild5: {
    top: 329,
  },
  profileChild6: {
    top: 354,
  },
  profileChild7: {
    top: 427,
  },
  profileChild8: {
    top: 454,
  },
  profileChild9: {
    top: 531,
  },
  profileChild10: {
    top: 554,
  },
  profileChild11: {
    top: 579,
  },
  profileChild13: {
    top: 603,
  },
  removebgPreview1Icon: {
    top: 287,
  },
  removebgPreview2Icon: {
    top: 313,
  },
  removebgPreview3Icon: {
    top: 411,
  },
  removebgPreview1Icon1: {
    top: 330,
    width: 29,
  },
  removebgPreview2Icon1: {
    top: 530,
    width: 29,
  },
  image2Icon: {
    top: 506,
    left: 4,
    width: 26,
    height: 27,
    position: "absolute",
  },
  removebgPreview1Icon2: {
    top: 435,
    height: 20,
    width: 29,
  },
  removebgPreview1Icon3: {
    top: 557,
    width: 22,
    height: 22,
  },
  removebgPreview1Icon4: {
    top: 574,
    width: 40,
    height: 40,
  },
  rectangle1: {
    backgroundColor: Color.colorSteelblue_100,
  },
  edit: {
    height: "34.55%",
    width: "42.94%",
    top: "32.73%",
    left: "30.59%",
  },
  editButton: {
    right: "51.79%",
    left: "4.62%",
  },
  profile: {
    borderRadius: Border.br_30xl,
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Profile;

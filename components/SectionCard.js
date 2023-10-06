import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Property1Form from "./Property1Form";
import { Border, Color } from "../GlobalStyles";

const SectionCard = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.componentChild} />
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop="11.61%"
        property1FormLeft="25.65%"
        property1FormWidth="67.62%"
        property1FormHeight="3.26%"
        property1FormRight="6.74%"
        property1FormBottom="85.13%"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop="16.08%"
        property1FormLeft="25.65%"
        property1FormWidth="67.62%"
        property1FormHeight="3.26%"
        property1FormRight="6.74%"
        property1FormBottom="80.65%"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop="20.31%"
        property1FormLeft="25.65%"
        property1FormWidth="67.62%"
        property1FormHeight="3.26%"
        property1FormRight="6.74%"
        property1FormBottom="76.42%"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop="24.55%"
        property1FormLeft="25.65%"
        property1FormWidth="67.62%"
        property1FormHeight="3.26%"
        property1FormRight="6.74%"
        property1FormBottom="72.19%"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop="28.9%"
        property1FormLeft="25.65%"
        property1FormWidth="67.62%"
        property1FormHeight="3.26%"
        property1FormRight="6.74%"
        property1FormBottom="67.84%"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop="51.63%"
        property1FormLeft="29.53%"
        property1FormWidth="63.73%"
        property1FormHeight="3.26%"
        property1FormRight="6.74%"
        property1FormBottom="45.1%"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop="61.31%"
        property1FormLeft="29.53%"
        property1FormWidth="63.73%"
        property1FormHeight="3.26%"
        property1FormRight="6.74%"
        property1FormBottom="35.43%"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop="66.08%"
        property1FormLeft="29.53%"
        property1FormWidth="63.73%"
        property1FormHeight="3.26%"
        property1FormRight="6.74%"
        property1FormBottom="30.65%"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop="75.39%"
        property1FormLeft="29.53%"
        property1FormWidth="63.73%"
        property1FormHeight="3.26%"
        property1FormRight="6.74%"
        property1FormBottom="21.34%"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
      <Property1Form
        property1FormPosition="absolute"
        property1FormBorderRadius={5}
        property1FormBorderColor="#000"
        property1FormTop="70.8%"
        property1FormLeft="29.53%"
        property1FormWidth="63.73%"
        property1FormHeight="3.26%"
        property1FormRight="6.74%"
        property1FormBottom="25.94%"
        property1FormBackgroundColor="#f9f9f9"
        property1FormZIndex={0}
        property1FormBorderStyle="solid"
        property1FormBorderWidth={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorWhitesmoke_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    position: "absolute",
  },
  rectangleParent: {
    top: 37,
    left: 19,
    width: 386,
    height: 827,
    position: "absolute",
  },
});

export default SectionCard;

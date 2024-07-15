import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

export type MenuType = {
  onClose?: () => void;
};

const Menu = ({ onClose }: MenuType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.menu, styles.menuLayout]}>
      <View style={[styles.menuChild, styles.childPosition]} />
      <Pressable
        style={[styles.rectangleParent, styles.groupLayout]}
        onPress={() => navigation.navigate("DeviceStatus")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.myDevices, styles.myDevicesFlexBox]}>
          My Devices
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("ContactUs")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.aboutContact, styles.myDevicesFlexBox]}>
          About / Contact Us
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.groupLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.myDevices, styles.myDevicesFlexBox]}>
          Settings
        </Text>
      </Pressable>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    height: 844,
    width: 268,
    backgroundColor: Color.colorBlack,
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  groupLayout: {
    height: 50,
    position: "absolute",
  },
  myDevicesFlexBox: {
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    width: 235,
    position: "absolute",
  },
  menuChild: {
    left: 0,
    position: "absolute",
    height: 844,
    width: 268,
    backgroundColor: Color.colorBlack,
  },
  groupChild: {
    backgroundColor: Color.colorBurlywood,
    width: 235,
    height: 50,
    left: 0,
    top: 0,
  },
  myDevices: {
    top: 10,
    left: 0,
  },
  rectangleParent: {
    top: 347,
    width: 235,
    height: 50,
    left: 18,
  },
  aboutContact: {
    top: 8,
    left: 3,
  },
  rectangleGroup: {
    top: 551,
    left: 15,
    width: 238,
  },
  rectangleContainer: {
    top: 449,
    width: 235,
    height: 50,
    left: 18,
  },
  image1Icon: {
    top: 13,
    left: -3,
    width: 270,
    height: 282,
    position: "absolute",
  },
  menu: {
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Menu;

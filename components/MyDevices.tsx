import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const MyDevices = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.myDevices}>
      <Image
        style={styles.myDevicesChild}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Image
        style={styles.hamburgerIcon}
        contentFit="cover"
        source={require("../assets/hamburger.png")}
      />
      <View style={[styles.statusUpdates, styles.statusLayout]}>
        <Text style={styles.myShowers}>My Showers</Text>
        <View style={[styles.statusUpdatesChild, styles.statusLayout]} />
        <Pressable
          style={[styles.rectangleParent, styles.groupChildLayout]}
          onPress={() => navigation.navigate("PairNewDevice")}
        >
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.add, styles.addTypo]}>Add</Text>
        </Pressable>
        <View style={[styles.statusUpdatesInner, styles.groupInnerLayout]}>
          <View style={[styles.rectangleGroup, styles.groupInnerLayout]}>
            <View style={[styles.groupItem, styles.groupInnerLayout]} />
            <Text style={[styles.asset, styles.addTypo]}>Asset</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupInnerLayout]}>
          <View style={[styles.rectangleGroup, styles.groupInnerLayout]}>
            <View style={[styles.groupItem, styles.groupInnerLayout]} />
            <Text style={[styles.asset, styles.addTypo]}>Asset</Text>
          </View>
        </View>
        <View style={[styles.statusUpdatesInner1, styles.groupInnerLayout]}>
          <View style={[styles.rectangleGroup, styles.groupInnerLayout]}>
            <View style={[styles.groupItem, styles.groupInnerLayout]} />
            <Text style={[styles.asset, styles.addTypo]}>Asset</Text>
          </View>
        </View>
        <View style={[styles.statusUpdatesInner2, styles.groupInnerLayout]}>
          <View style={[styles.rectangleGroup, styles.groupInnerLayout]}>
            <View style={[styles.groupItem, styles.groupInnerLayout]} />
            <Text style={[styles.asset, styles.addTypo]}>Asset</Text>
          </View>
        </View>
        <View style={[styles.statusUpdatesInner3, styles.groupInnerLayout]}>
          <View style={[styles.rectangleGroup, styles.groupInnerLayout]}>
            <View style={[styles.groupItem, styles.groupInnerLayout]} />
            <Text style={[styles.asset, styles.addTypo]}>Asset</Text>
          </View>
        </View>
        <View style={[styles.statusUpdatesInner4, styles.groupInnerLayout]}>
          <View style={[styles.rectangleGroup, styles.groupInnerLayout]}>
            <View style={[styles.groupItem, styles.groupInnerLayout]} />
            <Text style={[styles.asset, styles.addTypo]}>Asset</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusLayout: {
    width: 334,
    position: "absolute",
  },
  groupChildLayout: {
    height: 33,
    width: 30,
    position: "absolute",
  },
  addTypo: {
    height: 12,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 237,
    height: 33,
    position: "absolute",
  },
  myDevicesChild: {
    top: 126,
    left: 18,
    width: 350,
    height: 207,
    position: "absolute",
  },
  hamburgerIcon: {
    width: 60,
    height: 47,
  },
  myShowers: {
    fontSize: FontSize.size_base,
    width: 196,
    height: 50,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBurlywood,
    left: 0,
    top: 0,
    position: "absolute",
  },
  statusUpdatesChild: {
    top: 50,
    height: 342,
    left: 0,
    backgroundColor: Color.colorBlack,
  },
  groupChild: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorBlack,
  },
  add: {
    top: 8,
    textAlign: "center",
    justifyContent: "center",
    width: 28,
    height: 12,
    fontSize: FontSize.size_3xs,
    color: Color.colorBurlywood,
    left: 0,
  },
  rectangleParent: {
    top: 352,
    left: 16,
  },
  groupItem: {
    backgroundColor: Color.colorBurlywood,
    left: 0,
    top: 0,
  },
  asset: {
    top: 9,
    left: 9,
    color: Color.colorBlack,
    width: 100,
    textAlign: "left",
    height: 12,
    fontSize: FontSize.size_3xs,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  statusUpdatesInner: {
    top: 305,
    left: 16,
  },
  groupView: {
    top: 255,
    left: 16,
  },
  statusUpdatesInner1: {
    top: 205,
    left: 16,
  },
  statusUpdatesInner2: {
    top: 159,
    left: 16,
  },
  statusUpdatesInner3: {
    top: 68,
    left: 16,
  },
  statusUpdatesInner4: {
    top: 113,
    left: 16,
  },
  statusUpdates: {
    top: 392,
    left: 26,
    height: 392,
  },
  myDevices: {
    width: 390,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});

export default MyDevices;

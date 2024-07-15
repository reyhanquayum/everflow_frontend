import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DynamicComponent from "../components/DynamicComponent";
import Menu from "../components/Menu";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const DeviceStatus = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [hamburgerContainerVisible, setHamburgerContainerVisible] =
    useState(false);

  const openHamburgerContainer = useCallback(() => {
    setHamburgerContainerVisible(true);
  }, []);

  const closeHamburgerContainer = useCallback(() => {
    setHamburgerContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.deviceStatus}>
        <View style={[styles.searchResults, styles.searchLayout]}>
          <View style={[styles.searchResultsChild, styles.searchLayout]} />
          <Pressable
            style={[styles.groupParent, styles.groupPosition]}
            onPress={() => navigation.navigate("MyDevices")}
          >
            <View style={[styles.rectangleParent, styles.groupViewLayout]}>
              <View style={[styles.groupChild, styles.groupViewLayout]} />
              <Text style={[styles.device, styles.textTypo]}>Device</Text>
              <Text style={[styles.text, styles.textTypo]}>100%</Text>
            </View>
            <DynamicComponent />
            <DynamicComponent propTop={102} />
            <DynamicComponent propTop={153} />
          </Pressable>
          <Pressable
            style={[styles.groupContainer, styles.groupPosition]}
            onPress={() => navigation.navigate("MyDevices")}
          >
            <View style={[styles.rectangleParent, styles.groupViewLayout]}>
              <View style={[styles.groupChild, styles.groupViewLayout]} />
              <Text style={[styles.device, styles.textTypo]}>Device</Text>
              <Text style={[styles.text, styles.textTypo]}>100%</Text>
            </View>
            <DynamicComponent propTop={51} />
            <DynamicComponent propTop={102} />
            <Pressable
              style={styles.groupPressable}
              onPress={() => navigation.navigate("MyDevices")}
            >
              <View style={[styles.rectangleParent, styles.groupViewLayout]}>
                <View style={[styles.groupChild, styles.groupViewLayout]} />
                <Text style={[styles.device, styles.textTypo]}>Device</Text>
                <Text style={[styles.text, styles.textTypo]}>100%</Text>
              </View>
              <DynamicComponent propTop={54} />
              <DynamicComponent propTop={109} />
              <DynamicComponent propTop={164} />
            </Pressable>
          </Pressable>
        </View>
        <View style={[styles.deviceStatusInner, styles.groupViewLayout]}>
          <View style={[styles.groupView, styles.groupViewLayout]}>
            <View style={[styles.rectangleView, styles.groupViewLayout]} />
            <Text style={styles.search}>Search</Text>
          </View>
        </View>
        <Pressable style={styles.hamburger} onPress={openHamburgerContainer}>
          <View style={[styles.hamburgerChild, styles.hamburgerLayout]} />
          <View style={[styles.hamburgerItem, styles.hamburgerLayout]} />
          <View style={[styles.hamburgerInner, styles.hamburgerLayout]} />
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={hamburgerContainerVisible}
      >
        <View style={styles.hamburgerContainerOverlay}>
          <Pressable
            style={styles.hamburgerContainerBg}
            onPress={closeHamburgerContainer}
          />
          <Menu onClose={closeHamburgerContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 627,
    width: 334,
    position: "absolute",
  },
  groupPosition: {
    left: 15,
    width: 307,
    position: "absolute",
  },
  groupViewLayout: {
    height: 41,
    position: "absolute",
  },
  textTypo: {
    height: 10,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBurlywood,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    left: 11,
    position: "absolute",
  },
  hamburgerLayout: {
    height: 11,
    backgroundColor: Color.colorBurlywood,
    width: 60,
    left: 0,
    position: "absolute",
  },
  searchResultsChild: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorBlack,
  },
  groupChild: {
    width: 307,
    left: 0,
    top: 0,
    backgroundColor: Color.colorBlack,
  },
  device: {
    width: 129,
    top: 7,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBurlywood,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    left: 11,
  },
  text: {
    top: 21,
    width: 291,
  },
  rectangleParent: {
    width: 307,
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 13,
    height: 194,
    width: 307,
  },
  groupPressable: {
    top: 153,
    height: 205,
    width: 307,
    left: 0,
    position: "absolute",
  },
  groupContainer: {
    top: 219,
    height: 358,
    width: 307,
  },
  searchResults: {
    top: 167,
    left: 28,
  },
  rectangleView: {
    left: 0,
    top: 0,
    width: 334,
    height: 41,
    backgroundColor: Color.colorBlack,
  },
  search: {
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
    justifyContent: "center",
    width: 287,
    height: 26,
    left: 25,
    alignItems: "center",
    display: "flex",
    color: Color.colorBurlywood,
    fontFamily: FontFamily.interRegular,
    top: 7,
    position: "absolute",
  },
  groupView: {
    left: 0,
    top: 0,
    width: 334,
    height: 41,
  },
  deviceStatusInner: {
    top: 107,
    width: 334,
    height: 41,
    left: 28,
  },
  hamburgerContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  hamburgerContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  hamburgerChild: {
    top: 0,
  },
  hamburgerItem: {
    top: 18,
  },
  hamburgerInner: {
    top: 36,
  },
  hamburger: {
    top: 20,
    height: 47,
    width: 60,
    left: 25,
    position: "absolute",
  },
  deviceStatus: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});

export default DeviceStatus;

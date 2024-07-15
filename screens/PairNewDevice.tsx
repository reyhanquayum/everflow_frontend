import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import Menu from "../components/Menu";
import GroupComponent from "../components/GroupComponent";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const PairNewDevice = () => {
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
      <View style={styles.pairNewDevice}>
        <Pressable style={styles.hamburger} onPress={openHamburgerContainer}>
          <View style={[styles.hamburgerChild, styles.hamburgerLayout]} />
          <View style={[styles.hamburgerItem, styles.hamburgerLayout]} />
          <View style={[styles.hamburgerInner, styles.hamburgerLayout]} />
        </Pressable>
        <GroupComponent showers="Showers" />
        <GroupComponent showers="Devices" rectangleViewTop={292} />
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={styles.addManualDevice}>Add Manual Device</Text>
        </View>
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
  hamburgerLayout: {
    height: 11,
    backgroundColor: Color.colorBurlywood,
    left: 0,
    width: 60,
    position: "absolute",
  },
  groupChildLayout: {
    height: 26,
    width: 137,
    position: "absolute",
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
    height: 11,
  },
  hamburgerItem: {
    top: 18,
  },
  hamburgerInner: {
    top: 36,
  },
  hamburger: {
    top: 20,
    left: 25,
    height: 47,
    width: 60,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorBurlywood,
    width: 137,
    left: 0,
    top: 0,
  },
  addManualDevice: {
    top: 6,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 128,
    height: 10,
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 533,
    left: 124,
  },
  pairNewDevice: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PairNewDevice;

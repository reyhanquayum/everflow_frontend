import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import Menu from "../components/Menu";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Settings = () => {
  const [hamburgerContainerVisible, setHamburgerContainerVisible] =
    useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openHamburgerContainer = useCallback(() => {
    setHamburgerContainerVisible(true);
  }, []);

  const closeHamburgerContainer = useCallback(() => {
    setHamburgerContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.settings}>
        <Pressable style={styles.hamburger} onPress={openHamburgerContainer}>
          <View style={[styles.hamburgerChild, styles.hamburgerLayout]} />
          <View style={[styles.hamburgerItem, styles.hamburgerLayout]} />
          <View style={[styles.hamburgerInner, styles.hamburgerLayout]} />
        </Pressable>
        <View style={[styles.settingsChild, styles.settingsLayout]} />
        <Text style={styles.personalInformation}>Personal Information</Text>
        <Pressable
          style={[styles.settingsItem, styles.settingsItemPosition]}
          onPress={() => navigation.navigate("EditInformation")}
        />
        <Text style={[styles.editInformation, styles.signOutFlexBox]}>
          Edit Information
        </Text>
        <Pressable
          style={[styles.settingsInner, styles.signOutPosition]}
          onPress={() => navigation.navigate("Login")}
        />
        <Text style={[styles.signOut, styles.signOutPosition]}>Sign Out</Text>
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
    left: 0,
    backgroundColor: Color.colorBurlywood,
    width: 60,
    position: "absolute",
  },
  settingsLayout: {
    width: 334,
    left: 25,
  },
  settingsItemPosition: {
    top: 677,
    height: 47,
    position: "absolute",
  },
  signOutFlexBox: {
    color: Color.colorBlack,
    width: 295,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  signOutPosition: {
    top: 744,
    height: 47,
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
  settingsChild: {
    top: 115,
    backgroundColor: Color.colorGainsboro_100,
    height: 523,
    width: 334,
    position: "absolute",
  },
  personalInformation: {
    top: 353,
    color: Color.colorBurlywood,
    width: 295,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 45,
    height: 47,
    position: "absolute",
  },
  settingsItem: {
    width: 334,
    left: 25,
    backgroundColor: Color.colorBurlywood,
  },
  editInformation: {
    left: 48,
    top: 677,
    height: 47,
    position: "absolute",
  },
  settingsInner: {
    width: 334,
    left: 25,
    backgroundColor: Color.colorBurlywood,
  },
  signOut: {
    color: Color.colorBlack,
    width: 295,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 45,
    top: 744,
  },
  settings: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Settings;

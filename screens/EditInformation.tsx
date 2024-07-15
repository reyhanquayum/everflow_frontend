import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import Menu from "../components/Menu";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const EditInformation = () => {
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
      <View style={styles.editInformation}>
        <Pressable style={styles.hamburger} onPress={openHamburgerContainer}>
          <View style={[styles.hamburgerChild, styles.hamburgerLayout]} />
          <View style={[styles.hamburgerItem, styles.hamburgerLayout]} />
          <View style={[styles.hamburgerInner, styles.hamburgerLayout]} />
        </Pressable>
        <View style={[styles.rectangleParent, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.changeEmail, styles.cancelFlexBox]}>
            Change Email
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.changeEmail, styles.cancelFlexBox]}>
            Change Password
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.changeEmail, styles.cancelFlexBox]}>
            Edit Last Name
          </Text>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.changeEmail, styles.cancelFlexBox]}>
            Edit First Name
          </Text>
        </View>
        <Pressable
          style={[styles.groupPressable, styles.groupPressablePosition]}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.cancel, styles.cancelFlexBox]}>Cancel</Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent1, styles.groupPressablePosition]}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.changeEmail, styles.cancelFlexBox]}>
            Confirm
          </Text>
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
  hamburgerLayout: {
    height: 11,
    backgroundColor: Color.colorBurlywood,
    left: 0,
    width: 60,
    position: "absolute",
  },
  groupLayout: {
    width: 334,
    height: 47,
    position: "absolute",
  },
  cancelFlexBox: {
    width: 295,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 23,
    top: 0,
    height: 47,
    position: "absolute",
  },
  groupPressablePosition: {
    left: 28,
    width: 334,
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
    height: 47,
    width: 60,
    position: "absolute",
    left: 25,
  },
  groupChild: {
    backgroundColor: Color.colorBurlywood,
    left: 0,
    width: 334,
    top: 0,
  },
  changeEmail: {
    color: Color.colorBlack,
  },
  rectangleParent: {
    top: 220,
    left: 25,
    width: 334,
  },
  rectangleGroup: {
    top: 281,
    left: 25,
    width: 334,
  },
  rectangleContainer: {
    top: 159,
    left: 25,
    width: 334,
  },
  groupView: {
    top: 98,
    left: 25,
    width: 334,
  },
  cancel: {
    color: Color.colorBurlywood,
  },
  groupPressable: {
    top: 745,
  },
  rectangleParent1: {
    top: 684,
  },
  editInformation: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default EditInformation;

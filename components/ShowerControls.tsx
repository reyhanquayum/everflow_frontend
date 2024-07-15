import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { Image } from "expo-image";
import Menu from "./Menu";
import Format24Hour from "./Format24Hour";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ShowerControls = () => {
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
      <View style={styles.showerControls}>
        <Pressable
          style={[styles.hamburger, styles.hamburgerLayout]}
          onPress={openHamburgerContainer}
        >
          <View style={[styles.hamburgerChild, styles.childPosition]} />
          <View style={[styles.hamburgerItem, styles.hamburgerLayout]} />
          <View style={[styles.hamburgerInner, styles.hamburgerLayout]} />
        </Pressable>
        <View style={[styles.temperatureControl, styles.temperatureLayout]}>
          <Image
            style={[styles.temperatureControlChild, styles.temperatureLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.c, styles.cFlexBox]}>26°C</Text>
        </View>
        <View style={[styles.farenheitButton, styles.buttonLayout]}>
          <View style={[styles.farenheitButtonChild, styles.buttonLayout]} />
          <Text style={[styles.f, styles.cFlexBox]}>F</Text>
        </View>
        <View style={[styles.celsiusButton, styles.buttonLayout]}>
          <View style={[styles.farenheitButtonChild, styles.buttonLayout]} />
          <Text style={[styles.f, styles.cFlexBox]}>C</Text>
        </View>
        <Format24Hour
          headline="Enter time"
          format24HourPosition="absolute"
          format24HourBackgroundColor="#eee"
          format24HourWidth={280}
          format24HourHeight={200}
          format24HourTop={400}
          format24HourLeft={55}
        />
        <View style={[styles.showerActions, styles.cFlexBox]}>
          <Image
            style={styles.stateplayDuotoneIcon}
            contentFit="cover"
            source={require("../assets/stateplay-duotone.png")}
          />
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
    width: 60,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  temperatureLayout: {
    height: 230,
    width: 230,
    position: "absolute",
  },
  cFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  buttonLayout: {
    height: 20,
    width: 32,
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
    height: 11,
    left: 0,
    width: 60,
    position: "absolute",
    backgroundColor: Color.colorBlack,
  },
  hamburgerItem: {
    top: 18,
    height: 11,
    left: 0,
    backgroundColor: Color.colorBlack,
  },
  hamburgerInner: {
    top: 36,
    height: 11,
    left: 0,
    backgroundColor: Color.colorBlack,
  },
  hamburger: {
    top: 20,
    left: 25,
    height: 47,
  },
  temperatureControlChild: {
    left: 0,
    top: 0,
  },
  c: {
    top: 77,
    left: 59,
    fontSize: 48,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDimgray,
    width: 121,
    height: 84,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  temperatureControl: {
    top: 81,
    left: 80,
  },
  farenheitButtonChild: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorBlack,
  },
  f: {
    top: 5,
    left: 7,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    width: 18,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 11,
  },
  farenheitButton: {
    left: 162,
    top: 319,
    width: 32,
  },
  celsiusButton: {
    left: 197,
    top: 319,
    width: 32,
  },
  stateplayDuotoneIcon: {
    width: 50,
    height: 50,
  },
  showerActions: {
    top: 661,
    left: 129,
    borderRadius: 4,
    backgroundColor: Color.colorGainsboro_100,
    width: 136,
    height: 53,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: 21,
    overflow: "hidden",
  },
  showerControls: {
    width: 390,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});

export default ShowerControls;

import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Modal } from "react-native";
import Favorites1 from "../components/Favorites1";
import Favorites from "../components/Favorites";
import Menu from "../components/Menu";
import { Color } from "../GlobalStyles";

const Home = () => {
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
      <View style={styles.home}>
        <Favorites1 />
        <Favorites />
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
  hamburgerLayout: {
    height: 11,
    backgroundColor: Color.colorBurlywood,
    left: 0,
    width: 60,
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
    left: 25,
    height: 47,
    width: 60,
    position: "absolute",
  },
  home: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Home;

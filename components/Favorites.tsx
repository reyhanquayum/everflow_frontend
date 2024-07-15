import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Favorites = () => {
  return (
    <View style={[styles.favorites, styles.favoritesLayout]}>
      <Text style={styles.recentUpdates}>Recent Updates</Text>
      <View style={[styles.favoritesChild, styles.favoritesLayout]} />
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.updateToApp, styles.updateTypo]}>
          Update to App
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.updateToApp1, styles.updateTypo]}>
          Update to App
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.updateToApp, styles.updateTypo]}>
          Update to App
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.updateToApp, styles.updateTypo]}>
          Update to App
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  favoritesLayout: {
    width: 334,
    position: "absolute",
  },
  groupLayout: {
    height: 41,
    width: 307,
    position: "absolute",
  },
  updateTypo: {
    height: 10,
    width: 129,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBurlywood,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  recentUpdates: {
    fontSize: FontSize.size_base,
    width: 196,
    height: 40,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBurlywood,
    fontFamily: FontFamily.interRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  favoritesChild: {
    top: 40,
    backgroundColor: Color.colorBurlywood,
    height: 265,
    left: 0,
  },
  groupChild: {
    backgroundColor: Color.colorBlack,
    left: 0,
    width: 307,
    top: 0,
  },
  updateToApp: {
    top: 7,
    left: 11,
  },
  rectangleParent: {
    top: 207,
    left: 14,
    width: 307,
  },
  updateToApp1: {
    top: 10,
    left: 13,
  },
  rectangleGroup: {
    top: 107,
    left: 14,
    width: 307,
  },
  rectangleContainer: {
    top: 157,
    left: 14,
    width: 307,
  },
  groupView: {
    top: 57,
    left: 14,
    width: 307,
  },
  favorites: {
    top: 412,
    left: 25,
    height: 305,
  },
});

export default Favorites;

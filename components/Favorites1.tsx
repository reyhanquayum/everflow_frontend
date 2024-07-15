import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import NewsWrapper from "./NewsWrapper";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Favorites1 = () => {
  return (
    <View style={[styles.favorites, styles.favoritesLayout]}>
      <Text style={styles.news}>News</Text>
      <View style={[styles.favoritesChild, styles.favoritesLayout]} />
      <NewsWrapper />
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.news1, styles.newsTypo]}>News</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.news2, styles.newsTypo]}>News</Text>
      </View>
      <NewsWrapper propTop={213} />
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
  newsTypo: {
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
  news: {
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
  news1: {
    top: 7,
    left: 11,
  },
  rectangleParent: {
    top: 113,
    left: 14,
    width: 307,
  },
  news2: {
    top: 6,
    left: 13,
  },
  rectangleGroup: {
    top: 163,
    left: 14,
    width: 307,
  },
  favorites: {
    top: 86,
    left: 25,
    height: 305,
  },
});

export default Favorites1;

import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

export type GroupComponentType = {
  showers?: string;

  /** Style props */
  rectangleViewTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({ showers, rectangleViewTop }: GroupComponentType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", rectangleViewTop),
    };
  }, [rectangleViewTop]);

  return (
    <View style={[styles.rectangleParent, groupViewStyle]}>
      <View style={styles.groupChild} />
      <View style={styles.groupChild} />
      <View style={[styles.groupInner, styles.groupLayout]} />
      <Text style={[styles.asset, styles.assetTypo]}>Asset</Text>
      <View style={[styles.rectangleView, styles.groupLayout]} />
      <Text style={[styles.asset1, styles.assetTypo]}>Asset</Text>
      <View style={[styles.groupChild1, styles.groupLayout]} />
      <Text style={[styles.asset2, styles.assetTypo]}>Asset</Text>
      <Text style={styles.showers}>{showers}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 33,
    width: 237,
    backgroundColor: Color.colorBlack,
    left: 17,
    position: "absolute",
  },
  assetTypo: {
    height: 12,
    width: 100,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    left: 26,
    alignItems: "center",
    display: "flex",
    color: Color.colorBurlywood,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    backgroundColor: Color.colorGainsboro_100,
    top: 0,
    height: 185,
    width: 334,
    position: "absolute",
  },
  groupInner: {
    top: 84,
  },
  asset: {
    top: 93,
  },
  rectangleView: {
    top: 133,
  },
  asset1: {
    top: 142,
  },
  groupChild1: {
    top: 34,
  },
  asset2: {
    top: 43,
  },
  showers: {
    left: 97,
    fontSize: FontSize.size_base,
    textAlign: "center",
    justifyContent: "center",
    width: 136,
    height: 34,
    alignItems: "center",
    display: "flex",
    color: Color.colorBurlywood,
    fontFamily: FontFamily.interRegular,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 87,
    left: 25,
    height: 185,
    width: 334,
    position: "absolute",
  },
});

export default GroupComponent;

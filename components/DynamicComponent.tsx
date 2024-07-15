import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

export type DynamicComponentType = {
  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DynamicComponent = ({ propTop }: DynamicComponentType) => {
  const groupPressable1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.groupWrapper, groupPressable1Style]}
      onPress={() => navigation.navigate("MyDevices")}
    >
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.device, styles.textTypo]}>Device</Text>
        <Text style={[styles.text, styles.textTypo]}>100%</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    top: 0,
    height: 41,
    width: 307,
    left: 0,
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
  groupChild: {
    backgroundColor: Color.colorBlack,
  },
  device: {
    top: 7,
    width: 129,
  },
  text: {
    top: 21,
    width: 291,
  },
  groupWrapper: {
    top: 51,
    height: 41,
    width: 307,
    left: 0,
    position: "absolute",
  },
});

export default DynamicComponent;

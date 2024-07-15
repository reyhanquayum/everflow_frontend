import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

export type NewsWrapperType = {
  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NewsWrapper = ({ propTop }: NewsWrapperType) => {
  const groupPressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.favoritesInner, groupPressableStyle]}
      onPress={() => navigation.navigate("MyDevices")}
    >
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={styles.news}>News</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 41,
    width: 307,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorBlack,
  },
  news: {
    top: 7,
    left: 11,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBurlywood,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 129,
    height: 10,
    position: "absolute",
  },
  favoritesInner: {
    top: 63,
    left: 14,
    height: 41,
    width: 307,
    position: "absolute",
  },
});

export default NewsWrapper;

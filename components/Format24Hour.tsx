import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontSize, Border, FontFamily } from "../GlobalStyles";

export type Format24HourType = {
  headline?: string;

  /** Style props */
  format24HourPosition?: string;
  format24HourBackgroundColor?: string;
  format24HourWidth?: number | string;
  format24HourHeight?: number | string;
  format24HourTop?: number | string;
  format24HourLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Format24Hour = ({
  headline = "Enter time",
  format24HourPosition,
  format24HourBackgroundColor,
  format24HourWidth,
  format24HourHeight,
  format24HourTop,
  format24HourLeft,
}: Format24HourType) => {
  const format24HourStyle = useMemo(() => {
    return {
      ...getStyleValue("position", format24HourPosition),
      ...getStyleValue("backgroundColor", format24HourBackgroundColor),
      ...getStyleValue("width", format24HourWidth),
      ...getStyleValue("height", format24HourHeight),
      ...getStyleValue("top", format24HourTop),
      ...getStyleValue("left", format24HourLeft),
    };
  }, [
    format24HourPosition,
    format24HourBackgroundColor,
    format24HourWidth,
    format24HourHeight,
    format24HourTop,
    format24HourLeft,
  ]);

  return (
    <View style={[styles.format24Hour, format24HourStyle]}>
      <View style={[styles.header, styles.headerFlexBox]}>
        <Text style={[styles.title, styles.titleTypo]}>{headline}</Text>
      </View>
      <View style={[styles.inputSelection, styles.actionsFlexBox]}>
        <View style={[styles.hourMinuteSelector, styles.headerFlexBox]}>
          <View style={styles.hour}>
            <View style={[styles.inputField, styles.inputFlexBox]}>
              <Text style={[styles.timeText, styles.timeLayout]}>20</Text>
              <View style={styles.cursorLayout} />
            </View>
            <Text style={[styles.timeLabel, styles.titleTypo]}>Hour</Text>
          </View>
          <Text style={[styles.separator, styles.separatorTypo]}>:</Text>
          <View style={styles.hour}>
            <View style={[styles.inputField1, styles.inputFlexBox]}>
              <Text style={[styles.timeText1, styles.separatorTypo]}>00</Text>
              <View style={[styles.cursor1, styles.cursorLayout]} />
            </View>
            <Text style={[styles.timeLabel, styles.titleTypo]}>Minute</Text>
          </View>
        </View>
      </View>
      <View style={[styles.actions, styles.actionsFlexBox]}>
        <View style={[styles.iconButton, styles.stateFlexBox]}>
          <View style={styles.container}>
            <View style={[styles.stateLayer, styles.stateFlexBox]}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.actions1}>
          <View style={styles.buttonLayout}>
            <View style={[styles.stateLayer1, styles.stateFlexBox]}>
              <Text style={[styles.labelText, styles.titleTypo1]}>Cancel</Text>
            </View>
          </View>
          <View style={[styles.primaryButton, styles.buttonLayout]}>
            <View style={[styles.stateLayer1, styles.stateFlexBox]}>
              <Text style={[styles.labelText, styles.titleTypo1]}>OK</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerFlexBox: {
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  titleTypo: {
    textAlign: "left",
    color: Color.m3SysLightOnSurfaceVariant,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  actionsFlexBox: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "stretch",
  },
  inputFlexBox: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_5xs,
    height: 72,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  timeLayout: {
    lineHeight: 52,
    fontSize: FontSize.size_26xl,
  },
  separatorTypo: {
    color: Color.m3SysLightOnSurface,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
  },
  cursorLayout: {
    marginLeft: 1,
    height: 42,
    width: 2,
    backgroundColor: Color.m3SysLightPrimary,
  },
  stateFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleTypo1: {
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
  },
  buttonLayout: {
    height: 40,
    overflow: "hidden",
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    letterSpacing: 1,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
  },
  header: {
    paddingTop: Padding.p_5xl,
  },
  timeText: {
    color: Color.m3SysLightOnPrimaryContainer,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
  },
  inputField: {
    backgroundColor: Color.m3SysLightPrimaryContainer,
    borderStyle: "solid",
    borderColor: Color.m3SysLightPrimary,
    borderWidth: 2,
  },
  timeLabel: {
    marginTop: 7,
    letterSpacing: 0,
    fontFamily: FontFamily.robotoRegular,
    alignSelf: "stretch",
  },
  hour: {
    flex: 1,
  },
  separator: {
    fontSize: FontSize.size_38xl,
    lineHeight: 64,
    display: "flex",
    width: 24,
    height: 72,
    color: Color.m3SysLightOnSurface,
    justifyContent: "center",
    alignItems: "center",
  },
  timeText1: {
    lineHeight: 52,
    fontSize: FontSize.size_26xl,
  },
  cursor1: {
    display: "none",
  },
  inputField1: {
    backgroundColor: Color.m3SysLightSurfaceContainerHighest,
  },
  hourMinuteSelector: {
    paddingVertical: 0,
    justifyContent: "center",
  },
  inputSelection: {
    justifyContent: "center",
    flex: 1,
  },
  icon: {
    height: 24,
    width: 24,
  },
  stateLayer: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    overflow: "hidden",
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconButton: {
    width: 48,
    height: 48,
    justifyContent: "center",
  },
  labelText: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
    color: Color.m3SysLightPrimary,
    letterSpacing: 0,
    textAlign: "center",
  },
  stateLayer1: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  primaryButton: {
    marginLeft: 8,
  },
  actions1: {
    flexDirection: "row",
  },
  actions: {
    justifyContent: "space-between",
    paddingLeft: Padding.p_xs,
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_xl,
    flexDirection: "row",
  },
  format24Hour: {
    borderRadius: Border.br_9xl,
    backgroundColor: Color.m3SysLightSurfaceContainerHigh,
    width: 264,
    height: 243,
  },
});

export default Format24Hour;

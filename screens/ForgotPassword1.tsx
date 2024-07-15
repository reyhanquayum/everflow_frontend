import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const ForgotPassword1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.forgotPassword2}>
      <Text style={styles.instructionsOnHow}>
        Instructions on how to reset your password has been sent to your email
      </Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={[styles.buttonChild, styles.enterPosition]} />
        <Text style={[styles.enter, styles.enterPosition]}>Back to Login</Text>
      </Pressable>
      <Image
        style={[styles.image4Icon, styles.enterPosition]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 22,
    width: 119,
  },
  enterPosition: {
    left: 0,
    position: "absolute",
  },
  instructionsOnHow: {
    top: 395,
    left: 65,
    fontSize: FontSize.size_xl,
    color: Color.colorBurlywood,
    width: 260,
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorBurlywood,
    top: 0,
    left: 0,
    height: 22,
    width: 119,
  },
  enter: {
    top: 2,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    height: 18,
    left: 0,
    width: 119,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  button: {
    top: 501,
    left: 136,
    position: "absolute",
    height: 22,
  },
  image4Icon: {
    width: 390,
    height: 335,
    top: 0,
    left: 0,
  },
  forgotPassword2: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ForgotPassword1;

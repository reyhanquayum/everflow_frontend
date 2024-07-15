import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <View style={[styles.password, styles.passwordLayout]}>
        <View style={[styles.passwordChild, styles.childPosition]} />
        <Text style={[styles.password1, styles.logo1FlexBox]}>Password</Text>
      </View>
      <View style={[styles.username, styles.passwordLayout]}>
        <View style={[styles.passwordChild, styles.childPosition]} />
        <Text style={[styles.password1, styles.logo1FlexBox]}>Email</Text>
      </View>
      <View style={[styles.logo, styles.logoLayout]}>
        <View style={[styles.logoChild, styles.logoLayout]} />
        <Text style={[styles.logo1, styles.logoLayout]}>Logo</Text>
      </View>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={styles.enter}>Forgot Password</Text>
      </Pressable>
      <Pressable
        style={[styles.button1, styles.buttonLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={styles.enter}>Enter</Text>
      </Pressable>
      <Pressable
        style={[styles.button2, styles.buttonLayout]}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={styles.enter}>Create Account</Text>
      </Pressable>
      <View style={styles.loginChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordLayout: {
    height: 37,
    width: 264,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  logo1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBurlywood,
    fontFamily: FontFamily.interRegular,
    left: 0,
  },
  logoLayout: {
    height: 77,
    width: 164,
    position: "absolute",
  },
  buttonLayout: {
    height: 22,
    width: 119,
    position: "absolute",
  },
  passwordChild: {
    height: 37,
    width: 264,
    position: "absolute",
  },
  password1: {
    top: 3,
    fontSize: FontSize.size_xl,
    height: 30,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBurlywood,
    fontFamily: FontFamily.interRegular,
    width: 264,
    position: "absolute",
  },
  password: {
    top: 511,
    left: 63,
    height: 37,
  },
  username: {
    top: 423,
    left: 63,
    height: 37,
  },
  logoChild: {
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  logo1: {
    fontSize: 29,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBurlywood,
    fontFamily: FontFamily.interRegular,
    left: 0,
    top: 0,
    width: 164,
  },
  logo: {
    top: 166,
    left: 113,
  },
  buttonChild: {
    backgroundColor: Color.colorBurlywood,
    height: 22,
    left: 0,
    top: 0,
  },
  enter: {
    top: 2,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    height: 18,
    width: 119,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    left: 0,
    position: "absolute",
  },
  button: {
    top: 643,
    left: 136,
    height: 22,
  },
  button1: {
    top: 599,
    left: 136,
    height: 22,
  },
  button2: {
    top: 687,
    left: 136,
    height: 22,
  },
  loginChild: {
    top: 259,
    left: 105,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  login: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Login;

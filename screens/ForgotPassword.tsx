import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.forgotPassword}>
      <View style={[styles.username, styles.usernameLayout]}>
        <View style={[styles.usernameChild, styles.childPosition]} />
        <Text style={[styles.email, styles.emailFlexBox]}>Email</Text>
      </View>
      <Text style={[styles.enterTheEmail, styles.emailFlexBox]}>
        Enter the email you used to create your account
      </Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("ForgotPassword1")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={styles.enter}>Enter</Text>
      </Pressable>
      <Image
        style={[styles.image2Icon, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={[styles.image2Icon, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  usernameLayout: {
    height: 37,
    width: 264,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  emailFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBurlywood,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  buttonLayout: {
    height: 22,
    width: 119,
    position: "absolute",
  },
  usernameChild: {
    left: 0,
    height: 37,
    width: 264,
    position: "absolute",
    backgroundColor: Color.colorBlack,
  },
  email: {
    top: 3,
    height: 30,
    left: 0,
    width: 264,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBurlywood,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  username: {
    top: 433,
    left: 61,
  },
  enterTheEmail: {
    top: 344,
    left: 65,
    width: 260,
    height: 31,
  },
  buttonChild: {
    backgroundColor: Color.colorBurlywood,
    left: 0,
    top: 0,
  },
  enter: {
    top: 2,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
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
    top: 519,
    left: 136,
  },
  image2Icon: {
    width: 390,
    height: 335,
    left: 0,
    position: "absolute",
    top: 0,
  },
  forgotPassword: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});

export default ForgotPassword;

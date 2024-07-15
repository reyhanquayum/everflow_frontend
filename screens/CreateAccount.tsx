import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const CreateAccount = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createAccount}>
      <View style={[styles.password, styles.passwordLayout]}>
        <View style={[styles.passwordChild, styles.childPosition]} />
        <Text style={styles.password1}>Password</Text>
      </View>
      <View style={[styles.username, styles.passwordLayout]}>
        <View style={[styles.passwordChild, styles.childPosition]} />
        <Text style={styles.password1}>Email</Text>
      </View>
      <View style={[styles.password2, styles.passwordLayout]}>
        <View style={[styles.passwordChild, styles.childPosition]} />
        <Text style={styles.password1}>Last Name</Text>
      </View>
      <View style={[styles.username1, styles.passwordLayout]}>
        <View style={[styles.passwordChild, styles.childPosition]} />
        <Text style={styles.password1}>First Name</Text>
      </View>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("CreateAccount1")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={styles.enter}>Create Account</Text>
      </Pressable>
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
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
    top: 0,
    left: 0,
  },
  buttonLayout: {
    height: 22,
    width: 119,
    position: "absolute",
  },
  passwordChild: {
    left: 0,
    height: 37,
    width: 264,
    position: "absolute",
    backgroundColor: Color.colorBlack,
  },
  password1: {
    top: 3,
    fontSize: FontSize.size_xl,
    color: Color.colorBurlywood,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    left: 0,
    width: 264,
    position: "absolute",
  },
  password: {
    top: 365,
    left: 63,
    width: 264,
  },
  username: {
    top: 331,
    left: 63,
    width: 264,
  },
  password2: {
    top: 449,
    left: 63,
    width: 264,
  },
  username1: {
    top: 407,
    left: 63,
    width: 264,
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
    top: 494,
    left: 136,
  },
  image4Icon: {
    top: -10,
    width: 390,
    height: 335,
    left: 0,
    position: "absolute",
  },
  createAccount: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});

export default CreateAccount;

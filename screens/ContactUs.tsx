import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, Modal, TextInput } from "react-native";
import Menu from "../components/Menu";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ContactUs = () => {
  const [hamburgerContainerVisible, setHamburgerContainerVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const openHamburgerContainer = useCallback(() => {
    setHamburgerContainerVisible(true);
  }, []);

  const closeHamburgerContainer = useCallback(() => {
    setHamburgerContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.contactUs}>
        <Pressable style={styles.hamburger} onPress={openHamburgerContainer}>
          <View style={[styles.hamburgerChild, styles.hamburgerLayout]} />
          <View style={[styles.hamburgerItem, styles.hamburgerLayout]} />
          <View style={[styles.hamburgerInner, styles.hamburgerLayout]} />
        </Pressable>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <TextInput
            style={[styles.messageTitle, styles.messageFlexBox]}
            placeholder="Message Title"
            placeholderTextColor={Color.colorBlack}
            value={messageTitle}
            onChangeText={setMessageTitle}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <TextInput
            style={[styles.messageText, styles.groupInnerLayout]}
            placeholder="Message Text"
            placeholderTextColor={Color.colorBlack}
            value={messageContent}
            onChangeText={setMessageContent}
            multiline
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.submit, styles.messageFlexBox]}>Submit</Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={hamburgerContainerVisible}>
        <View style={styles.hamburgerContainerOverlay}>
          <Pressable style={styles.hamburgerContainerBg} onPress={closeHamburgerContainer} />
          <Menu onClose={closeHamburgerContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  hamburgerLayout: {
    height: 11,
    backgroundColor: Color.colorBurlywood,
    left: 0,
    width: 60,
    position: "absolute",
  },
  rectangleLayout: {
    height: 39,
    position: "absolute",
  },
  groupPosition: {
    height: 38,
    top: 1,
    width: 336,
    left: 0,
    position: "absolute",
  },
  messageFlexBox: {
    width: 334,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 2,
    top: 0,
  },
  rectanglePosition: {
    left: 27,
    width: 336,
  },
  groupInnerLayout: {
    height: 403,
    position: "absolute",
  },
  hamburgerContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  hamburgerContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  hamburgerChild: {
    top: 0,
    height: 11,
  },
  hamburgerItem: {
    top: 18,
  },
  hamburgerInner: {
    top: 36,
  },
  hamburger: {
    top: 20,
    height: 47,
    width: 60,
    position: "absolute",
    left: 25,
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro_100,
  },
  messageTitle: {
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 2,
    height: 39,
    position: "absolute",
  },
  rectangleParent: {
    top: 105,
    width: 336,
    left: 25,
    height: 39,
  },
  groupItem: {
    backgroundColor: Color.colorBurlywood,
    top: 1,
  },
  submit: {
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 2,
    height: 39,
    position: "absolute",
  },
  rectangleGroup: {
    top: 582,
    height: 39,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.colorGainsboro_100,
    width: 336,
    left: 0,
    height: 403,
    top: 0,
  },
  messageText: {
    width: 334,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 2,
    top: 0,
    color: Color.colorBlack,
  },
  rectangleContainer: {
    top: 158,
    left: 27,
    width: 336,
  },
  contactUs: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ContactUs;

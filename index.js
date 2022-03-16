import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";

const TestScreen = (props) => {
  console.log(props);
  return (
    <View>
      <QRCode value="http://awesome.link.qr" />
    </View>
  );
};
export const applyCustomCode = (externalCodeSetup) => {
  // call custom code api here
  externalCodeSetup.navigationApi.addNavigationRoute(
    "testScreen",
    "TestScreen",
    TestScreen,
    "All"
  );
  externalCodeSetup.navigationApi.replaceScreenComponent(
    "ProfilePhotos",
    (props) => {
      return (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("testScreen");
            }}
          >
            <Text>Press Here</Text>
          </TouchableOpacity>
        </View>
      );
    }
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});


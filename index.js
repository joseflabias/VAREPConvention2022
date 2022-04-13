
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import ScheduleScreen from "./Screens/Schedule";

export const applyCustomCode = (externalCodeSetup) => {
  // call custom code api here
  ScheduleScreen.navigationOptions = {
    title: "SCHEDULE",
    headerStyle: {
      backgroundColor: "#C0223E",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "Liberator",
      fontSize: 30,
    },
  };
  externalCodeSetup.navigationApi.addNavigationRoute(
    "ScheduleScreen",
    "ScheduleScreen",
    ScheduleScreen,
    "Main"
  );
  externalCodeSetup.navigationApi.replaceScreenComponent(
    "ProfilePhotos",
    (props) => {
      return (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("TestScreen");
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


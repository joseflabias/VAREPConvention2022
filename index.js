import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ScheduleScreen from "./Screens/Schedule";
import FastImage from "react-native-fast-image";

import ActivitiesScreen from "@src/containers/Custom/ActivitiesScreen";
import { DEVICE_WIDTH } from "@src/styles/global";

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
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 50, alignSelf: "center" }}>
            <FastImage
              style={{ width: DEVICE_WIDTH, height: 110, marginBottom: 10 }}
              source={{
                uri: "https://varep.net/wp-content/uploads/2020/12/s5_logo-1.png",
              }}
            />
          </View>

          <View style={{ flex: 1 }}>
            <ActivitiesScreen
              {...props}
              headerHeight={50}
              screenTitle="Activity List"
              showSearch={false}
              hideFilters={true}
              hideTitle={true}
              hideNavigationHeader={true}
            />
          </View>
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

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ScheduleScreen from "./Screens/Schedule";
import QRPass from "./Screens/QRPass";
import EventActivity from "./Screens/EventActivity";
import SponsorScreen from "./Screens/SponsorScreen";
import SessionScreen from "./Screens/SessionScreen";
import Notes from "./Screens/Notes";

import { HEADER_COLOR } from "./config";

export const applyCustomCode = (externalCodeSetup) => {
  // call custom code api here
  ScheduleScreen.navigationOptions = {
    title: "SCHEDULE",
    headerStyle: {
      backgroundColor: HEADER_COLOR,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "Liberator",
      fontSize: 30,
    },
  };
  EventActivity.navigationOptions = {
    title: "FEED",
    headerStyle: {
      backgroundColor: HEADER_COLOR,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "Liberator",
      fontSize: 30,
    },
  };
  Notes.navigationOptions = {
    title: "NOTES",
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: HEADER_COLOR,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "Liberator",
      fontSize: 30,
    },
  };
  QRPass.navigationOptions = {
    title: "QR CODE",
    headerStyle: {
      backgroundColor: HEADER_COLOR,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "Liberator",
      fontSize: 30,
    },
  };
  SponsorScreen.navigationOptions = {
    title: "SPONSORS",
    headerStyle: {
      backgroundColor: HEADER_COLOR,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "Liberator",
      fontSize: 30,
    },
  };
  SessionScreen.navigationOptions = {
    title: "Session Details",
    headerStyle: {
      backgroundColor: HEADER_COLOR,
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
  externalCodeSetup.navigationApi.addNavigationRoute(
    "QRPass",
    "QRPass",
    QRPass,
    "Main"
  );
  externalCodeSetup.navigationApi.addNavigationRoute(
    "EventActivity",
    "EventActivity",
    EventActivity,
    "Main"
  );
  externalCodeSetup.navigationApi.addNavigationRoute(
    "SponsorScreen",
    "SponsorScreen",
    SponsorScreen,
    "Main"
  );
  externalCodeSetup.navigationApi.addNavigationRoute(
    "SessionScreen",
    "SessionScreen",
    SessionScreen,
    "All"
  );
  externalCodeSetup.navigationApi.addNavigationRoute(
    "Notes",
    "Notes",
    Notes,
    "All"
  );

  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
  });
};

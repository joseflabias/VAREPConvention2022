import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import ScheduleScreen from "./Screens/Schedule";
import QRPass from "./Screens/QRPass";
import EventActivity from "./Screens/EventActivity";
import SponsorScreen from "./Screens/SponsorScreen";
import SessionScreen from "./Screens/SessionScreen";
import Notes from "./Screens/Notes";
import HomeScreen from "./Screens/HomeScreen";

import {
  HEADER_COLOR
} from "./config";
import HotelScreen from "./Screens/HotelScreen";
import MediaScreen from "./Screens/MediaScreen";
import SocialScreen from "./Screens/SocialScreen";
import NetworkScreen from "./Screens/NetworkScreen";
import ResourceScreen from "./Screens/ResourceScreen";

export const applyCustomCode = (externalCodeSetup) => {
  // call custom code api here
  ScheduleScreen.navigationOptions = {
    title: "SCHEDULE",
    headerStyle: {
      backgroundColor: HEADER_COLOR,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "League Gothic",
      fontSize: 30,
    },
  };
  HotelScreen.navigationOptions = {
    title: "Hotel",
    headerStyle: {
      backgroundColor: HEADER_COLOR,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "League Gothic",
      fontSize: 30,
    },
  };
  MediaScreen.navigationOptions = {
    title: "Media",
    headerStyle: {
      backgroundColor: HEADER_COLOR,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "League Gothic",
      fontSize: 30,
    },
  };
  SocialScreen.navigationOptions = {
    title: "Social",
    headerStyle: {
      backgroundColor: HEADER_COLOR,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "League Gothic",
      fontSize: 30,
    },
  };
  ResourceScreen.navigationOptions = {
    title: "Resource",
    headerStyle: {
      backgroundColor: HEADER_COLOR,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "League Gothic",
      fontSize: 30,
    },
  };
  NetworkScreen.navigationOptions = {
    title: "Network",
    headerStyle: {
      backgroundColor: HEADER_COLOR,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "League Gothic",
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
      fontFamily: "League Gothic",
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
      fontFamily: "League Gothic",
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
      fontFamily: "League Gothic",
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
      fontFamily: "League Gothic",
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
      fontFamily: "League Gothic",
      fontSize: 30,
    },
  };
  HomeScreen.navigationOptions = {
    headerShown: false,
  };
  // MediaScreen.navigationOptions = {
  //   headerShown: false,
  // };

  externalCodeSetup.navigationApi.addNavigationRoute(
    "ScheduleScreen",
    "ScheduleScreen",
    ScheduleScreen,
    "All"
  );
  externalCodeSetup.navigationApi.addNavigationRoute(
    "HomeScreen",
    "HomeScreen",
    HomeScreen,
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
  externalCodeSetup.navigationApi.addNavigationRoute(
    "HotelScreen",
    "HotelScreen",
    HotelScreen,
    "All"
  );
  externalCodeSetup.navigationApi.addNavigationRoute(
    "MediaScreen",
    "MediaScreen",
    MediaScreen,
    "All"
  );
  externalCodeSetup.navigationApi.addNavigationRoute(
    "NetworkScreen",
    "NetworkScreen",
    NetworkScreen,
    "All"
  );
  externalCodeSetup.navigationApi.addNavigationRoute(
    "ResourceScreen",
    "ResourceScreen",
    ResourceScreen,
    "All"
  );
  externalCodeSetup.navigationApi.addNavigationRoute(
    "SocialScreen",
    "SocialScreen",
    SocialScreen,
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
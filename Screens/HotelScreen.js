import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { WebView } from "react-native-webview";

export default function HotelScreen() {
  return (
    <View style={{ flex: 1, marginVertical: 5, marginHorizontal: 10 }}>
      <WebView
        source={{
          uri: "https://varep.net/media/convention/app/maps/2023-PolicyConference-Hotel-Map.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

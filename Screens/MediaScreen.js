import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import React from "react";
import FastImage from "react-native-fast-image";

export default function MediaScreen() {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: "https://convention.varep.net/media-videos" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "10%",
  },
});

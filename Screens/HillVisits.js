import { View, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

export default function HillVisits() {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: "https://convention.varep.net/hill-visits" }} />
    </View>
  );
}

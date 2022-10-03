import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

export default function ResourceScreen() {
  const INJECTED_JAVASCRIPT = `(function() {
    const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
  })();`;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://convention.varep.net/app-resource/" }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

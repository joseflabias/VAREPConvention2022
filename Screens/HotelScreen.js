import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { WebView } from "react-native-webview";

export default function HotelScreen() {
  // const [floor, setFloor] = useState(second);
  return (
    <View style={{ flex: 1, marginVertical: 5, marginHorizontal: 10 }}>
      <WebView
        source={{
          uri: "https://www.varep.net/media/convention/app/maps/hotel_third_floor.jpeg",
        }}
      />
      <WebView
        source={{
          uri: "https://www.varep.net/media/convention/app/maps/hotel_second_floor.jpeg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";

export default function HomeSquare({ img, navigation, dst }) {
  return (
    <View style={{ flex: 1, marginVertical: 10 }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(dst)}
      >
        <FastImage
          style={styles.img}
          source={{ uri: img }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
  },
  button: {
    width: "100%",
    height: 200,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
});

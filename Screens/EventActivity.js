import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";

import ActivitiesScreen from "@src/containers/Custom/ActivitiesScreen";
import { DEVICE_WIDTH } from "@src/styles/global";

export default function EventActivity() {
  return (
    <View>
      <View style={{ marginTop: 50, alignSelf: "center" }}>
        <FastImage
          style={{ width: DEVICE_WIDTH, height: 110, marginBottom: 10 }}
          source={{
            uri: "https://varep.net/wp-content/uploads/2020/12/s5_logo-1.png",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

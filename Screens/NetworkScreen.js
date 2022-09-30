import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MembersScreen from "@src/containers/Custom/MembersScreen";

export default function NetworkScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <MembersScreen
        {...props}
        hideTitle={true}
        hideNavigationHeader={true}
        headerHeight={130}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

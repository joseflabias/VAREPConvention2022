import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

import React from "react";
import { HEADER_COLOR } from "../config";

export default function QRPass({ screenProps }) {
  const user = screenProps.auth.user;
  const userInfo = {
    id: user.user_id,
    name: user.user_nicename,
    email: user.user_email,
  };

  const stringObj = JSON.stringify(userInfo);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>VAREP</Text>
        <Text style={styles.headerText}>EVENT PASS</Text>
      </View>
      <View style={styles.qrCard}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.name}>{userInfo.name.toUpperCase()}</Text>
          <QRCode value={`${stringObj}`} size={250} />
        </View>

        <View>
          <Text style={[styles.name, { textAlign: "center" }]}>
            Hold your phone up to the scanner
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  qrCard: {
    backgroundColor: HEADER_COLOR,
    marginBottom: 140,
    marginHorizontal: 20,
    borderRadius: 50,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontFamily: "Liberator",
    fontSize: 40,
  },
  name: {
    marginVertical: 20,
    fontFamily: "Roboto Slab",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
});

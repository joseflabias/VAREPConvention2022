import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import ActivitiesScreen from "@src/containers/Custom/ActivitiesScreen";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import { DEVICE_WIDTH, DEVICE_HEIGHT } from "@src/styles/global";

import { ErrorBoundary } from "react-native-error-boundary";


export default function EventActivity(props) {
  const [randomNumber, setRandomNumber] = useState(
    "https://varep.net/wp-content/uploads/2020/12/s5_logo-1.png"
  );
  const [data, setData] = useState([]);
  const sponsors = [];
  for (const sponsor of data) {
    sponsors.push(sponsor.logo);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage = Math.floor(Math.random() * sponsors.length);
      setRandomNumber(sponsors[randomImage]);
    }, 5000);
    return () => clearInterval(interval);
  }, [sponsors, randomNumber]);
  useEffect(() => {
    fetch("https://varep.net/wp-content/themes/customify-child/Convention.json")
      .then((response) => response.json())
      .then((json) => setData(json.sponsors))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", paddingTop: 5 }}>
        <Text style={styles.sponsorText}>Sponsored By:</Text>
        <FastImage
          style={styles.sponsorBanner}
          source={{
            uri: `${randomNumber}`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ActivitiesScreen
          {...props}
          headerHeight={5}
          screenTitle="Activity List"
          showSearch={false}
          hideFilters={true}
          hideTitle={true}
          hideNavigationHeader={true}
        />
      </View>

      <TouchableOpacity
        style={styles.postButton}
        onPress={() => props.navigation.push("ActivitiesCreatePostScreen")}
      >
        <Icon name="add-circle" size={50} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sponsorBanner: {
    width: 200,
    height: 75,
    marginVertical: 5,
  },
  sponsorText: {
    fontSize: 20,
    fontFamily: "Roboto Slab",
    fontWeight: "bold",
  },
  postButton: {
    position: "absolute",
    left: DEVICE_WIDTH - 55,
    right: 0,
    top: 100,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 12,
  },
});

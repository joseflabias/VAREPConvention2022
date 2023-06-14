import React from "react";
import { View, Image, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

const HomeScreenTest = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: "http://varep.net/media/convention/app/headers/APP_HEADER.png",
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <FastImage
          style={styles.image}
          source={{
            uri: "http://varep.net/media/convention/app/headers/APP_HEADER.png",
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <FastImage
          style={styles.image}
          source={{
            uri: "http://varep.net/media/convention/app/headers/APP_HEADER.png",
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <FastImage
          style={styles.image}
          source={{
            uri: "http://varep.net/media/convention/app/headers/APP_HEADER.png",
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <FastImage
          style={styles.image}
          source={{
            uri: "http://varep.net/media/convention/app/headers/APP_HEADER.png",
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <FastImage
          style={styles.image}
          source={{
            uri: "http://varep.net/media/convention/app/headers/APP_HEADER.png",
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
});

export default HomeScreenTest;

"use strict";
import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { API_BASE_URL, SPONSOR_BASE_URL } from "../config";
import FastImage from "react-native-fast-image";
import axios from "axios";

import { WebView } from "react-native-webview";

export default function SponsorScreen() {
  const sponsorURL = `${API_BASE_URL}/sponsors`;
  const [refreshing, setRefreshing] = useState(false);

  const [allSponsors, setAllSponsors] = useState([]);
  const fetchData = async () => {
    const result = await axios(sponsorURL);
    const sortedSponsors = result.data.sort((a, b) =>
      a.Title.localeCompare(b.Title)
    );
    setAllSponsors(sortedSponsors);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item, index }) => {
    const imgUrl =
      item.Banner != null
        ? SPONSOR_BASE_URL + item.Banner
        : SPONSOR_BASE_URL + "speaker_holder.png";
    return (
      <View style={styles.item}>
        <Text style={styles.sponsorText}>{item.Title}</Text>
        <View style={styles.imgContainer}>
          <FastImage
            style={styles.img}
            source={{
              uri: `${imgUrl}`,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View></View>
      </View>
    );
  };
  const INJECTED_JAVASCRIPT = `(function() {
    const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
  })();`;
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://convention.varep.net/app-sponsors/" }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  thankyouText: {
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 20,
    margin: 25,
  },
  item: {
    margin: 10,
  },
  imgContainer: {},
  sponsorText: {
    fontSize: 25,
    marginBottom: 5,
    fontWeight: "bold",
  },
  img: {
    width: "100%",
    height: 30,
  },
});

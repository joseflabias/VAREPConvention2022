"use strict";
import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { API_BASE_URL, SPONSOR_BASE_URL } from "../config";
import FastImage from "react-native-fast-image";
import axios from "axios";
export default function SponsorScreen() {
  const sponsorURL = `${API_BASE_URL}/sponsors`;

  const [allSponsors, setAllSponsors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(sponsorURL);
      const sortedSponsors = result.data.sort((a, b) =>
        a.Title.localeCompare(b.Title)
      );
      setAllSponsors(sortedSponsors);
    };

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

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.thankyouText}>Special Thank You to Our Sponsors</Text>
      {allSponsors.length > 0 ? (
        <FlatList
          data={allSponsors}
          renderItem={renderItem}
          keyExtractor={(item) => item.SponsorID}
        />
      ) : (
        <Text>Loading</Text>
      )}
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

import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/FontAwesome5";
const Dates = {
  sat: 0,
  sun: 1,
  mon: 2,
};

export default function AllSessions({ date }) {
  const [allSessions, setAllSessions] = useState();
  axios.get("https://varep.net/wp-json/varepcc/v1/sessions").then((resp) => {
    setAllSessions(resp.data.sessions);
  });
  useEffect(() => {
    if (allSessions) {
      console.log(allSessions[date]);
    }
  }, [date]);

  const Item = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemHeader}>
          <FastImage
            style={styles.sponsorBanner}
            source={{
              uri: `https://varep.net/media/convention/sessions/${item.type.toLowerCase()}.png`,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center ",
            alignItems: "center",
          }}
        >
          <Text>
            {item.type} · {item.time} · {item.location}
          </Text>
        </View>
        <Icon name="comments" size={30} color="#900" />
      </View>
    );
  };
  return (
    <View>
      {allSessions && (
        <FlatList
          style={{ paddingHorizontal: 20, marginTop: 5 }}
          data={allSessions[date]}
          renderItem={Item}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sponsorBanner: {
    width: 75,
    height: 75,
    marginVertical: 5,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    fontWeight: "bold",
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 20,
  },
  item: {
    borderColor: "#808080",
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
});

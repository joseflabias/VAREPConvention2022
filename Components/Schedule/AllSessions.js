import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import { BASE_URL } from "../../config";

export default function AllSessions({ date, navigation }) {
  const [allSessions, setAllSessions] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${BASE_URL}/sessions/${date}`);

      setAllSessions(result.data);
    };

    fetchData();
  }, [date]);

  const Item = ({ item }) => {
    const a = item.Start.split(" ");
    const d = a[0].split("-");
    const t = a[1].split(":");
    const formattedStart = new Date(d[0], d[1] - 1, d[2], t[0], t[1]);
    return (
      <View style={styles.item}>
        <View style={styles.timeBanner}>
          <Text style={styles.timeText}>
            {formattedStart.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.push("SessionScreen", {
              sessionID: item.SessionID,
            })
          }
        >
          <View style={styles.itemHeader}>
            <FastImage
              style={styles.sponsorBanner}
              source={{
                uri: `https://varep.net/media/convention/sessions/${item.Type.toLowerCase()}.png`,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.itemTitle}>{item.Title}</Text>
            <Icon name="chevron-right" size={50} />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>
              {item.Type.toLowerCase()} · Location: {item.Location}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      {allSessions != null && (
        <FlatList
          data={allSessions}
          style={{ paddingHorizontal: 10, marginTop: 5 }}
          renderItem={Item}
          keyExtractor={(item) => item.SessionID}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sponsorBanner: {
    width: 75,
    height: 75,
    marginVertical: 1,
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
  timeBanner: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#808080",
    color: "#fff",
    alignContent: "center",
    height: 40,
  },
  timeText: {
    color: "#fff",
    fontFamily: "Liberator",
    marginLeft: 20,
    fontSize: 20,
  },
});

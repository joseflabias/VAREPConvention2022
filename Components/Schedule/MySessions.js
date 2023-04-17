import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import FastImage from "react-native-fast-image";
import AsyncStorage from "@react-native-community/async-storage";

import { YEAR } from "../../config";

export default function MySessions({ date, navigation }) {
  const [allSessions, setAllSessions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const jsonValue = await AsyncStorage.getItem(`@${YEAR}_MY_SESSIONS}`);
      const obj = jsonValue ? JSON.parse(jsonValue) : {};
      const list = obj["" + date] ? obj["" + date] : [];
      console.log(obj);
      list.sort((a, b) => {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.Start) - new Date(b.Start);
      });

      setAllSessions(list);
    };

    fetchData();
  }, [date]);

  const confirmDelete = (item) =>
    Alert.alert(
      "Remove Session from My Schedule",
      "Confirm Removal.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Remove Session", onPress: () => deleteItem(item) },
      ],
      { cancelable: true }
    );

  const deleteItem = async (session) => {
    const sessions = [...allSessions];
    const itemIndex = sessions.findIndex((item) => {
      return item.SessionID == session.SessionID;
    });
    if (itemIndex > -1) {
      sessions.splice(itemIndex, 1);
      setAllSessions(sessions);
    }

    try {
      const jsonValue = await AsyncStorage.getItem(`@${YEAR}_MY_SESSIONS}`);
      const obj = jsonValue ? JSON.parse(jsonValue) : {};

      const date = new Date(session.Start);
      obj["" + date.getDate()] = sessions;

      await AsyncStorage.setItem(`@${YEAR}_MY_SESSIONS}`, JSON.stringify(obj));
      setAllSessions(sessions);
    } catch (error) {
      console.log("hello from errors", error);
    }
  };
  const Item = ({ item }) => {
    const formattedStart = new Date(item.Start);

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
          onLongPress={() => {
            confirmDelete(item);
          }}
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
            <Text style={[styles.buttonText, { fontSize: 50 }]}>﹥</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Location: {item.Location}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={allSessions}
        style={{ paddingHorizontal: 10, marginTop: 5 }}
        renderItem={Item}
        keyExtractor={(item) => allSessions.indexOf(item)}
        extraData={allSessions}
        ListEmptyComponent={() => (
          <View
            style={{
              alignItems: "center",
              alignContent: "center",
              paddingTop: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "Liberator",
                fontSize: 25,
                textAlign: "center",
              }}
            >
              Add Sessions to My Schedule from Event Schedule Page!
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sponsorBanner: {
    width: 75,
    height: 75,
    marginVertical: 1,
    alignItems: "center",
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
    backgroundColor: "#18325a",
    color: "#fff",
    alignContent: "center",
    height: 40,
    marginBottom: 5,
  },
  timeText: {
    color: "#fff",
    fontFamily: "Robot Slab",
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

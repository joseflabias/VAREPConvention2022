import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import HorizontalPicker from "@vseslav/react-native-horizontal-picker";
import AllSessions from "../Components/Schedule/AllSessions";
import MySessions from "../Components/Schedule/MySessions";
import Speakers from "../Components/Schedule/Speakers";
import { YEAR } from "../config";
const dates = [
  { id: 0, day: "Monday", number: "25" },
  { id: 1, day: "Tuesday", number: "26" },
  { id: 2, day: "Wednesday", number: "27" },
];

export default function ScheduleScreen(props) {
  const [activeItem, setActiveItem] = useState(0);
  const [activeMenu, setActiveMenu] = useState("event");

  const renderItem = (item, index) => {
    return (
      <View
        style={[
          index == activeItem ? styles.item : styles.itemInactive,
          { width: 102 },
        ]}
      >
        <Text style={styles.itemText}>Jun. {item.number}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ backgroundColor: "#fff", paddingTop: 10, paddingBottom: 10 }}
      >
        <HorizontalPicker
          data={dates}
          renderItem={renderItem}
          itemWidth={103}
          onChange={(index) => {
            setActiveItem(index);
          }}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            setActiveMenu("event");
          }}
        >
          <Text
            style={[
              activeMenu == "event" ? styles.selectedText : styles.itemText,
              styles.buttonText,
            ]}
          >
            Event Schedule
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            setActiveMenu("me");
          }}
        >
          <Text
            style={[
              activeMenu == "me" ? styles.selectedText : styles.itemText,
              styles.buttonText,
            ]}
          >
            My Schedule
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            setActiveMenu("speaker");
          }}
        >
          <Text
            style={[
              activeMenu == "speaker" ? styles.selectedText : styles.itemText,
              styles.buttonText,
            ]}
          >
            Speakers
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.dateText}>
        {dates[activeItem].day}, June {dates[activeItem].number}, {YEAR}{" "}
      </Text>
      {activeMenu == "event" && (
        <AllSessions {...props} date={dates[activeItem].number} />
      )}
      {activeMenu == "me" && (
        <MySessions {...props} date={dates[activeItem].number} />
      )}
      {activeMenu == "speaker" && <Speakers />}
    </View>
  );
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: 20,
    fontFamily: "Roboto Slab",
    fontWeight: "bold",
    color: "#fff",
  },
  dateText: {
    color: "#18325a",
    fontFamily: "League Gothic",
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 10,
    textAlign: "center",
  },
  item: {
    backgroundColor: "#18325a",
    alignItems: "center",
    marginHorizontal: 5,
    paddingBottom: 5,
    borderTopWidth: 7,
  },
  itemInactive: {
    backgroundColor: "#65B52E",
    alignItems: "center",
    marginHorizontal: 5,
    paddingBottom: 5,
  },
  circle: {
    borderRadius: 300,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    width: 48,
  },
  circleText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(9, 20, 35, 0.4)",
    paddingVertical: 15,
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 19,
  },
  selectedText: {
    fontSize: 19,
    fontWeight: "bold",
    fontFamily: "Roboto Slab",
  },
});

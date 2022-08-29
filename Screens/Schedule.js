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

const dates = [
  { id: 0, day: "Sunday", number: "9" },
  { id: 1, day: "Monday", number: "10" },
  { id: 2, day: "Tuesday", number: "11" },
];
/*



*/
export default function ScheduleScreen(props) {
  const [activeItem, setActiveItem] = useState(0);
  const [activeMenu, setActiveMenu] = useState("event");

  const renderItem = (item, index) => {
    return (
      <View
        style={[
          index == activeItem ? styles.item : styles.itemInactive,
          { width: 98 },
        ]}
      >
        <Text style={styles.itemText}>{item.day}</Text>
        <View style={styles.circle}>
          <Text style={styles.circleText}>{item.number}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "rgba(145, 144, 144, 0.7)" }}>
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
    fontSize: 18,
    fontFamily: "Roboto Slab",
  },
  item: {
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    marginHorizontal: 5,
    paddingBottom: 5,
    borderTopWidth: 7,
  },
  itemInactive: {
    backgroundColor: "rgba(0.769,0.769,0.769,0.10)",
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
  },
});

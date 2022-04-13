import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";

export default function AllSessions({ date }) {
  const [allSessions, setAllSessions] = useState();

  axios.get("https://varep.net/wp-json/varepcc/v1/sessions").then((resp) => {
    console.log(resp.data);
  });
  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

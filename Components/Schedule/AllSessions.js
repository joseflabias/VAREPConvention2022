import { StyleSheet, Text, View, SectionList } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
      console.log(allSessions[date][0]);
    }
  }, [date]);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import axios from "axios";
import FastImage from "react-native-fast-image";

export default function SessionScreen({ navigation }) {
  const sessionID = navigation.state.params.sessionID;
  const [session, setSession] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`https://varep.net/wp-json/varepcc/v1/sessions/id/${sessionID}`)
      .then((response) => {
        setSession(response.data[0]);
        setIsLoaded(true);
      });
  }, []);

  return (
    <View>
      {!isLoaded && <Text>loading...</Text>}
      {isLoaded && <Text>SessionScreen: {session.Title} Here</Text>}
    </View>
  );
}

const styles = StyleSheet.create({});

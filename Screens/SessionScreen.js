import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";

import axios from "axios";
import SessionDetails from "../Components/Schedule/SessionDetails";
import { BASE_URL } from "../config";

function convertDate(date) {
  const a = date.split(" ");
  const d = a[0].split("-");
  const t = a[1].split(":");
  const formattedDate = new Date(d[0], d[1] - 1, d[2], t[0], t[1]);
  return formattedDate;
}

export default function SessionScreen({ navigation }) {
  const sessionID = navigation.state.params.sessionID;
  const [isLoaded, setIsLoaded] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const sessionURL = `${BASE_URL}/sessions/id/${sessionID}`;
    const sponsorURL = `${BASE_URL}/sponsors/${sessionID}`;
    const presenterURL = `${BASE_URL}/sessions/presenters/${sessionID}`;
    const speakerURL = `${BASE_URL}/sessions/speakers/${sessionID}`;

    const requestSession = axios.get(sessionURL);
    const requestSponsor = axios.get(sponsorURL);
    const requestPresenter = axios.get(presenterURL);
    const requestSpeaker = axios.get(speakerURL);

    axios
      .all([requestSession, requestSponsor, requestPresenter, requestSpeaker])
      .then(
        axios.spread((...responses) => {
          const newSession = responses[0].data[0];
          newSession.Start = convertDate(newSession.Start);
          newSession.End = convertDate(newSession.End);
          if (responses[1].data.errors == null)
            newSession.sponsors = responses[1].data;
          if (responses[2].data.errors == null)
            newSession.presenters = responses[2].data;
          if (responses[3].data.errors == null)
            newSession.speakers = responses[3].data;

          setSession(newSession);
        })
      )
      .finally(() => {
        setIsLoaded(true);
      });
  }, [sessionID]);

  return (
    <View style={{ flex: 1 }}>
      {!isLoaded && <Text> Please Wait. Loading....</Text>}
      {isLoaded && <SessionDetails props={[session, navigation]} />}
    </View>
  );
}
const styles = StyleSheet.create({});

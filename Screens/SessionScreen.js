import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

import axios from "axios";
import SessionDetails from "../Components/Schedule/SessionDetails";

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
    const sessionURL = `https://varep.net/wp-json/varepcc/v1/sessions/id/${sessionID}`;
    const sponsorURL = `https://varep.net/wp-json/varepcc/v1/sponsors/${sessionID}`;
    const presenterURL = `https://varep.net/wp-json/varepcc/v1/sessions/presenters/${sessionID}`;
    const speakerURL = `https://varep.net/wp-json/varepcc/v1/sessions/speakers/${sessionID}`;

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
      {!isLoaded && <Text>Loading...</Text>}
      {isLoaded && <SessionDetails props={session} />}
    </View>
  );
}
const styles = StyleSheet.create({});

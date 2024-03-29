import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FastImage from "react-native-fast-image";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { WEEKDAYS, MONTHS, YEAR } from "../../config";
import { get12HourTime } from "../../Screens/utils";
import HTMLView from "react-native-htmlview";

export default function SessionDetails({ props }) {
  const session = props[0];
  const navigation = props[1];

  const [saved, setSaved] = useState(false);

  const saveToMySchedule = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@${YEAR}_MY_SESSIONS}`);
      const obj = jsonValue ? JSON.parse(jsonValue) : {};

      if (obj[session.Start.getDate()] != null) {
        if (
          !obj[session.Start.getDate()].some(
            (element) => element.SessionID == session.SessionID
          )
        ) {
          obj[session.Start.getDate()].push(session);
        }
      } else {
        obj[session.Start.getDate()] = [session];
      }

      await AsyncStorage.setItem(`@${YEAR}_MY_SESSIONS}`, JSON.stringify(obj));

      setSaved(true);
    } catch (error) {
      console.log("hello from errors", error);
    }
  };

  let sessionStart = get12HourTime(session.Start);
  let sessionEnd = get12HourTime(session.End);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentInset={{ bottom: 100 }}
    >
      <View style={styles.imgContainer}>
        <FastImage
          style={styles.sponsorBanner}
          source={{
            uri: `https://varep.net/media/convention/sessions/${session.Type.toLowerCase()}.png`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.titleText}>{session.Title}</Text>
        <Text style={styles.locationText}>{session.Location}</Text>
        <Text style={styles.timeText}>
          {WEEKDAYS[session.Start.getDay()]}, {MONTHS[session.Start.getMonth()]}{" "}
          {session.Start.getDate()}, {sessionStart} - {sessionEnd}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.push("Notes", {
              session: session,
            });
          }}
        >
          <View style={styles.button}>
            {/* <Icon name="sticky-note" size={43} /> */}
            <Text style={[styles.buttonText, { fontSize: 30 }]}>📝</Text>
            <Text style={styles.buttonText}>Add Notes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={saveToMySchedule}>
          <View>
            <View style={styles.button}>
             
              <Text style={[styles.buttonText, { fontSize: 30 }]}>🔔</Text>
              <Text style={[styles.buttonText]}>Add to My Schedule</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        {session.sponsors != null && (
          <View>
            <Text style={styles.detailHeading}>Sponsored By</Text>
            {session.sponsors.map((sponsor) => {
              return (
                <FastImage
                  style={styles.sponsorImg}
                  source={{
                    uri: `https://varep.net/media/convention/sponsors/${sponsor.Banner.toLowerCase()}`,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              );
            })}
          </View>
        )}
        {session.Description != null && (
          <View>
            <Text style={styles.detailHeading}>Description</Text>
            <HTMLView
              value={`<a id='desc'>${session.Description}</a>`}
              stylesheet={stylesHTML}
            />
          </View>
        )}

        {session.presenters != null && (
          <View>
            <Text style={styles.detailHeading}>Presenters</Text>
            {session.presenters.map((presenter) => {
              return (
                <View>
                  <Text style={styles.presenterLabel}>
                    {"\u2022"} {presenter.Company} - {presenter.Title}:{" "}
                    {presenter.Name}
                  </Text>
                </View>
              );
            })}
          </View>
        )}
        {session.speakers != null && (
          <View>
            <Text style={styles.detailHeading}>Speakers</Text>
            {session.speakers.map((presenter) => {
              return (
                <View>
                  <Text style={styles.presenterLabel}>
                    {"\u2022"} {presenter.Company} - {presenter.Title}:{" "}
                    {presenter.Name}
                  </Text>
                </View>
              );
            })}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  sponsorBanner: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  imgContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  titleText: {
    paddingTop: 13,
    fontFamily: "Roboto Slab",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  locationText: {
    fontFamily: "Roboto Slab",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
  },
  timeText: {
    fontFamily: "Roboto Slab",
    paddingTop: 6,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    borderColor: "#000",
    marginTop: 28,
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Roboto Slab",
    fontSize: 16,
    fontWeight: "bold",
  },
  detailsContainer: {
    flex: 2,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  detailHeading: {
    fontFamily: "Roboto Slab",
    fontSize: 27,
    marginTop: 15,
    fontWeight: "bold",
    color: "#65B52E",
  },
  sponsorImg: {
    width: "100%",
    height: 30,
    marginVertical: 20,
  },
  descText: {
    marginVertical: 10,
    marginHorizontal: 5,
    fontFamily: "Roboto Slab",
    fontSize: 17,
  },
  presenterLabel: {
    marginVertical: 10,
    fontFamily: "Roboto Slab",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const stylesHTML = StyleSheet.create({
  a: {
    fontSize: 17,
    fontFamily: "Roboto Slab",
  },
});

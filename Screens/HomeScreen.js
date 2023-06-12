import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import HomeSquare from "../Components/Schedule/HomeSquare";

export default function HomeScreen(props) {
  const { navigation } = props;
  const HotelBtn =
    "http://varep.net/media/convention/app/buttons/BUTTON_Hotel.png";
  const MediaBtn =
    "http://varep.net/media/convention/app/buttons/BUTTON_Media.png";
  const NetworkBtn =
    "http://varep.net/media/convention/app/buttons/BUTTON_Network.png";
  const ResourceBtn =
    "http://varep.net/media/convention/app/buttons/BUTTON_Resource.png";
  const SocialBtn =
    "http://varep.net/media/convention/app/buttons/BUTTON_Social.png";
  const AgendaBtn =
    "http://varep.net/media/convention/app/buttons/BUTTON_Agenda.png";
  const HillBtn =
    "http://varep.net/media/convention/app/buttons/BUTTON_Hill_Visit.jpg";

  const handleHillPress = () => {
    console.log("Hill Pressed");
    return navigation.push("HillVisits");
  };
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.banner}
        source={{
          uri: "http://varep.net/media/convention/app/headers/APP_HEADER.png",
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <HomeSquare
            img={AgendaBtn}
            dst="ScheduleScreen"
            navigation={navigation}
          />
          <HomeSquare
            img={HotelBtn}
            dst="HotelScreen"
            navigation={navigation}
          />
        </View>
        <View style={styles.row}>
          <HomeSquare
            img={MediaBtn}
            dst="MediaScreen"
            navigation={navigation}
          />
          <HomeSquare
            img={ResourceBtn}
            dst="ResourceScreen"
            navigation={navigation}
          />
        </View>
        <View style={styles.row}>
          <HomeSquare
            img={SocialBtn}
            dst="ActivitiesScreen"
            navigation={navigation}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Button 6</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.buttonText}>Bottom Button</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: 200,
  },
  gridContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 100,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  bottomButton: {
    width: "100%",
    height: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});

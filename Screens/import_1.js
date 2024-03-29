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
    <View style={{ flex: 1 }}>
      <FastImage
        style={styles.img}
        source={{
          uri: "http://varep.net/media/convention/app/headers/APP_HEADER.png",
        }}
      />
      <ScrollView
        contentContainerStyle={{ flex: 2 }}
        contentInset={{ bottom: 80 }}
      >
        <View
          style={{
            flexDirection: "column",
            flex: 1,
          }}
        >
          <View style={[styles.grid_row, { flex: 2 }]}>
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
          <View style={[styles.grid_row, { flex: 2 }]}>
            <HomeSquare
              img={SocialBtn}
              dst="ActivitiesScreen"
              navigation={navigation}
            />
            <HomeSquare
              {...props}
              img={NetworkBtn}
              dst="NetworkScreen"
              navigation={navigation}
            />
          </View>
          <View style={[styles.grid_row, { flex: 2 }]}>
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
          <View style={[styles.grid_row, { flex: 1 }]}>
            <TouchableOpacity onPress={handleHillPress}>
              <View style={[styles.square]}>
                <FastImage
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: HillBtn }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "20%",
  },
  grid_row: {
    flexDirection: "row",
  },
  square: {
    backgroundColor: "#173859",
    width: 400, // 2 x square width + space between squares
    height: 100,
    marginLeft: 10,
  },
});

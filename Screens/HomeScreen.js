import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import FastImage from "react-native-fast-image";

const HomeScreen = (props) => {
  const { navigation } = props;
  const handleHillPress = () => {
    return navigation.push("HillVisits");
  };
  return (
    <ScrollView
      contentContainerStyle={ styles.container}
      contentInset={{ bottom: 80 }}
    >
      <View style={styles.content}>
        <FastImage
          style={styles.imagebib}
          source={{
            uri: "http://varep.net/media/convention/app/buttons/headerb.jpg",
          }}
        />
        <View style={styles.gridContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ScheduleScreen")}
          >
            <FastImage
              style={styles.image}
              source={{
                uri: "http://varep.net/media/convention/app/buttons/BUTTON_Agenda.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("HotelScreen")}
          >
            <FastImage
              style={styles.image}
              source={{
                uri: "http://varep.net/media/convention/app/buttons/BUTTON_Hotel.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ActivitiesScreen")}
          >
            <FastImage
              style={styles.image}
              source={{
                uri: "http://varep.net/media/convention/app/buttons/BUTTON_Social.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("NetworkScreen")}
          >
            <FastImage
              style={styles.image}
              source={{
                uri: "http://varep.net/media/convention/app/buttons/BUTTON_Network.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("MediaScreen")}
          >
            <FastImage
              style={styles.image}
              source={{
                uri: "http://varep.net/media/convention/app/buttons/BUTTON_Media.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ResourceScreen")}
          >
            <FastImage
              style={styles.image}
              source={{
                uri: "http://varep.net/media/convention/app/buttons/BUTTON_Resource.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 5,
  },
  imagebib: {
    width: "100%",
    height: 220,
    marginBottom: 5,
  },
  buttonhill: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  hills: {
    width: "100%",
    height: 120,
    marginBottom: 5,
  },
});

export default HomeScreen;

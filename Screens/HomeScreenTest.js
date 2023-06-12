import { View, Text } from "react-native";
import React from "react";
import HomeSquare from "../Components/Schedule/HomeSquare";

const HomeScreenTest = () => {
  const { navigation } = props;
  const AgendaBtn =
    "http://varep.net/media/convention/app/buttons/BUTTON_Agenda.png";
  return (
    <View style={styles.container}>
      <Image
        source={require("http://varep.net/media/convention/app/headers/APP_HEADER.png")} // Replace with your image source
        style={styles.banner}
      />
      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <HomeSquare
            img={AgendaBtn}
            dst="ScheduleScreen"
            navigation={navigation}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Button 2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Button 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Button 4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Button 5</Text>
          </TouchableOpacity>
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
};

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
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    width: "48%",
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
    height: 60,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});

export default HomeScreenTest;

"use strict";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert,
  useWindowDimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { API_BASE_URL, SPEAKER_BASE_URL } from "../../config";
import FastImage from "react-native-fast-image";
import axios from "axios";

export default function Speakers() {
  const speakerURL = `${API_BASE_URL}/speakers`;

  const [allSpeakers, setAllSpeakers] = useState([]);
  const [bio, setBio] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(speakerURL);
      const sortedSpeakers = result.data.sort((a, b) =>
        a.Name.localeCompare(b.Name)
      );
      setAllSpeakers(sortedSpeakers);
    };
    fetchData();
  }, []);
  const renderItem = ({ item, index }) => {
    const imgUrl =
      item.Image != null
        ? SPEAKER_BASE_URL + item.Image
        : SPEAKER_BASE_URL + "speaker_holder.png";
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          setBio(item.Bio);
          setModalVisible(true);
        }}
      >
        <View style={styles.imgContainer}>
          <FastImage
            style={styles.img}
            source={{
              uri: `${imgUrl}`,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View>
          <Text style={styles.name}>{item.Name}</Text>
          <Text style={styles.title}>
            {item.Company} - {item.Title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const { width } = useWindowDimensions();
  console.log(bio);
  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.bioTitle}>Speaker Bio</Text>
              <Text>{bio}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      {allSpeakers.length > 0 ? (
        <FlatList
          data={allSpeakers}
          renderItem={renderItem}
          keyExtractor={(item) => item.SpeakerID}
        />
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 100,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 5,
  },
  img: {
    width: 75,
    height: 75,
    borderColor: "black",
    borderRadius: 500,
    borderWidth: 3,
    marginHorizontal: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
  },
  bioTitle: {
    fontFamily: "League Gothic",
    fontSize: 30,
    fontWeight: "bold",
  },
});

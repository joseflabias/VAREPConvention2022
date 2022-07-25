import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useState, useEffect } from "react";
import { MONTHS, WEEKDAYS } from "../config";
import { YEAR } from "../config";

export default function Notes({ navigation }) {
  const session = navigation.state.params.session;
  const [saved, setSaved] = useState(false);
  const [notes, setNotes] = useState("");

  const saveNote = async () => {
    setSaved(true);
    const jsonValue = await AsyncStorage.getItem(
      `@${YEAR}_NOTES_${session.Start.getDate()}`
    );
    const obj = jsonValue ? JSON.parse(jsonValue) : {};
    obj[session.SessionID] = notes;
    try {
      await AsyncStorage.setItem(
        `@${YEAR}_NOTES_${session.Start.getDate()}`,
        JSON.stringify(obj)
      );
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const getData = async () => {
      const jsonValue = await AsyncStorage.getItem(
        `@${YEAR}_NOTES_${session.Start.getDate()}`
      );
      const obj = jsonValue ? JSON.parse(jsonValue) : {};
      setNotes(obj[session.SessionID]);
    };
    getData().catch(console.error);
  }, []);

  const updatedText = (txt) => {
    setSaved(false);
    setNotes(txt);
  };

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableResetScrollToCoords={false}
        bounces={false}
        contentInsetAdjustmentBehavior="always"
        overScrollMode="always"
        showsVerticalScrollIndicator={true}
      >
        <View>
          <View style={styles.headerContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.titleText}>{session.Title}</Text>
              <Text style={styles.timeText}>
                {WEEKDAYS[session.Start.getDay()]},{" "}
                {MONTHS[session.Start.getMonth()]} {session.Start.getDate()},{" "}
                {session.Start.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                -{" "}
                {session.End.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
            </View>
            <View style={styles.rightContainer}>
              <TouchableOpacity onPress={saveNote}>
                <View style={styles.saveButton}>
                  {saved ? (
                    <Text
                      style={{
                        paddingHorizontal: 50,
                        paddingVertical: 10,
                        fontSize: 20,
                        fontFamily: "Roboto Slab",
                        color: "#fff",
                      }}
                    >
                      Saved
                    </Text>
                  ) : (
                    <Text
                      style={{
                        paddingHorizontal: 50,
                        paddingVertical: 10,
                        fontSize: 20,
                        fontFamily: "Roboto Slab",
                        color: "#fff",
                      }}
                    >
                      Save
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <TextInput
            onChangeText={(txt) => {
              updatedText(txt);
            }}
            placeholder="Notes Here...."
            fontSize={18}
            multiline
            style={[
              styles.input,
              styles.multilineInput,
              styles.largeMultilineInput,
            ]}
            value={notes}
            defaultValue={notes}
          />
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: 14,
    flexWrap: "wrap",
  },
  multilineInput: {
    height: 200,
    textAlign: "left",
    textAlignVertical: "top",
  },
  largeMultilineInput: {
    height: 500,
  },
  input: {
    alignSelf: "stretch",
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    color: "black",
    fontSize: 18,
    height: 60,
    marginBottom: 30,
    padding: 10,
  },
  leftContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flexShrink: 1,
    width: "60%",
  },
  saveButton: {
    backgroundColor: "#9F3939",
  },
  rightContainer: {
    justifyContent: "center", //Centered vertically
  },
  titleText: {
    fontFamily: "Roboto Slab",
    fontWeight: "bold",
    fontSize: 23,
  },
  timeText: {
    fontFamily: "Roboto Slab",
    fontWeight: "100",
    fontSize: 16,
  },
  textContainer: {
    backgroundColor: "#FAF9F6",
    borderRadius: 16,
    alignSelf: "stretch",
    flexGrow: 1,
  },
  textInput: {
    textAlignVertical: "top",
    fontSize: 30,
    paddingHorizontal: 15,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
});

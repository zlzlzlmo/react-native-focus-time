import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../components/RoundedButton";
import { colors } from "../utils/colors";

export const Focus = () => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput label="Focus Item" />
      <RoundedButton title="+" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.5,
    padding: 25,
    justifyContent: "flex-start",
  },
  text: {
    color: colors.white,
  },
});

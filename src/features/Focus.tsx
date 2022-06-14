import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../components/RoundedButton";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import useFocus from "./useFocus";

interface Props {
  addSubject: React.Dispatch<React.SetStateAction<string>>;
}

export const Focus = ({ addSubject }: Props) => {
  const { handleSubject, handleAddSubject } = useFocus({ addSubject });
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="Focus Item"
          onChangeText={handleSubject}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={handleAddSubject} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});

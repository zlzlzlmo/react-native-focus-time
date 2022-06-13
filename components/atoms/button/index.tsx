import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import { colors } from "../../../styles/variables";

const BasicButton = () => {
  return <Button title="로그인테스트" onPress={() => {}} />;
};

export default BasicButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.mainColor,
    textAlign: "center",
  },
});

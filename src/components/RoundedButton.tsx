import React from "react";
import { View } from "react-native";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

interface Props {
  style?: object;
  textStyle?: object;
  size?: number;
  title?: string;
  onPress?: () => void;
}

// TouchableOpacity 는 클릭했을때 opacity 효과가  들어가는 api이다.
const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.radius,
        { borderRadius: size / 2, width: size, height: size, ...style },
      ]}
      onPress={props.onPress}
    >
      <Text style={[styles.text, { fontSize: size / 3 }]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({
  radius: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.white,
    borderWidth: 2,
  },
  text: {
    color: colors.white,
  },
});

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Countdown } from "../components/Cutdown";
import RoundedButton from "../components/RoundedButton";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";

interface Props {
  focusSubject: string;
}

const Timer = ({ focusSubject }: Props) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <View style={styles.cutdown}>
        <Countdown
          minutes={2}
          isPaused
          onProgress={() => {}}
          onEnd={() => {}}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focus on</Text>
          <Text style={styles.taks}>{focusSubject}</Text>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <RoundedButton title="start" />
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cutdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  taks: {
    color: colors.white,
    textAlign: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("Login")}>ㅎㅎ</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

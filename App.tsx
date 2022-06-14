import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Focus } from "./src/features/Focus";
import { colors } from "./src/utils/colors";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <View>
          <Text style={styles.text}>하이</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

// flex 1을 줌으로써 full screen을 쓴다는 설정이된다
//SafeAreaView는 휴대폰 기기의 경계선에 알맞게 렌더링을 해준다
// 현재 IOS 디바이스에만 적용인된다. (11버전 이상)
// 때문에 안드로이드는 Platform과 StatusBar Api를 사용해서 상태표시줄 만큼 padding top을 해줘야한다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
  },
});

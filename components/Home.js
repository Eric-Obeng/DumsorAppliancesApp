import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, Rect } from "react-native-svg";
import { useFonts } from "expo-font";
import ShopList from "./ShopList";
import _layout from "../app/_layout";

const Home = ({ navigation }) => {
  // const [fontsLoaded] = useFonts({
  //   "Ubuntu-Bold": require("../assets/fonts/Ubuntu-Bold.ttf"),
  // });
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" backgroundColor="#702C45" />
        <View style={styles.logo}>
          <Image source={require("../assets/images/logo.png")} />
        </View>
        <View style={styles.displayImage}>
          <Image
            source={require("../assets/images/klipartz-5.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/shadow.png")}
            style={styles.shadow}
          />
        </View>
        <View style={styles.svg}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="91"
            height="11"
            viewBox="0 0 91 11"
            fill="none"
          >
            <Circle cx="5.5" cy="5.5" r="5.5" fill="#702C45" />
            <Circle
              cx="45.5"
              cy="5.5"
              r="4"
              stroke="#702C45"
              stroke-width="3"
            />
            <Circle
              cx="85.5"
              cy="5.5"
              r="4"
              stroke="#702C45"
              stroke-width="3"
            />
          </Svg>
        </View>
        <TouchableOpacity
          style={styles.shopBtn}
          onPress={() => navigation.navigate("ShopList")}
        >
          <Text style={styles.shopText}>Shop</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  displayImage: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    zIndex: 2,
  },
  shadow: {
    // position: 'absolute'
    top: -60,
    zIndex: 1,
  },
  svg: {
    flex: 1,
  },
  shopBtn: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    width: 295,
    gap: 10,
    // paddingVertical: 6,
    // paddingHorizontal: 24,
    backgroundColor: "#702C45",
    borderRadius: 7,
    bottom: 50,
  },
  shopText: {
    color: "#FFF",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "500",
  },
});

export default Home;

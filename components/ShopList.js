import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path, Rect } from "react-native-svg";
import { Cart } from "../assets/icons";
import Categories from "./Categories";
import Toprated from "./Toprated";
import Energysaver from "./Energysaver";

const ShopList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.user}>
        <View style={styles.userNameDisplay}>
          <View>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Rect width="10.9091" height="10.9091" rx="3" fill="#702C45" />
              <Rect
                y="13.0909"
                width="10.9091"
                height="10.9091"
                rx="3"
                fill="#702C45"
              />
              <Rect
                x="13.0909"
                width="10.9091"
                height="10.9091"
                rx="3"
                fill="#702C45"
              />
              <Rect
                x="13.0909"
                y="13.0909"
                width="10.9091"
                height="10.9091"
                rx="3"
                fill="#702C45"
              />
            </Svg>
          </View>
          <Text>Hello, Psalmist</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
          <Image source={Cart} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Categories style={styles.categories} />
        <Energysaver />
        <Toprated />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  userNameDisplay: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  // main: {
  //   flex: 1,
  // },
  categories: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ShopList;

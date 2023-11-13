import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { Star } from "../assets/icons";
import { AddBtn } from "../assets/icons";
import { useNavigation } from "@react-navigation/native";
import EnergySaverProducts from "./cards/EnergySaverProducts";

const Energysaver = ({ route }) => {
  const navigation = useNavigation()
  const { product } = route?.params || {};
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  const handleProductPress = (item) => {
    navigation.navigate("ProductDetailsScreen", { product: item });
  };

  const renderProducts = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => handleProductPress(item)}
      style={styles.itemsContainer}
      activeOpacity={0.7}
    >
      <ImageBackground style={styles.productCard}>
        <View style={styles.rating}>
          <Image source={Star} />
          <Text style={{ color: "#FFF" }}>5.4</Text>
        </View>
        <Image source={item.image} style={styles.productCard_image} />
        <View style={styles.details}>
          <View>
            <Text style={styles.productCard_name}>{item.name}</Text>
            <Text style={styles.productCard_walt}>{item.walts}</Text>
          </View>
          <Text style={styles.productCard_price}>{item.price}</Text>
          <TouchableOpacity
            style={styles.addToCart}
          >
            <Image source={AddBtn} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Energy Saver</Text>
        <TouchableOpacity>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <FlatList
          data={EnergySaverProducts}
          renderItem={renderProducts}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemsContainer: {
    flex: 1,
    padding: 10,
  },
  productCard: {
    justifyContent: "center",
    alignItems: "center",
    width: 165,
    height: 232,
    borderRadius: 20,
    backgroundColor: "#FFCC0040",
  },
  rating: {
    position: "absolute",
    top: 0,
    right: -1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    gap: 5.4,
    backgroundColor: "#702C45",
  },
  details: {
    width: 148,
    height: 110,
    borderRadius: 18,
    backgroundColor: "#FFF",
    padding: 5,
    justifyContent: "flex-end",
    gap: 5,
    position: "absolute",
    bottom: 8,
    zIndex: 1,
  },
  addToCart: {
    position: "absolute",
    right: 0,
    zIndex: 2,
  },
  productCard_image: {
    position: "absolute",
    top: 25,
    zIndex: 2,
  },
  productCard_name: {
    color: "#000",
    fontSize: 14,
    fontWeight: "700",
  },
  productCard_walt: {
    letterSpacing: 0.5,
    lineHeight: 23,
  },
  productCard_price: {
    letterSpacing: 0.5,
    lineHeight: 22,
    fontWeight: "700",
  },
});
export default Energysaver;

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Cart } from "../../assets/icons";
import { useCart } from "../context/useCartContext";
// import Prompt from 'react-native-prompt'

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { cart, addToCart } = useCart();

  const isItemInCart = cart.some((item) => item.id === product.id);
  const [promptVisible, setPromptVisible] = useState(false);

  const handleAddtoCart = () => {
    if (isItemInCart) {
      setPromptVisible(true);
    } else {
      addToCart(product);
      navigation.navigate("CartScreen");
    }
  };

  const handlePrompt = (response) => {
    setPromptVisible(flase);
    if (response === "Yes") {
      addToCart(product);
      navigation.navigate("CartScreen");
    }
  };

  return (
    <SafeAreaView style={styles.productDetailsContainer}>
      <View style={styles.productDetailsTopBar}>
        <TouchableOpacity onPress={() => navigation.navigate("ShopList")}>
          <Image source={ArrowLeft} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
          <Image source={Cart} />
        </TouchableOpacity>
      </View>
      <View style={styles.productDetailsImageDiv}>
        <Image source={product.image} style={styles.productImage} />
      </View>
      <View style={styles.productInfo}>
        <View style={styles.productStoreRating}>
          <View style={styles.productStoreDiv}>
            <Text style={styles.productStoreText}>{product.store}</Text>
          </View>
          <View>
            <Text></Text>
          </View>
        </View>
        <View style={styles.productInfoDetails}>
          <View>
            <Text>{product.info}</Text>
          </View>
          <View>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
          <View>
            <Text>{product.delivery}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.addToCartBtn} onPress={handleAddtoCart}>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </TouchableOpacity>
      {/* <Prompt
        title="Item Already in Cart" placeholder='Yes or No'
        visible={promptVisible}
        onCancel={() => setPromptVisible(false)}
        onSubmit={handlePrompt}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productDetailsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 20,
    backgroundColor: "#FAFAFA",
  },
  productDetailsTopBar: {
    flex: 0.02,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 15,
  },
  productDetailsImageDiv: {
    flex: 1.3,
    alignItems: "center",
    justifyContent: "center",
    // width: 244,
  },
  productImage: {
    resizeMode: "contain",
    height: 244,
    width: 244,
  },
  productInfo: {
    flex: 1.3,
    gap: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    // marginBottom: 10,
  },
  productInfoDetails: {
    gap: 20,
    padding: 20,
  },
  productStoreRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productStoreDiv: {
    padding: 10,
    justifyContent: "center",
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  productStoreText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },
  addToCartBtn: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 10,
    backgroundColor: "#702C45",
    borderRadius: 7,
    // bottom: 50,
  },
  addToCartText: {
    color: "#FFF",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "500",
  },
});
export default ProductDetailsScreen;

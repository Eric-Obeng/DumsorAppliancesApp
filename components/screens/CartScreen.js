import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "../context/useCartContext";

const CartScreen = () => {
  const { cart } = useCart();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Cart Items:</Text>
          {cart.map((product, index) => (
            <View key={index} style={styles.cartItems}>
              <View>
                <Image source={product.image} />
              </View>
              <View>
                <Text>{product.name}</Text>
                <Text>{product.watt}</Text>
                <Text>{product.price}</Text>
              </View>
              <View>
                <Text>Quantity</Text>
                <View>
                  <Text>-</Text>
                  <Text>1</Text>
                  <Text>+</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 20,
  },
  cartItems: {
    flexDirection: "row",
    backgroundColor: "#FFCC0040",
    borderRadius: 30,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CartScreen;

import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../Store/cartSlice";
import COLORS from "../../../../styles/Colors";
import Globals from "../../../../styles/Globals";

export default function ProductCard() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/products/product1.png")}
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.textCategoty}>Loucas e metais</Text>
        <Text style={styles.textName}>Torneira Puravida Hansgrohe</Text>
      </View>
      <TouchableOpacity
        style={styles.productBtn}
        onPress={() => dispatch(addToCart(1))}
      >
        <Text style={[Globals.text, { color: COLORS.white }]}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 141,
    height: 223,
    borderColor: COLORS.darkGray,
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: 125,
    height: 108,
    borderRadius: 8,
    marginBottom: 8,
  },
  textCategoty: {
    fontSize: 10,
    fontWeight: "400",
    color: COLORS.darkGray,
  },
  textName: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 8,
  },
  textContainer: {},
  productBtn: {
    width: 125,
    height: 25,
    borderRadius: 25,
    backgroundColor: COLORS.orange,
    alignItems: "center",
    justifyContent: "center",
  },
});

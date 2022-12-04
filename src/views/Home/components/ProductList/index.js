import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../../../styles/Colors";
import Globals from "../../../../styles/Globals";
import ProductCard from "../ProductCard";

export default function ProductList() {
  const multiple = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <View style={{ paddingLeft: "5%" }}>
      <Text style={[Globals.textDefault, { marginVertical: 10 }]}>
        Produstos Populares
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {multiple.map((item, index) => (
          <ProductCard key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

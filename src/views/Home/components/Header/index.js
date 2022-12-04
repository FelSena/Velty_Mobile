import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../../../styles/Colors";
import Globals from "../../../../styles/Globals";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={[Globals.arrowContainer, styles.header]}>
      <Image
        style={styles.img}
        source={require("../../../../assets/logo.png")}
        resizeMode="contain"
      />
      <View style={Globals.row}>
        <Icon
          name="cart-outline"
          style={[styles.headerIcon, { marginRight: 10 }]}
          onPress={() => navigation.navigate("Cart")}
        />
        <Icon name="bell-outline" style={styles.headerIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: "5%",
    height: 131,
  },
  img: {
    width: 94,
  },
  headerIcon: {
    fontSize: 26,
    color: COLORS.darkGray,
  },
});

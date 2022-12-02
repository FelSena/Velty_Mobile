import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/core";
import Globals from "../../styles/Globals";
import COLORS from "../../styles/Colors";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={Globals.container}>
      <View style={styles.containerLogo}>
        <ImageBackground
          source={require("../../assets/Vector.png")}
          resizeMode="stretch"
          style={styles.bgImage}
        >
          <Animatable.Image
            animation="flipInY"
            source={require("../../assets/logo.png")}
            resizeMode="contain"
          />
        </ImageBackground>
      </View>
      <Animatable.View animation="fadeInUp" style={styles.containerText}>
        <Text style={Globals.title1}>Bem vindo a PEX</Text>
        <Text style={Globals.textCenter}>
          Economize tempo e dinheiro em todas as etapas da sua obra. Na reforma
          ou construção nós iremos te auxiliar em tudo.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Icon name="arrow-right" size={30} color={COLORS.white} />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "5%",
  },
  bgImage: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "5%",
  },
  button: {
    width: 62,
    height: 62,
    position: "absolute",
    backgroundColor: COLORS.orange,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 32,
    bottom: 64,
  },
});

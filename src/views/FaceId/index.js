import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import BackArrow from "../../components/BackArrow";
import Button from "../../components/Button";
import Globals from "../../styles/Globals";

export default function FaceId() {
  const navigation = useNavigation();
  return (
    <ScrollView style={Globals.padContainer}>
      <View style={Globals.arrowContainer}>
        <BackArrow />
        <Text
          style={Globals.textDefault}
          onPress={() => navigation.navigate("Home")}
        >
          Pular
        </Text>
      </View>
      <View style={{ marginBottom: 50 }}>
        <Text style={Globals.title2}>Acesse com seu Face ID</Text>
        <Text style={Globals.text}>
          Habilite o Face ID para acessar de forma mais fácil e ágil a sua conta
          da PEX com toda segurança
        </Text>
        <Image
          source={require("../../assets/Illustration.png")}
          style={{ marginVertical: 60, alignSelf: "center" }}
        />
        <Button name="Habilitar FaceId" icon="face-recognition" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

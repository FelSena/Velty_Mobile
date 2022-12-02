import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import Globals from "../../styles/Globals";
import Input from "../../components/Input";
import Button from "../../components/Button";
import COLORS from "../../styles/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Insira seu email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Insira sua senha", "password");
      isValid = false;
    }
    if (isValid) {
      navigation.navigate("Home");
    }
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <ScrollView>
      <View>
        <Image
          source={require("../../assets/Header.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerForm}>
        <Text style={[Globals.title2, { marginBottom: 15 }]}>
          Bem-Vindo a PEX!
        </Text>
        <Text style={[Globals.text, { marginBottom: 15 }]}>
          Informe os seus dados para ter acesso a um mundo de economia para sua
          obra
        </Text>
        <Input
          onChangeText={(text) => handleOnchange(text, "email")}
          onFocus={() => handleError(null, "email")}
          iconName="email-outline"
          placeholder="Email"
          error={errors.email}
        />
        <Input
          onChangeText={(text) => handleOnchange(text, "password")}
          onFocus={() => handleError(null, "password")}
          iconName="lock-outline"
          placeholder="Senha"
          password
          error={errors.password}
        />
        <View style={styles.containerButtons}>
          <Text
            style={[Globals.text, { color: COLORS.orange, marginVertical: 25 }]}
          >
            Esqueci minha senha
          </Text>
          <Button name="Acessar" onPress={validate} />
          <TouchableOpacity
            style={[Globals.row, { marginVertical: 20 }]}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={Globals.text}>Não possui uma conta? </Text>
            <Text style={Globals.textOrange}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    marginTop: 20,
    paddingLeft: "5%",
    paddingRight: "5%",
    gap: 10,
  },
  containerButtons: {
    alignItems: "center",
  },
});

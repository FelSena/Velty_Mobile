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
import { Checkbox } from "react-native-paper";

export default function SignUp() {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState("unchecked");
  const [errors, setErrors] = useState({});

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (checked === "unchecked") {
      handleError("Você precisa aceitar os termos", "terms");
      isValid = false;
    }
    if (!inputs.email) {
      handleError("Email obrigatório", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Senha obrigatório", "password");
      isValid = false;
    }
    if (isValid) {
      navigation.navigate("User");
    }
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const toggleCheckbox = (value) => {
    if (checked === "unchecked") {
      setChecked("checked");
      handleError(null, "terms");
    } else {
      setChecked("unchecked");
    }
  };

  return (
    <ScrollView>
      <View>
        <Image
          source={require("../../assets/HeaderSignUp.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerForm}>
        <Text style={[Globals.title2, { marginBottom: 15 }]}>
          Crie sua conta na PEX
        </Text>
        <Text style={[Globals.text, { marginBottom: 15 }]}>
          Informe o seus dados para criar sua conta na PEX e economizar muito na
          sua obra
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
          <View style={[Globals.row, { marginBottom: 20 }]}>
            <Checkbox
              status={checked}
              onPress={toggleCheckbox}
              color={COLORS.orange}
              uncheckedColor={COLORS.darkGray}
            />
            <Text style={Globals.text}>
              Li e aceito os{" "}
              <Text
                style={{ color: COLORS.orange }}
                onPress={() => {
                  navigation.navigate("Terms");
                }}
              >
                Termos de serviço
              </Text>{" "}
              e políticia de privacidade
            </Text>
          </View>
          {errors.terms && (
            <Text
              style={[Globals.text, { color: COLORS.red, marginBottom: 10 }]}
            >
              {errors.terms}
            </Text>
          )}
          <Button name="Continuar" onPress={validate} />
          <TouchableOpacity
            style={[Globals.row, { marginVertical: 20 }]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={Globals.text}>Já possui uma conta? </Text>
            <Text style={Globals.textOrange}>Acessar</Text>
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

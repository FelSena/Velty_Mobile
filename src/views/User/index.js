import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Avatar, Accessory } from "react-native-elements";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BackArrow from "../../components/BackArrow";
import Input from "../../components/Input";
import COLORS from "../../styles/Colors";
import Globals from "../../styles/Globals";

export default function User() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={Globals.arrowContainer}>
        <BackArrow />
        <Text style={Globals.textDefault}>Dados Pessoais</Text>
        <Icon name="information-outline" style={Globals.icon} />
      </View>
      <View style={styles.avatarContainer}>
        <Avatar
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          containerStyle={{ backgroundColor: COLORS.darkGray }}
          size="large"
        >
          <Avatar.Accessory
            size={20}
            iconProps={{ size: 20 }}
            type="material-community"
            name="camera-plus"
            color={COLORS.orange}
            reverse
          />
        </Avatar>
      </View>
      <View>
        <Input iconName="account-outline" placeholder="Nome Completo" />
        <Input iconName="calendar-month" placeholder="Data de Nascimento" />
        <Input iconName="phone-outline" placeholder="Telefone" />
      </View>
      <View style={[Globals.row, { justifyContent: "space-between" }]}>
        <TouchableOpacity
          style={[
            styles.button,
            { borderWidth: 0.5, borderColor: COLORS.darkGray },
          ]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Pular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: COLORS.orange }]}
          onPress={() => navigation.navigate("FaceId")}
        >
          <Text style={{ color: COLORS.white }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    backgroundColor: COLORS.lightGray,
  },
  avatarContainer: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 151,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
});

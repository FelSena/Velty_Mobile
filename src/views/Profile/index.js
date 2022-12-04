import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../styles/Colors";
import Globals from "../../styles/Globals";
import Footer from "../Home/components/Footer";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        resizeMode="contain"
        style={styles.img}
      />
      <View style={styles.box}>
        <View style={Globals.row}>
          <Avatar
            title="FS"
            containerStyle={{ backgroundColor: COLORS.darkGray }}
            rounded
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={Globals.textDefault}>Olá, Maria</Text>
            <Text style={Globals.text}>maria@velty.com.br</Text>
          </View>
        </View>
        <Icon name="chevron-right" style={Globals.icon} />
      </View>
      <Text style={[Globals.textDefault, { marginLeft: "5%" }]}>
        Sua Conta PEX
      </Text>

      <View style={styles.box}>
        <View style={Globals.row}>
          <View style={Globals.row}>
            <Icon name="text-box-outline" style={Globals.icon} />
            <Text style={Globals.textDefault}>Cotação</Text>
          </View>
        </View>
        <Icon name="chevron-right" style={Globals.icon} />
      </View>

      <View style={styles.box}>
        <View style={Globals.row}>
          <View style={Globals.row}>
            <Icon name="headphones" style={Globals.icon} />
            <Text style={Globals.textDefault}>Ajuda e Suporte</Text>
          </View>
        </View>
        <Icon name="chevron-right" style={Globals.icon} />
      </View>

      <View style={styles.box}>
        <View style={Globals.row}>
          <View style={Globals.row}>
            <Icon name="help-circle-outline" style={Globals.icon} />
            <Text style={Globals.textDefault}>FAQ</Text>
          </View>
        </View>
        <Icon name="chevron-right" style={Globals.icon} />
      </View>
      <View style={[Globals.row, { marginLeft: "5%" }]}>
        <Icon name="logout" style={[Globals.icon, { color: COLORS.red }]} />
        <Text style={[Globals.text, { color: COLORS.red }]}>Sair da conta</Text>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  img: {
    width: 44,
    marginLeft: "5%",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "5%",
    justifyContent: "space-between",
  },
});

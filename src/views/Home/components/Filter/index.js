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

export default function Filter() {
  const [active, setActive] = useState(true);
  return (
    <View style={{ paddingLeft: "5%", alignItems: "center" }}>
      <Text style={[Globals.textDefault, { marginVertical: 10 }]}>
        Categorias
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={[
            styles.filterBtn,
            {
              backgroundColor: active && COLORS.purple,
              borderWidth: active && 0,
            },
          ]}
        >
          <Text style={[Globals.text, { color: active && COLORS.white }]}>
            Todos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={Globals.text}>Ofertas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={Globals.text}>Pisos e porcelanatos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={Globals.text}>Jardim e piscina</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={Globals.text}>Decoração</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  filterBtn: {
    minWidth: 52,
    height: 36,
    borderWidth: 1,
    borderColor: COLORS.darkGray,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginRight: 10,
    paddingHorizontal: 10,
  },
});

import { LinearGradient } from "expo-linear-gradient";
import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BackArrow from "../../components/BackArrow";
import COLORS from "../../styles/Colors";
import Globals from "../../styles/Globals";

export default function Terms() {
  const scrollRef = useRef();
  return (
    <View style={styles.container}>
      <View style={Globals.arrowContainer}>
        <BackArrow />
        <Icon name="export-variant" style={Globals.icon} />
      </View>
      <View>
        <Text style={Globals.text}>Última atualização: Outubro/2022</Text>
        <Text style={[Globals.title2, { marginTop: 0, marginBottom: 10 }]}>
          Termos de Uso
        </Text>
      </View>
      <ScrollView
        persistentScrollbar={true}
        style={styles.scroll}
        ref={scrollRef}
      >
        <Text style={Globals.textDefault}>1.Termos</Text>
        <Text style={[Globals.text, { marginBottom: 20 }]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text style={Globals.textDefault}>2.Licença de uso</Text>
        <Text style={[Globals.text, { marginBottom: 20 }]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text style={Globals.textDefault}>3.Lorem</Text>
        <Text style={[Globals.text, { marginBottom: 20 }]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text style={Globals.textDefault}>4. Lorem</Text>
        <Text style={[Globals.text, { marginBottom: 150 }]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </ScrollView>
      <LinearGradient
        colors={["transparent", COLORS.white]}
        end={{ x: 0.5, y: 0.5 }}
        style={styles.endBox}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => scrollRef.current.scrollToEnd()}
        >
          <Icon
            name="arrow-down"
            style={[Globals.icon, { color: COLORS.white }]}
          ></Icon>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "5%",
  },
  scroll: {
    paddingRight: "5%",
  },
  endBox: {
    width: "100%",
    height: 200,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
  },
  button: {
    width: 62,
    height: 62,
    backgroundColor: COLORS.orange,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

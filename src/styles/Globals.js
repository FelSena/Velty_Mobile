import { StyleSheet } from "react-native";
import COLORS from "./Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.darkGray,
  },
  textCenter: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.darkGray,
    textAlign: "center",
  },
  textOrange: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.orange,
  },
  title1: {
    fontSize: 32,
    fontWeight: "500",
    marginTop: 28,
  },
  title2: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 28,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
});
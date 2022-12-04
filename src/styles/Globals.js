import { StyleSheet } from "react-native";
import COLORS from "./Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  padContainer: {
    padding: "5%",
  },
  arrowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
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
  textDefault: {
    fontSize: 14,
    fontWeight: "500",
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
  icon: {
    fontSize: 22,
  },
});

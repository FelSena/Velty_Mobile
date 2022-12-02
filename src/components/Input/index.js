import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../styles/Colors";

export default function Input({
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <View style={{ marginBottom: 20 }}>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.orange
              : COLORS.lightGray,
          },
        ]}
      >
        <Icon name={iconName} style={styles.icon} />
        <TextInput
          secureTextEntry={hidePassword}
          {...props}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          style={styles.input}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={styles.icon}
          />
        )}
      </View>

      {error && <Text style={styles.erroText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    color: COLORS.darkGray,
    marginRight: 10,
  },
  inputContainer: {
    height: 56,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderRadius: 4,
    backgroundColor: COLORS.lightGray,
    borderWidth: 1,
    alignItems: "center",
  },
  erroText: {
    color: "red",
    marginTop: 6,
    fontSize: 12,
  },
  input: {
    width: "80%",
    height: 45,
    color: COLORS.orange,
    fontSize: 14,
    fontWeight: "600",
  },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props;
  const { textTheam, container } = styles;
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheam, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textTheam: {
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
  },
});

export default IconText;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RowText = (props) => {
  const {} = props;
  const {
    containerStyles,
    messageOneStyles,
    messageTwoStyles,
    messageOne,
    messageTwo,
  } = props;
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RowText;

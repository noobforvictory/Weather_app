import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";
const CurrentWeather = ({ weatherData }) => {
  const {
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
    tempStyles,
    feels,
    container,
    title,
    wrapper,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Text style={title}>Current Weather</Text>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={` High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    marginBottom: 40,
    fontSize: 40,
  },
  wrapper: {
    flex: 1,
  },
  tempStyles: {
    fontSize: 48,
    color: "white",
  },
  feels: {
    fontSize: 30,
    color: "white",
  },
  highLow: {
    fontSize: 20,
    color: "white",
  },
  highLowWrapper: {
    flexDirection: "row",
    color: "white",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
    color: "white",
    alignSelf: "center",
  },
  message: {
    fontSize: 25,
    color: "white",
    alignSelf: "center",
  },
});

export default CurrentWeather;

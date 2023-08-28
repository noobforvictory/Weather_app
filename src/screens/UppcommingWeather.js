import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import ListItems from "../components/ListItems";

const UpcommingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItems
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/thunderstorm-3625405_1280.jpg")}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalBlue",
  },
  image: {
    flex: 1,
  },
});

export default UpcommingWeather;

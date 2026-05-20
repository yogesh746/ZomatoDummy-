import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Food = (props) => {
  return (
    <View style={styles.viewOfImage}>
      <Image source={props.foodItem} style={styles.healthyImg} />
      <Text style={styles.textOfFood}>{props.foodName}</Text>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  viewOfImage: {
    alignContent: "center",
    marginHorizontal: 10,
    marginBottom: 24,
  },
  healthyImg: {
    height: 77,
    width: 77,
    borderRadius: 44,
  },
  textOfFood: {
    fontFamily: "Segoe UI",
    fontSize: 12,
    fontWeight: "400",
    color: "#000000",
    textAlign: "center",
  },
});

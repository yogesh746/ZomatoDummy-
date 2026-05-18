import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import downArrowSeeAll from "../assets/images/downArrowSeeAll.png";

const SeeAllComp = (props) => {
  return (
    <TouchableOpacity style={styles.viewOfSeeMore} onPress={props.onPress}>
      <Text style={styles.textOfSeeAll}>See More</Text>
      <Image source={downArrowSeeAll} style={styles.downArrowSeeAll} />
    </TouchableOpacity>
  );
};

export default SeeAllComp;

const styles = StyleSheet.create({
  viewOfSeeMore: {
    height: 50,
    width: 386,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  textOfSeeAll: {
    fontFamily: "Segoe UI",
    fontWeight: "400",
    fontSize: 12,
    color: "black",
  },
  downArrowSeeAll: {
    height: 10,
    width: 10,
    resizeMode: "contain",
    marginLeft: 10,
  },
});

import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import locationIcon from "../assets/images/locationIcon.png";
import threeLines from "../assets/images/threeLines.png";

const Header = () => {
  return (
    <View style={styles.viewOfHeader}>
      <Image source={locationIcon} style={styles.locationIcon} />
      <TextInput style={styles.input} />
      <Image source={threeLines} style={styles.threeLines} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  viewOfHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 50,
    marginBottom: 25,
  },
  input: {
    borderBottomWidth: 1,
    borderBlockColor: "black",
    width: 275,
    borderStyle: "dashed",
  },
  threeLines: {
    height: 21,
    width: 27.147541046142578,
    resizeMode: "contain",
  },
  locationIcon: {
    height: 35,
    width: 20.25,
    resizeMode: "contain",
  },
});

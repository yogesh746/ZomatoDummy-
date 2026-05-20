import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import searchIcon from "../assets/images/searchIcon.png";
import { appColors } from "@/constants/colors";

const InputComp = (props) => {
  return (
    <View style={styles.inputTextContainer}>
      <Image source={searchIcon} style={styles.searchIcon} />
      <TextInput
        style={styles.inputText}
        placeholder={props?.placeholder}
        onChangeText={(text) => props.onTextChange(text)}
        value={props.value}
        placeholderTextColor={appColors.lightGray}
      />
    </View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  inputTextContainer: {
    height: 43,
    borderRadius: 8,
    borderColor: appColors.lightGray,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 15,
  },
  searchIcon: {
    height: 18,
    width: 21,
    resizeMode: "contain",
  },
  inputText: {
    color: appColors.lightGray,
    fontFamily: "Segoe UI",
    fontSize: 17,
    fontWeight: "400",
  },
});

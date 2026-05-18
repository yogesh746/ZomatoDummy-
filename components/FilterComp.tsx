import { appColors } from "@/constants/colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const FilterComp = (props) => {
  return (
    <View style={styles.viewOfFilter}>
      <Image style={styles.imageOfFilterData} source={props?.icon} />
      <Text style={styles.filterText}>{props?.title}</Text>
    </View>
  );
};

export default FilterComp;

const styles = StyleSheet.create({
  viewOfFilter: {
    marginHorizontal: 7,
    marginVertical: 25,
    borderRadius: 8,
    borderColor:appColors.moreLightGray,
    borderWidth: 1,
    height: 29,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    flexDirection: "row",
  },
  filterText: {
    fontFamily: "Segoe UI",
    fontSize: 12,
    fontWeight: "400",
    color: appColors.black,
    marginLeft: 5,
  },
  imageOfFilterData: {
    height: 12,
    width: 12,
    resizeMode: "contain",
  },
});

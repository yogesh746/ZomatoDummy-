import { appColors } from "@/constants/colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const TabAction = (props:string) => {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoItem}>
        <View style={styles.viewOfCircle}>
          <Image source={props?.image} style={styles.clockIcon} />
        </View>

        <View>
          <Text style={styles.infoLabel}>{props?.event}</Text>
          <Text style={styles.infoValue}>{props.eventType}</Text>
        </View>
      </View>
    </View>
  );
};

export default TabAction;

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  infoLabel: {
    fontFamily: "Segoe UI",
    fontSize: 9,
    color: appColors.locationGrayColor,
    letterSpacing: 2,
  },

  infoValue: {
    fontFamily: "Segoe UI",
    fontSize: 9,
    color: appColors.black,
  },
  clockIcon: {
    height: 14.28,
    width: 13.65258502960205,
  },
  viewOfCircle: {
    height: 22,
    width: 22,
    borderWidth: 0.5,
    borderColor: appColors.moreLightGray,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 11,
  },
});

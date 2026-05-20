import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { strings } from "@/constants/strings";
import { appColors } from "@/constants/colors";

const TabButton = () => {
  const [tab, setTab] = useState("DELIVERY");
  return (
    <View style={styles.viewOfTab}>
      <TouchableOpacity
        style={[
          styles.deliveryTab,
          {
            backgroundColor:
              tab === "DELIVERY" ? appColors.black : appColors.distanceColor,
          },
        ]}
        onPress={() => setTab("DELIVERY")}
      >
        <Text
          style={[
            styles.deliveryText,
            {
              color:
                tab === "DELIVERY"
                  ? appColors.white
                  : appColors.locationGrayColor,
            },
          ]}
        >
          {strings.dilvery}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.deliveryTab,
          {
            backgroundColor:
              tab === "DINING" ? appColors.black : appColors.distanceColor,
          },
        ]}
        onPress={() => setTab("DINING")}
      >
        <Text
          style={[
            styles.deliveryText,
            {
              color:
                tab === "DINING"
                  ? appColors.white
                  : appColors.locationGrayColor,
            },
          ]}
        >
          {strings.dinig}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.deliveryTab,
          {
            backgroundColor:
              tab === "REVIEWS" ? appColors.black : appColors.distanceColor,
          },
        ]}
        onPress={() => setTab("REVIEWS")}
      >
        <Text
          style={[
            styles.deliveryText,
            {
              color:
                tab === "REVIEWS"
                  ? appColors.white
                  : appColors.locationGrayColor,
            },
          ]}
        >
          {strings.reviews}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  viewOfTab: {
    height: 37,
    borderRadius: 5,
    backgroundColor: appColors.distanceColor,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 17,
  },
  deliveryTab: {
    height: 37,
    width: 112,

    borderRadius: 5,
  },
  deliveryText: {
    fontFamily: "Segoe UI",
    fontWeight: "400",
    fontSize: 13,
    textAlign: "center",
    marginTop: 7,
  },
});

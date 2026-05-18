import { appColors } from "@/constants/colors";
import { strings } from "@/constants/strings";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MenuTabs = () => {
  const [tab, setTab] = useState("DELIVERY");
  return (
    <View style={styles.viewOfTab}>
      <TouchableOpacity
        style={[
          styles.deliveryTab,
          {
            borderBottomColor:
              tab === "DELIVERY"
                ? appColors.lightRed
                : appColors.textRecommandedColor,
          },
          { borderBottomWidth: tab === "DELIVERY" ? 1.5 : 0.2 },
        ]}
        onPress={() => setTab("DELIVERY")}
      >
        <Text
          style={[
            styles.deliveryText,
            {
              color:
                tab === "DELIVERY"
                  ? appColors.black
                  : appColors.noSelectedTabColor,
            },
          ]}
        >
          {strings?.full_name}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.deliveryTab,
          {
            borderBottomColor:
              tab === "DINING"
                ? appColors.lightRed
                : appColors.textRecommandedColor,
          },
          { borderBottomWidth: tab === "DINING" ? 1.5 : 0.2 },
        ]}
        onPress={() => setTab("DINING")}
      >
        <Text
          style={[
            styles.deliveryText,
            {
              color:
                tab === "DINING"
                  ? appColors.black
                  : appColors.noSelectedTabColor,
            },
          ]}
        >
          {strings?.healthy}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuTabs;

const styles = StyleSheet.create({
  viewOfTab: {
    height: 51,
    backgroundColor:appColors.offerBgroundColors,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 17,
    borderWidth: 0.2,
    borderColor:appColors.textRecommandedColor,
  },
  deliveryTab: {
    height: 50,
    width: 112,
    // borderBottomWidth: 0.2,
  },
  deliveryText: {
    fontFamily: "Signika",
    fontWeight: "400",
    fontSize: 17,
    textAlign: "center",
    marginTop: 7,
  },
});

import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import InputComp from "@/components/InputComp";
import { strings } from "@/constants/strings";
import { appColors } from "@/constants/colors";

const MenuControls = (props:string) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isEggEnable, setEggEnabled] = useState(false);
  const toggleEggSwitch = () => setEggEnabled((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <View style={styles.conatinerOfToggles}>
        <View style={styles.switch}>
          <Switch
            trackColor={{ false: appColors.lightGray, true: appColors.darkSky}}
            thumbColor={isEnabled ?appColors.lightYellow: appColors.thumbcolor}
            ios_backgroundColor={appColors.lightGray}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={styles.textOfVeg}>{strings.veg}</Text>
        </View>
        <View style={styles.switchEgg}>
          <Switch
            trackColor={{ false: appColors.lightGray, true: appColors.darkSky}}
            thumbColor={isEggEnable ? appColors.lightYellow: appColors.thumbcolor}
            ios_backgroundColor={appColors.lightGray}
            onValueChange={toggleEggSwitch}
            value={isEggEnable}
          />
          <Text style={styles.textOfVeg}>{strings.egg}</Text>
        </View>
      </View>
      <View style={styles.searchBar}>
        <InputComp
          onTextChange={props?.onTextChange}
          value={props?.value}
          placeholder={props?.placeholder}
        />
      </View>
    </View>
  );
};

export default MenuControls;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 19,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: appColors.moreLightGray,
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchEgg: { flexDirection: "row", alignItems: "center", marginLeft: 30 },
  textOfVeg: {
    fontFamily: "Segoe UI",
    fontSize: 8,
    fontWeight: 400,
    color: appColors.textRecommandedColor,
  },
  conatinerOfToggles: {
    flexDirection: "row",
  },
  searchBar: {
    width: 127,
  },
});

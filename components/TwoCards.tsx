import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import arrow from "../assets/images/arrow.png";
import girlImg from "../assets/images/girlImg.png";
import secondCardImg from "../assets/images/secondCardImg.png";
import { appColors } from "@/constants/colors";

const TwoCards = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <LinearGradient
          style={styles.leftCardView}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[appColors.red, appColors.orange]}
        >
          <View style={styles.leftTextsOfLeft}>
            <Text style={styles.textOfUpTo}>{props?.upTo}</Text>
            <Text style={styles.textOfPercentOff}>{props?.percentOff}</Text>
            <View style={styles.line} />
            <Text style={styles.textOfNoCooking}>{props.nocook}</Text>
            <Text style={styles.textOfjuly}>{props.july}</Text>
            <View style={styles.viewOfArrow}>
              <Image source={arrow} style={styles.arrow} />
            </View>
          </View>

          <View>
            <Image source={girlImg} style={styles.girlImg} />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <LinearGradient
        style={styles.leftCardView}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[appColors.blue, appColors.cardOverlay]}
      >
        <View style={styles.leftTextsOfLeft}>
          <Text style={styles.textOfbiiiig}>{props.big} </Text>
          <Text style={styles.textOfDiscounts}>{props.discount}</Text>
          <Text style={styles.textOfFavourite}>{props.text}</Text>
        </View>

        <View>
          <Image source={secondCardImg} style={styles.secondCardImg} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default TwoCards;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 400,
  },
  leftCardView: {
    height: 122,
    width: 180,
    padding: 12,
    borderRadius: 5,
    flexDirection: "row",
  },
  leftTextsOfLeft: {},
  textOfUpTo: {
    fontFamily: "Segoe UI",
    fontSize: 8,
    fontWeight: "400",
    color: appColors.white,
  },
  textOfPercentOff: {
    fontFamily: "Segoe UI",
    fontSize: 19,
    fontWeight: "700",
    color: appColors.white,
  },
  line: {
    borderWidth: 1,
    color: appColors.white,
    borderColor: appColors.white,
    width: 23,
    marginVertical: 5,
  },
  textOfNoCooking: {
    fontFamily: "Seymour One",
    fontSize: 11,
    fontWeight: "400",
    color: appColors.white,
  },
  textOfjuly: {
    fontFamily: "Seymour One",
    fontSize: 13,
    fontWeight: "400",
    color: appColors.white,
    // marginTop: 12,
  },
  girlImg: {
    width: 66.76065063476562,
    height: 64,
    marginTop: 38,
    marginRight: 10,
  },
  viewOfArrow: {
    height: 10,
    width: 10,
    backgroundColor: appColors.white,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    height: 5,
    width: 5,
    resizeMode: "contain",
  },
  textOfbiiiig: {
    fontFamily: "Rounded Mplus 1c",
    fontSize: 18,
    fontWeight: "800",
    color: appColors.darkBlue,
  },
  textOfDiscounts: {
    fontFamily: "Segoe UI Historic",
    fontSize: 15,
    fontWeight: "400",
    color: appColors.darkBlue,
  },
  textOfFavourite: {
    fontFamily: "Segoe UI",
    fontSize: 10,
    fontWeight: "400",
    color: appColors.black,
  },
  secondCardImg: {
    width: 49,
    height: 76,
    resizeMode: "contain",
    left: -44,
    top: 25,
  },
});

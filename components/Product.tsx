import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import leafIcon from "../assets/images/leafIcon.png";
import star from "../assets/images/star.png";
import upArrow from "../assets/images/upArrow.png";
import { strings } from "@/constants/strings";
import { appColors } from "@/constants/colors";

const Product = (props) => {
  return (
    <TouchableOpacity style={styles.conatiner} onPress={props.onPress}>
      <Image
        source={{ uri: props?.image }}
        style={styles.imageOfFood}
        contentFit="cover"
      />
      <View style={styles.bottomConatiner}>
        <View style={styles.viewOfLeftRightHeader}>
          <View style={styles.viewOfLeftHeaderText}>
            <Text style={styles.eatText}>{props?.nameOfFood}</Text>
            <Text style={styles.eatHealthyext}>{props?.typeOfFood}</Text>
          </View>
          <View style={styles.viewOfLeftHeaderText}>
            <View style={styles.viewOfRating}>
              <Image source={star} style={styles.star} />
              <Text style={styles.ratingText}>{props?.rating}</Text>
            </View>
            <Text style={styles.eatHealthyext}>₹{props?.price} for one</Text>
          </View>
        </View>

        <View style={styles.viewOfBottomLeftRight}>
          <View style={styles.viewOfLeaf}>
            <Image source={leafIcon} style={styles.leafIcon} />
            <Text style={styles.leafText}>{props?.description}</Text>
          </View>
          <View style={styles.viewOfBottomRight}>
            <View style={styles.viewOfUpArrow}>
              <Image source={upArrow} style={styles.upArrow} />
            </View>
            <View style={styles.viewOfConatinerDelivery}>
              <View style={styles.viewOfYelloew}>
                <Text style={styles.textOfMax}>{strings.max_safety}</Text>
              </View>
              <Text style={styles.delivery}>{strings.dilvery}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Product);

const styles = StyleSheet.create({
  conatiner: {
    width: 381,
    height: 251,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
  },

  healthyImageOfRestaurant: {
    width: 387,
    height: 251,
    borderRadius: 20,
    overflow: "hidden",
  },
  bottomConatiner: {
    height: 85,
    width: 387,
    backgroundColor: "white",
    bottom: 0,
    position: "absolute",
    paddingVertical: 5,
  },
  viewOfLeftHeaderText: {},
  eatText: {
    fontFamily: "Segoe UI",
    fontSize: 15,
    fontWeight: "500",
    color: appColors.black,
  },
  eatHealthyext: {
    fontFamily: "Segoe UI",
    fontSize: 10,
    fontWeight: "400",
    color: appColors.black,
  },
  viewOfRating: {
    height: 16,
    width: 44,
    backgroundColor: appColors.green,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    alignSelf: "center",
    paddingHorizontal: 11,
  },
  ratingText: {
    fontFamily: "Segoe UI",
    fontSize: 10,
    fontWeight: "400",
    color: appColors.white,
  },
  star: {
    height: 7.5,
    width: 7.5,
    marginTop: 4,
    marginRight: 5,
  },
  viewOfLeftRightHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  viewOfBottomLeftRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 10,
  },
  leafIcon: {
    height: 20,
    width: 20,
  },
  leafText: {
    fontFamily: "Segoe UI",
    fontSize: 10,
    fontWeight: "400",
    color: appColors.darkGary,
    marginLeft: 5,
    width: 254,
  },
  viewOfLeaf: {
    flexDirection: "row",
  },
  viewOfBottomRight: {
    flexDirection: "row",
  },
  viewOfUpArrow: {
    height: 18,
    width: 18,
    backgroundColor: appColors.darkPink,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  upArrow: {
    height: 7.200000286102295,
    width: 11.519999504089355,
  },
  viewOfConatinerDelivery: {
    height: 18,
    width: 61,
    borderRadius: 2,
    backgroundColor: appColors.darkGreen,
    marginRight: 10,
    marginLeft: 10,
  },
  viewOfYelloew: {
    height: 8,
    width: 59,
    borderRadius: 2,
    backgroundColor: appColors.yellow,
    alignItems: "center",
  },
  textOfMax: {
    fontSize: 7,
  },
  delivery: {
    fontSize: 7,
    color: "white",
    textAlign: "center",
  },
  imageOfFood: {
    height: 166,
    width: "100%",
  },
});

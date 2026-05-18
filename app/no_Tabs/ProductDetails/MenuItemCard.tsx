import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import star from "@/assets/images/star.png";
import vegIcon from "@/assets/images/vegIcon.png";
import { strings } from "@/constants/strings";
import { appColors } from "@/constants/colors";
const MenuItemCard = (props:string) => {
  const [click, setClick] = useState("SeeMore");
  return (
    <View style={styles.container}>
      <View style={styles.itemDetailContainer}>
        <Image source={vegIcon} style={styles.vegIcon} />
        <Text style={styles.nameOfItem}>{props?.name}</Text>
        <Text style={styles.priceOfItem}>₹ {props?.price}</Text>
        <View style={styles.viewOfRatingDetailWithMustTry}>
          <View style={styles.viewOfStar}>
            <Image source={star} style={styles.star} />
            <Image source={star} style={styles.star} />
            <Image source={star} style={styles.star} />
            <Image source={star} style={styles.star} />
            <Image source={star} style={styles.star} />
            <Text style={styles.textOfRating}>{props?.rating}</Text>
          </View>
          <View style={styles.viewOfMustTry}>
            <Text style={styles.textOfMustTry}>{strings?.must_try}</Text>
          </View>
        </View>
        <View style={styles.viewOfDescriptionWithSeeMore}>
          <Text
            style={styles.descriptionOfItem}
            numberOfLines={click === "SeeMore" ? 2 : 3}
          >
            {props?.description}
          </Text>
          <TouchableOpacity
            onPress={() => {
              click === "SeeMore" ? setClick("SeeLess") : setClick("SeeMore");
            }}
          >
            <Text style={styles.readMore}>
              {click === "SeeMore" ? strings.see_more : strings.read_less}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={props?.image} style={styles.foodImg} />
        <View style={styles.viewOfAddItem}>
          <Text style={styles.textOfAdd}>{strings.add}</Text>
          <Text style={styles.plus}>+</Text>
        </View>
      </View>
    </View>
  );
};

export default MenuItemCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  itemDetailContainer: {},
  vegIcon: {
    height: 18,
    width: 18,
  },
  nameOfItem: {
    fontFamily: "Segoe UI",
    fontSize: 14,
    fontWeight: 400,
    color: appColors.black,
  },
  priceOfItem: {
    fontFamily: "Segoe UI",
    fontSize: 10,
    fontWeight: 400,
    color:appColors.textRecommandedColor,
  },
  viewOfRatingDetailWithMustTry: {
    flexDirection: "row",
  },
  star: {
    height: 11,
    width: 11,
    tintColor: appColors.yellow,
  },
  viewOfStar: {
    flexDirection: "row",
    backgroundColor:appColors.starColor,
    height: 12,
    borderRadius: 4,
  },
  textOfRating: {
    fontFamily: "Segoe UI",
    fontSize: 10,
    fontWeight: 400,
    color: appColors.textRecommandedColor,
    marginLeft: 5,
  },
  viewOfMustTry: {
    height: 12,
    width: 44,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: appColors.lightRed,
    backgroundColor: appColors.mustTryBgColor,
    alignItems: "center",
    marginLeft: 12,
  },
  textOfMustTry: {
    fontFamily: "Segoe UI",
    fontSize: 8,
    fontWeight: 400,
    color:appColors.lightRed,
  },
  descriptionOfItem: {
    fontFamily: "Segoe UI",
    fontSize: 10,
    fontWeight: 400,
    color:appColors.descriptionOfItem,
  },
  readMore: {
    fontFamily: "Segoe UI",
    fontSize: 11,
    fontWeight: 400,
    color: appColors.textRecommandedColor,
    bottom: 0,
    position: "absolute",
  },
  viewOfDescriptionWithSeeMore: {
    width: 221,
    flexDirection: "row",
  },
  imageContainer: {
    alignItems: "center",
  },
  foodImg: {
    height: 92,
    width: 89,
    resizeMode: "contain",
    borderRadius: 14,
  },
  viewOfAddItem: {
    height: 25,
    width: 70,
    borderRadius: 4,
    borderWidth: 0.2,
    borderColor:appColors.red,
    backgroundColor:appColors.viewOfAddItemColor,
    flexDirection: "row",
    justifyContent: "center",
    top: -15,
  },
  textOfAdd: {
    fontFamily: "Segoe UI",
    fontSize: 13,
    fontWeight: 400,
    color: "red",
  },
  plus: {
    fontFamily: "Segoe UI",
    fontSize: 13,
    fontWeight: 400,
    marginLeft: 5,
   color:appColors.red
  },
});

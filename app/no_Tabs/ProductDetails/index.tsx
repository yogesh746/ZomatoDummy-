import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import backArrow from "@/assets/images/backArrow.png";
import bikeIcon from "@/assets/images/bikeIcon.png";
import burger from "@/assets/images/burger.png";
import clockIcon from "@/assets/images/clockIcon.png";
import healthyImageOfRestaurant from "../../../assets/images/healthyImageOfRestaurant.png";
import menuIcon from "@/assets/images/menuIcon.png";
import moterCycleIcon from "@/assets/images/moterCycleIcon.png";
import offersIcon from "@/assets/images/offersIcon.png";
import plantProtienBowlImg from "@/assets/images/plantProtienBowlImg.png";
import seeMoreIcon from "@/assets/images/seeMoreIcon.png";
import springVegPlater from "@/assets/images/springVegPlater.png";
import star from "@/assets/images/star.png";
import MenuControls from "./MenuControls";
import MenuItemCard from "./MenuItemCard";
import MenuTabs from "./MenuTabs";
import TabAction from "./TabAction";
import TabButton from "./TabButton";
import { strings } from "@/constants/strings";
import { actionData } from "@/types/types";
import { ItemType } from "@/types/types";
import { appColors } from "@/constants/colors";

const ProductDetail = () => {
  const [search, setSearch] = useState("");
  const { nameOfFood, typeOfFood, image } = useLocalSearchParams();
  const productImage = typeof image === "string" ? { uri: image } : healthyImageOfRestaurant;

  const action: actionData[] = [
    {
      id: "1",
      image: clockIcon,
      event: "MODE",
      eventType: "delivery",
    },
    {
      id: "2",
      image: bikeIcon,
      event: "TIME",
      eventType: "40 mins",
    },
    {
      id: "3 ",
      image: offersIcon,
      event: "OFFERS",
      eventType: "view all (3)",
    },
  ];

  const itemData: ItemType[] = [
    {
      id: 1,
      name: "Plant Protien Bowl",
      price: 220,
      rating: 11,
      image: plantProtienBowlImg,
      description:
        "[Veg preparation] Spring mix, plant based, organic [Veg preparation] Spring mix, plant based, organic[Veg preparation] Spring mix, plant based, organic... ",
    },
    {
      id: 2,
      name: "Spring Veg Plater",
      price: 240,
      rating: 16,
      image: springVegPlater,
      description:
        "[Veg preparation] Spring mix, plant based, organic [Veg preparation] Spring mix, plant based, organic[Veg preparation] Spring mix, plant based, organic... ",
    },
    {
      id: 3,
      name: "Protien Shake",
      price: 260,
      rating: 18,
      image: burger,
      description:
        "[Veg preparation] Spring mix, plant based, organic [Veg preparation] Spring mix, plant based, organic[Veg preparation] Spring mix, plant based, organic... ",
    },
    {
      id: 4,
      name: "Plant Protien Bowl",
      price: 320,
      rating: 16,
      image: springVegPlater,
      description:
        "[Veg preparation] Spring mix, plant based, organic [Veg preparation] Spring mix, plant based, organic[Veg preparation] Spring mix, plant based, organic... ",
    },
    {
      id: 5,
      name: "Plant Protien Bowl",
      price: 110,
      rating: 14,
      image: plantProtienBowlImg,
      description:
        "[Veg preparation] Spring mix, plant based, organic [Veg preparation] Spring mix, plant based, organic[Veg preparation] Spring mix, plant based, organic... ",
    },
    {
      id: 6,
      name: "Plant Protien Bowl",
      price: 145,
      rating: 10,
      image: springVegPlater,
      description:
        "[Veg preparation] Spring mix, plant based, organic [Veg preparation] Spring mix, plant based, organic[Veg preparation] Spring mix, plant based, organic... ",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navBar} />
      <TouchableOpacity onPress={() => router.back()}>
        <Image source={backArrow} style={styles.backArrow} />
      </TouchableOpacity>
      <View style={styles.viewOfHeader}>
        <View>
          <Text style={styles.headerTitleProdName}>{nameOfFood}</Text>
          <Text style={styles.subTitleOfProduct}>{typeOfFood}</Text>
          <Text style={styles.locationOfProduct}>{strings.location}</Text>
        </View>
        <View>
          <View style={styles.viewOfRating}>
            <View style={styles.viewOfStarWithRatingText}>
              <Text style={styles.rating}>4.2</Text>
              <Image source={star} style={styles.starIcon} />
            </View>
            <Text style={styles.textOfDelivery}>{strings.dilvery}</Text>
          </View>
          <View style={styles.viewOfSeeMorePhoto}>
            <ImageBackground source={productImage} style={styles.photoToSee}>
              <Text style={styles.numofPhotos}>{strings.six}</Text>
              <Text style={styles.numofPhotos}>{strings.photo}</Text>
            </ImageBackground>
          </View>
        </View>
      </View>

      <View style={styles.viewOfConatinerDelivery}>
        <View style={styles.viewOfYelloew}>
          <Text style={styles.textOfMax}>{strings.max_safety}</Text>
        </View>
        <Text style={styles.delivery}>{strings.dilvery}</Text>
      </View>
      <TabButton />
      <FlatList
        data={action}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        style={{ maxHeight: 40 }}
        contentContainerStyle={styles.flatListOfTabAction}
        renderItem={(item) => {
          return (
            <TabAction
              event={item?.item?.event}
              eventType={item?.item?.eventType}
              image={item?.item?.image}
            />
          );
        }}
      />
      <View style={styles.viewOfDistance}>
        <Image source={moterCycleIcon} style={styles.moterCycleIcon} />
        <Text style={styles.textOfDistanceCharge}>
          ₹25{strings.distanceText}
        </Text>
      </View>
      <MenuTabs />
      <MenuControls
        onTextChange={(text:string) => setSearch(text)}
        value={search}
        placeholder={"Search"}
      />

      <View style={styles.viewOfRecommanded}>
        <Text style={styles.textOfRecommended}>{strings.recommended}</Text>
        <Image source={seeMoreIcon} style={styles.seeIcon} />
      </View>
      <FlatList
        data={itemData}
        keyExtractor={(item) => item.id.toString()}
        style={{ height: 200 }}
        renderItem={(item) => {
          return (
            <MenuItemCard
              name={item?.item?.name}
              price={item?.item?.price}
              rating={item?.item?.rating}
              image={item?.item?.image}
              description={item?.item?.description}
            />
          );
        }}
      />
      <TouchableOpacity style={styles.menu}>
        <Image source={menuIcon} style={styles.menuIcon} />
        <Text style={styles.textOfMenu}>{strings.menu}</Text>
      </TouchableOpacity>
      <View style={styles.OfferBanner}>
        <View style={styles.viewOfOffer}>
          <Text style={styles.textOfOffer}>30% {strings.off_upto} ₹75</Text>
        </View>
        <Text style={styles.couponText}>
          {strings.use_code_text}₹159 {strings.or_more}
        </Text>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  backArrow: {
    height: 15,
    width: 7.5,
    marginLeft: 15,
  },
  navBar: {
    height: 48,
  },
  viewOfHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
    marginTop: 8,
    alignItems: "center",
  },
  headerTitleProdName: {
    fontFamily: "Signika",
    fontWeight: "400",
    color: appColors.black,
    fontSize: 26,
  },
  subTitleOfProduct: {
    fontFamily: "Segoe UI",
    fontWeight: "400",
    color: appColors.darkGary,
    fontSize: 12,
  },
  locationOfProduct: {
    fontFamily: "Segoe UI",
    fontWeight: "400",
    color: appColors.locationGrayColor,
    fontSize: 10,
  },
  viewOfRating: {
    height: 42.42856979370117,
    width: 60,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: appColors.lightgreen,
    marginBottom: 5,
    paddingHorizontal: 8,
  },
  rating: {
    fontFamily: "Segoe UI",
    fontWeight: "400",
    color: appColors.white,
    fontSize: 12,
  },
  starIcon: {
    height: 11.571428298950195,
    width: 11,
    marginLeft: 5,
  },
  viewOfStarWithRatingText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textOfDelivery: {
    fontFamily: "Segoe UI",
    fontWeight: "400",
    color: appColors.white,
    fontSize: 8,
    alignSelf: "center",
  },
  viewOfSeeMorePhoto: {
    height: 42.42856979370117,
    width: 60,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  photoToSee: {
    height: 42.42856979370117,
    width: 60,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    overflow: "hidden",
  },
  numofPhotos: {
    fontFamily: "Segoe UI",
    fontWeight: "400",
    color: appColors.white,
    fontSize: 12,
    alignSelf: "center",
  },

  viewOfConatinerDelivery: {
    height: 18,
    width: 61,
    borderRadius: 2,
    backgroundColor: appColors.deliveryContainerColor,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    alignItems: "center",
  },
  viewOfYelloew: {
    height: 8,
    width: 59,
    borderRadius: 2,
    backgroundColor: appColors.yellow,
    alignItems: "center",
  },
  textOfMax: {
    fontSize: 6,
  },
  delivery: {
    fontSize: 7,
    color: "white",
    textAlign: "center",
  },
  flatListOfTabAction: {
    paddingHorizontal: 20,
    gap: 85,
    alignItems: "center",
  },
  viewOfDistance: {
    height: 34,
    width: 398,
    borderRadius: 10,
    backgroundColor: appColors.distanceColor,
    marginHorizontal: 17,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 29,
  },
  moterCycleIcon: {
    height: 16,
    width: 16,
    tintColor: appColors.black,
  },
  textOfDistanceCharge: {
    fontFamily: "Segoe UI",
    fontSize: 11,
    fontWeight: 400,
    color: appColors.black,
  },
  viewOfRecommanded: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
    marginVertical: 25,
  },
  textOfRecommended: {
    fontFamily: "Segoe UI",
    fontSize: 11,
    fontWeight: 400,
    color: appColors.textRecommandedColor,
  },
  seeIcon: {
    height: 5,
    width: 10,
  },
  menu: {
    backgroundColor: appColors.black,
    height: 29,
    width: 89,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    left: 310,
    marginBottom: 8,

  },
  menuIcon: {
    height: 8,
    width: 11,
    resizeMode: "contain",
    marginRight: 5,
  },
  OfferBanner: {
    height: 51,
    backgroundColor: appColors.offerBgroundColors,
    borderWidth: 0.2,
    borderColor: appColors.textRecommandedColor,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  viewOfOffer: {
    height: 24,
    width: 141,
    backgroundColor: appColors.bgroundColorOfOffer,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingTop: 2,
  },
  textOfOffer: {
    fontFamily: "Segoe UI",
    fontSize: 12,
    fontWeight: 700,
    color: appColors.white,
  },
  couponText: {
    fontFamily: "Segoe UI",
    fontSize: 10,
    fontWeight: 700,
    color: appColors.bgroundColorOfOffer,
    width: 250,
  },
  textOfMenu: {
    fontFamily: "Segoe UI",
    fontSize: 10,
    fontWeight: 700,
    color: appColors.white,
  },
});

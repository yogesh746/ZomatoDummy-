import downArrow from "@/assets/images/downArrow.png";
import girlImg from "@/assets/images/girlImg.png";
import proIcon from "@/assets/images/proIcon.png";
import secondCardImg from "@/assets/images/secondCardImg.png";
import upDownArrrow from "@/assets/images/upDownArrrow.png";
import FilterComp from "@/components/FilterComp";
import FoodCategory from "@/components/FoodCategory";
import Header from "@/components/Header";
import InputComp from "@/components/InputComp";
import Product from "@/components/Product";
import TwoCards from "@/components/TwoCards";
import { appColors } from "@/constants/colors";
import { strings } from "@/constants/strings";
import { BannerItem, FilterItem, restaurentItems } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useFoodData from "@/hooks/useFoodData";

export default function Home() {
  const [search, setSearch] = useState("");
  const { data } = useFoodData();
  // const [apiData, setApiData] = useState<restaurentItems[]>([]);

  const filterData: FilterItem[] = [
    { id: "1", title: "Max Safety", icon: "" },
    { id: "2", title: "PRO", icon: proIcon },
    { id: "3", title: "Cuisines", icon: downArrow },
    { id: "4", title: "Rating ", icon: "shield-checkmark" },
    { id: "5", title: "Popular ", icon: upDownArrrow },
  ];

  const BANNERS: BannerItem[] = [
    {
      id: "1",
      upTo: "UP TO",
      percentOff: "60% OFF",
      nocook: "no cooking ",
      image: girlImg,
      secondCardImg: secondCardImg,
      big: "biiiig",
      discount: "discount",
      text: "now on your favourite restaurants",
      july: "july",
    },
  ];

  return (
    <FlatList
      data={data}
      style={styles.container}
      keyExtractor={(_, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      renderItem={(item) => {
        return (
          <Product
            image={item?.item?.image}
            nameOfFood={item?.item?.title}
            typeOfFood={item?.item?.subTitle}
            price={item?.item?.price}
            rating={item?.item?.rating}
            description={item?.item?.description}
            onPress={() => {
              router.push({
                pathname: "/no_Tabs/ProductDetails",
                params: {
                  nameOfFood: item?.item?.title,
                  typeOfFood: item?.item?.subTitle,
                  image: item?.item?.image,
                },
              });
            }}
          />
        );
      }}
      ListHeaderComponent={
        <>
          <Header />
          <InputComp
            onTextChange={(text: string) => setSearch(text)}
            value={search}
            placeholder="Restaurant name, cuisine, or a dish..."
          />
          <FlatList
            data={filterData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={(item) => {
              return (
                <FilterComp title={item.item.title} icon={item.item.icon} />
              );
            }}
          />

          <FlatList
            data={BANNERS}
            horizontal
            keyExtractor={(item) => item.id}
            // ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TwoCards
                  upTo={item.upTo}
                  percentOff={item.percentOff}
                  nocook={item.nocook}
                  secondCardImg={item.secondCardImg}
                  image={item.image}
                  july={item.july}
                  big={item.big}
                  discount={item.discount}
                  text={item.text}
                />
              );
            }}
          />
          <FoodCategory />

          <Text style={styles.headerTextOfRestaurantAroundYou}>
            {strings.restaurents}
          </Text>
        </>
      }
      ListEmptyComponent={
        <>
          <Text>Restaurent Data not shown because something went wrong</Text>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: appColors.white,
  },

  headerTextOfRestaurantAroundYou: {
    fontSize: 20,
    fontFamily: "Segoe UI",
    fontWeight: "600",
    color: appColors.black,
    marginTop: 17,
    marginBottom: 12,
  },
});

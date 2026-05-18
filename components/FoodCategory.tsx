import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SeeAllComp from "../components/SeeAllComp";
import Food from "../components/Food";
import biryani from "../assets/images/biryani.png";
import burger from "../assets/images/burger.png";
import cake from "../assets/images/cake.png";
import chicken from "../assets/images/chicken.png";
import haleem from "../assets/images/haleem.png";
import hawarma from "../assets/images/hawarma.png";
import pizza from "../assets/images/pizza.png";
import healthyImg from "../assets/images/healthyImg.png";
import { strings } from "@/constants/strings";
import { foodItem } from "@/types/types";
import { appColors } from "@/constants/colors";

const FoodCategory = () => {
  const [seeMore, setSeeMore] = useState(8);

  const food: foodItem[] = [
    { id: "1", img: healthyImg, title: "Healthy" },
    { id: "2", img: biryani, title: "Biryani" },
    { id: "3", img: pizza, title: "Pizza" },
    { id: "4", img: haleem, title: "Haleem" },
    { id: "5", img: chicken, title: "Chicken" },
    { id: "6", img: burger, title: "Burger" },
    { id: "7", img: cake, title: "Cake" },
    { id: "8", img: hawarma, title: "Shawarma" },
    { id: "9", img: biryani, title: "Pasta" },
    { id: "10", img: pizza, title: "Salad" },
    { id: "11", img: healthyImg, title: "Fries" },
    { id: "12", img: chicken, title: "Sushi" },
    { id: "13", img: chicken, title: "Steak" },
    { id: "14", img: biryani, title: "Momos" },
    { id: "15", img: hawarma, title: "Dosa" },
    { id: "16", img: burger, title: "Ice Cream" },
  ];
  return (
    <View>
      <FlatList
        data={food.slice(0, seeMore)}
        numColumns={4}
        scrollEnabled={false}
        initialNumToRender={8}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={(item) => {
          return <Food foodItem={item.item.img} foodName={item.item.title} />;
        }}
        ListFooterComponent={
          <SeeAllComp
            onPress={() => {
              setSeeMore((prev) => prev + 8);
            }}
          />
        }
        ListHeaderComponent={
          <Text style={styles.headerText}>{strings.eat_what}</Text>
        }
      />
    </View>
  );
};

export default FoodCategory;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontFamily: "Segoe UI",
    fontWeight: "600",
    color: appColors.black,
    marginTop: 40,
    marginBottom: 20,
  },
});

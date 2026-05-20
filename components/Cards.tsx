import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import arrow from "../assets/images/arrow.png";

const Cards = (props) => {
  return (
    <View style={[styles.card, { backgroundColor: props.bgColor }]}>
      <View style={styles.viewOfCardText}>
        <Text style={[styles.title, { color: props.textColor }]}>
          {props.title}
        </Text>

        {props.highlight ? (
          <Text style={[styles.highlight, {}]}>{props.highlight}</Text>
        ) : null}

        <Text style={[styles.subtitle, {}]}>{props.subtitle}</Text>
        <View style={styles.viewOfArrow}>
          <Image source={arrow} style={styles.arrow} />
        </View>
      </View>
      <View>
        <Image source={props.img} style={styles.girlImg} />
      </View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    height: 122,
    width: 180,
    borderRadius: 10,
    paddingVertical: 11,
    marginRight: 12,
    paddingHorizontal: 13,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 8,
    fontFamily: "Segoe UI",
    fontWeight: "400",
    color: "#FFFFFF",
  },
  highlight: {
    fontSize: 18,
    fontFamily: "Segoe UI",
    fontWeight: "700",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Seymour One",
    fontWeight: "400",
    color: "#FFFFFF",
  },
  viewOfArrow: {
    height: 10,
    width: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    height: 5,
    width: 5,
    resizeMode: "contain",
  },
  girlImg: {
    height: 64.5,
    width: 66.76065063476562,
    marginTop:44,
    borderBottomRightRadius:10
  },
  viewOfCardText:{
    width:100
  }
});

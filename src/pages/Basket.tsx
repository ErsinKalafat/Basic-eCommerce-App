import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";

var Styles: any = require("../styles/basket");
var Common: any = require("../styles/common");

const Basket = () => {
  let basketItems = useSelector((state: RootState) => {
    return state.basket;
  });
  return (
    <View style={Common.container}>
      <Text style={Common.pageTitle}>Basket</Text>
      {!!basketItems.length && (
        <ScrollView>
          {basketItems.map(({ image, name, price }) => (
            <View style={Styles.container}>
              <Image source={{ uri: image }} style={Styles.image}
                     resizeMode="contain"
              />
              <View>
                <Text style={Styles.productName}>{`${name}\n`}</Text>
                <Text style={Styles.productPrice}>{`$${price.toString().replace(".", ",")}`}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
      {!basketItems.length && (
        <Text style={Common.emptyContent}>Basket is empty!</Text>
      )}
    </View>
  );
};

export { Basket };

import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/productsActions";
import { RootState } from "../store";
import { MyAlert } from "../components";
import axios from "axios";

var Styles: any = require("../styles/hotDeals");
var Common: any = require("../styles/common");

const HotDeals = () => {
  const dispatch = useDispatch();
  const [hottestIdList, setHottestIdList] = useState([]);

  interface IProduct {
    id: number
    name: string
    category: string
    price: number
    image: string,
    createdAt: string
  }

  interface IHottestID {
    productId: number
  }

  const productList: IProduct[] = useSelector((state: RootState) => {
    return state.hottest;
  });

  useEffect(() => {
    fetchHottestProductsID();
  }, []);

  const fetchHottestProductsID = async () => {
    const res = await axios.get("http://5e394071aad22200149625f8.mockapi.io/hotdeals");
    setHottestIdList(res.data);
  };

  const idList: IHottestID[] = hottestIdList;

  const basketOperations = (product: IProduct) => {
    dispatch(addToCart(product));
    MyAlert("Ürün Sepete Eklendi!", `${product.name}`, "I am hottest dominos!! :)");
  };

  const hottestProducts = productList.filter(pId => {
    return idList.some(hId => pId.id === hId.productId);
  });

  return (
    <View style={Common.container}>
      <Text style={Common.pageTitle}>Hottest Deals</Text>
      <ScrollView>
        <View style={Styles.grid}>
          {hottestProducts.map(({ image, name, price }) => {
            var sizes = [320, 440, 560];
            var imageHeight = sizes[Math.floor(Math.random() * sizes.length)];
            return (
              <View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => basketOperations({ image, name, price })}
                >
                  <View style={Styles.wrapper}>
                    <Image source={{ uri: image }} style={[Styles.image, { height: imageHeight }]}
                           resizeMode="cover"
                    />
                    <View style={Styles.productInfoWrapper}>
                      <Text style={Styles.productName}>{`${name}\n`}</Text>
                      <Text style={Styles.productPrice}>{`$${price.toString().replace(".", ",")}`}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export { HotDeals };

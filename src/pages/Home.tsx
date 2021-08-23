import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart, transportToHottest } from "../actions/productsActions";
import axios from "axios";
import { Spinner, MyAlert } from "../components";

var Styles: any = require("../styles/home");
var Common: any = require("../styles/common");

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [timings, setTimings] = useState([]);

  interface IProduct {
    id: number
    name: string
    category: string
    price: number
    image: string,
    createdAt: string
  }

  interface ITimings {
    productId: number
    startDate: Date
    endDate: Date
  }

  useEffect(() => {
    fetchProducts();
    fetchProductTimings();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("http://5e394071aad22200149625f8.mockapi.io/products");
    setProducts(res?.data);
  };

  const fetchProductTimings = async () => {
    const res = await axios.get("http://5e394071aad22200149625f8.mockapi.io/productTimings");
    setTimings(res?.data);
  };

  const productList: IProduct[] = products;
  const timingList: ITimings[] = timings;


  const basketOperations = (product: IProduct) => {
    dispatch(addToCart(product));
    MyAlert("Ürün Sepete Eklendi!", `${product.name}`, "I am dominos!! :)");
  };

  if (!productList.length) {
    return (
      <Spinner />
    );
  } else
    dispatch(transportToHottest(productList));

  return (
    <View style={Common.container}>
      <Text style={Common.pageTitle}>Deals</Text>
      <ScrollView>
        {productList.map(({ image, name, price }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => basketOperations({ image, name, price })}
            >
              <View style={Styles.container}>
                <Image source={{ uri: image }} style={Styles.image}
                       resizeMode="contain"
                />
                <View style={Styles.productInfoWrapper}>
                  <Text style={Styles.productName}>{`${name}\n`}</Text>
                  <Text style={Styles.productPrice}>{`$${price.toString().replace(".", ",")}`}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export { Home };

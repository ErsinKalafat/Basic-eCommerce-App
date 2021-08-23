import React from "react";
import { Alert } from "react-native";

const MyAlert = (title, productName, buttonText) => {
  return (
    Alert.alert(title, productName, [{ text: buttonText }])
  );
};

export { MyAlert } ;

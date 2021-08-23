import React from "react";
import { View, ActivityIndicator } from "react-native";

var Common: any = require("../styles/common");

const Spinner = () => {
  return (
    <View style={Common.spinner}>
      <ActivityIndicator size="large" color="#ed552b" />
    </View>
  );
};

export { Spinner };

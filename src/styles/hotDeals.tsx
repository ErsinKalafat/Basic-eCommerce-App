var React = require("react-native");
var ReactNative = require("react-native");
var { StyleSheet } = React;
var { Dimensions } = ReactNative;

const { width: deviceWidth } = Dimensions.get("window");
const imageWidth: number = deviceWidth / 2 - 20;

module.exports = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  wrapper: {
    padding: 10,
    alignItems: "center"
  },
  productInfoWrapper: {
    flex: 1,
    width: imageWidth,
    marginBottom: 20,
    marginTop: 5
  },
  productName: {
    fontSize: 17
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "bold"
  },
  image: {
    width: imageWidth,
    borderWidth: 1,
    borderRadius: 15
  }
});

var React = require("react-native");
var ReactNative = require("react-native");

var { StyleSheet } = React;
var { Dimensions } = ReactNative;

const {width: deviceWidth} = Dimensions.get('window');

const imageWidth = 320;
const imageHeight = 240;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    marginTop: 5
  },
  productInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: imageWidth,
    marginBottom: 20,
    marginTop: 5
  },
  productName: {
    fontSize: 17
  },
  productPrice: {
    fontSize: 15,
    width: deviceWidth / 2,
    fontWeight: "bold"
  },
  image: {
    width: imageWidth / 2,
    height: imageHeight / 2,
    borderWidth: 1,
    borderRadius: 15
  }
});

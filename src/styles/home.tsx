var React = require("react-native");
var { StyleSheet } = React;

const imageWidth = 320;
const imageHeight = 240;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  productInfoWrapper: {
    flex: 1,
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
    fontWeight: "bold"
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    borderWidth: 1,
    borderRadius: 15
  }
});

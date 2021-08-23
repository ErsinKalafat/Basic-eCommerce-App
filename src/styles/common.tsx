var React = require("react-native");
var { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    paddingBottom: 60
  },
  pageTitle: {
    padding: 20,
    fontWeight:'bold',
    fontSize: 20,
    backgroundColor: '#fff',
    marginBottom: 15
  },
  spinner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  emptyContent: {
    padding: 10,
    alignSelf: 'center',
    fontSize: 20,
  }
});

import React from "react";
import AppNavigationContainer from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigationContainer />
      </Provider>
    );
  }
}

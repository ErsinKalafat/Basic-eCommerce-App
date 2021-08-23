import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { Home, HotDeals, Basket, Profile } from "./pages";

const TabScreen = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "home"
      }
    },
    HotDeals: {
      screen: HotDeals,
      navigationOptions: {
        tabBarLabel: "deals"
      }
    },
    Basket: {
      screen: Basket,
      navigationOptions: {
        tabBarLabel: "basket"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "profile"
      }
    }
  },
  {
    tabBarPosition: "bottom",
    swipeEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: "#1b47a5",
      inactiveTintColor: "#999",
      style: {
        backgroundColor: "#fff"
      },
      labelStyle: {
        textAlign: "center"
      },
      indicatorStyle: {
        borderBottomColor: "#555",
        borderBottomWidth: 2
      }
    }
  }
);

const tabs = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#000",
      title: "Domino's Task - Ersin Kalafat"
    }
  }
});

const AppNavigationContainer = createAppContainer(tabs);

export default AppNavigationContainer;

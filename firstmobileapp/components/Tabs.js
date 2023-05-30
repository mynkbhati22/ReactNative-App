import React, { useRef, useState } from "react";
import { Animated, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "./jobdetails/about/About";
import Nearbyjobs from "./nearbyjobs/Nearbyjobs";
import BottomSiderBar from "./bottomNav/BottomSiderbar";

const homeName = "Introduction";
const detailsName = "BIFUGFF";
const bottomSiderBar = "BS";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === detailsName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === bottomSiderBar) {
            iconName = focused ? "settings" : "settings-outline";
          }
          return;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "grey",
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 },
      }}
    >
      <Tab.Screen
        name={homeName}
        component={Nearbyjobs}
        screenOptions={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={detailsName}
        component={About}
        screenOptions={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={bottomSiderBar}
        component={BottomSiderBar}
        screenOptions={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

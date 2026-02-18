import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet, useWindowDimensions, View } from "react-native";

import {
  HomeIcon,
  ProfileIcon,
  PublicationsIcon,
  RoosterIcon,
} from "@/assets/nav-icons";
import { useEffect } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { ThemedText } from "./themed-text";

const INDICATOR_WIDTH = 60;

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const translateX = useSharedValue(0)
  const { width } = useWindowDimensions();
  const horizontalPadding = 40;

  // const tabWidth = width / state.routes.length;
  const tabWidth = (width - horizontalPadding) / state.routes.length;
  
  useEffect(() => {
    console.log("USE EFFECT")
    const centerOffset =
      tabWidth * state.index +
      tabWidth / 2 -
      INDICATOR_WIDTH / 2;

    translateX.value = withSpring(centerOffset + 20);
  }, [state.index, width]);


  // useEffect(() => {
  //   translateX.value = withSpring(90)
  // })

  const animatedIndicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });


  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.indicator,
          { width: INDICATOR_WIDTH },
          animatedIndicatorStyle,
        ]}
      />

      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        let Icon;

        if (route.name === "index") Icon = HomeIcon;
        if (route.name === "rooster") Icon = RoosterIcon;
        if (route.name === "publication") Icon = PublicationsIcon;
        if (route.name === "profile") Icon = ProfileIcon;

        // This is the key part:
        const { options } = descriptors[route.key];

        // Get the title
        const title = options.title ?? route.name;

        return (
          <Pressable key={route.key} onPress={onPress} style={[{...styles.tab}]}>
            <Icon
              width={24}
              height={24}
              color={isFocused ? "#5653FC" : "#717680"}
            />
            <ThemedText style={{fontSize: 12,marginTop: 3, color: isFocused ? "#5653FC" : "#717680"}}>{title}</ThemedText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        position: "relative",
        height: 80,
        // gap: 12,
        paddingHorizontal: 20,
        elevation: 20,
        backgroundColor: "#fff",
        justifyContent: "space-around",
        alignItems: "center",
    },
    tab: {
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red"
    },
    indicator: {
        position: "absolute", 
        height: 4,
        // width: 100,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,  
        backgroundColor: "#5653FC",
        top: 0,
        left: 0,
    }
});

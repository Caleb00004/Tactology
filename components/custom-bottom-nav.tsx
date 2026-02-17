import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet, View } from "react-native";

import {
    HomeIcon,
    ProfileIcon,
    PublicationsIcon,
    RoosterIcon,
} from "@/assets/nav-icons";
import { ThemedText } from "./themed-text";

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
        <View style={{height: 3, width: 20, position: "absolute", backgroundColor: "#5653FC"}}></View>
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
          <Pressable key={route.key} onPress={onPress} style={[{...styles.tab}, isFocused ? {borderTopColor: "#5653FC", borderTopWidth: 5} : {}]}>
            <Icon
              width={24}
              height={24}
              color={isFocused ? "#5653FC" : "#717680"}
            />
            <ThemedText style={{fontSize: 12, color: isFocused ? "#5653FC" : "#717680"}}>{title}</ThemedText>
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
    backgroundColor: "#fff",
    // borderTopWidth: 1,
    borderTopColor: "#eee",
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
});

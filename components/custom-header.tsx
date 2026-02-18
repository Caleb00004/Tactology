import { VerticalDotsIcon } from "@/assets/nav-icons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "./themed-view";

export default function CustomHeader({ options }: any) {
  const { headerTitle } = options;

  let titleContent;

  if (typeof headerTitle === "function") {
    // If it's a function, render it
    titleContent = headerTitle({
      children: options.title,
    });
  } else {
    // If it's a string
    titleContent = (
      <Text style={styles.title}>
        {headerTitle}
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
        <ThemedView style={{flexDirection: "row", justifyContent: "space-between"}}>
            {titleContent}
            <View style={{borderWidth: 1, paddingHorizontal: 18, height: 42, borderRadius: 7, borderColor: "#E5E7EB", alignItems: "center", justifyContent: "center" }}><VerticalDotsIcon /></View>
        </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    paddingTop: 15,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
  },
});

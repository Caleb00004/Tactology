import { VerticalDotsIcon } from "@/assets/nav-icons";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "./themed-view";

type Props = BottomTabHeaderProps & {
  children?: React.ReactNode;
};

export default function CustomHeader({ options, children }: Props) {
  const { headerTitle, title } = options;

  let titleContent;

  // 1️⃣ If children passed → full override
  if (children) {
    titleContent = children;
  }

  else if (typeof headerTitle === "function") {
    // If it's a function, render it
    titleContent = headerTitle({
      children: options.title,
    });
  } else if (typeof headerTitle === "string") {
    // If it's a string
    titleContent = (
      <Text style={styles.title}>
        {headerTitle}
      </Text>
    );
  }
  // 4️⃣ Fallback to route title
  else {
    titleContent = (
      <Text style={styles.title}>{title}</Text>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
        <ThemedView style={{flexDirection: "row", justifyContent: "space-between"}}>
            {titleContent}
            {!children && <View style={{borderWidth: 1, paddingHorizontal: 18, height: 42, borderRadius: 7, borderColor: "#E5E7EB", alignItems: "center", justifyContent: "center" }}><VerticalDotsIcon /></View>}
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
    fontSize: 25,
    fontWeight: "600",
  },
});

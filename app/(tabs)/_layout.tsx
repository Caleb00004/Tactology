import { Tabs } from 'expo-router';
import React from 'react';

import CustomTabBar from '@/components/custom-bottom-nav';
import CustomHeader from '@/components/custom-header';
import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  // #717680
  // #5653FC
  return (
    <Tabs
      screenOptions={{
        header: (props) => <CustomHeader {...props} />,
        tabBarActiveTintColor:
          Colors[colorScheme ?? "light"].tint,
        tabBarButton: HapticTab,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="rooster" options={{ title: "Rooster", headerTitle: "Mijn rooster" }} />
      <Tabs.Screen name="publication" options={{ title: "Publications" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

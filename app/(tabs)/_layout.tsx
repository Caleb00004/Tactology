import { Tabs } from 'expo-router';
import React from 'react';

import CustomTabBar from '@/components/custom-bottom-nav';
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
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="rooster" options={{ title: "Rooster" }} />
      <Tabs.Screen name="publication" options={{ title: "Publications" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
{/*       
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={"#5653FC"} />,
        }}
      />
      <Tabs.Screen
        name="rooster"
        options={{
          title: 'Rooster',
          tabBarIcon: ({ color }) => <RoosterIcon color={"#fffff"} />,
        }}
      />
      <Tabs.Screen
        name="publication"
        options={{
          title: 'Publications',
          tabBarIcon: ({ color }) => <PublicationsIcon color={"#fffff"} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <PublicationsIcon color={"#fffff"} />,
        }}
      /> */}
    </Tabs>
  );
}

import { Tabs } from 'expo-router';
import React, { useContext } from 'react';

import { appContext } from '@/components/contexts/appContext';
import CustomTabBar from '@/components/custom-bottom-nav';
import CustomHeader from '@/components/custom-header';
import { HapticTab } from '@/components/haptic-tab';
import ShiftDetails from '@/components/rooster/shift-details';
import ProfileImage from '@/components/secondary/profile-image';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Text, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {isShiftDetailsSheetOpen, closeShiftDetailsSHeet} = useContext(appContext)
  // #717680
  // #5653FC
  return (
    <>
      <ShiftDetails isSheetOpen={isShiftDetailsSheetOpen} closeSheet={closeShiftDetailsSHeet} data={{}} />
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
        <Tabs.Screen name="publication" options={{ title: "Publications", header: (props) => (
          <CustomHeader {...props}>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <View>
                <Text style={{fontSize: 25, fontWeight: "600",}}>Welcome Back 👋</Text>
                <Text style={{color: "#4E5D69", fontSize: 14}}>start exploring publications</Text>
              </View>
              <ProfileImage />
            </View>
          </CustomHeader>
        ), }} 
        />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
    </>
  );
}

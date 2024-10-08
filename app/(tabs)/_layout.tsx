import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Header } from '@/components/Header';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.tabsArea}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
          }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: 'Explore',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
              ),
            }}
          />
        </Tabs>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  tabsArea: {
    flex: 1, // Ensure Tabs take up remaining space
  },
});
import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView, StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { Header } from '@/components/Header';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import HomeScreen from '.';
import TabTwoScreen from './explore';
import { useNavigation, DrawerActions } from '@react-navigation/native';

type RootDrawerParamList = {
  index: undefined;
  explore: undefined;
};

type DrawerNavProp = DrawerNavigationProp<RootDrawerParamList>;

const Drawer = createDrawerNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<DrawerNavProp>();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <Text style={styles.menuText}>Open Menu</Text>
      </TouchableOpacity>
      <View style={styles.tabsArea}>
      <Drawer.Navigator
            screenOptions={{
              drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
              headerShown: false,
              sceneContainerStyle: { backgroundColor: 'transparent' }, // Ensure scene container is transparent
            }}
          >
            <Drawer.Screen
              name="index"
              component={HomeScreen}
              options={{
                title: 'Home',
                drawerIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="explore"
              component={TabTwoScreen}
              options={{
                title: 'Explore',
                drawerIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
                ),
              }}
            />
          </Drawer.Navigator>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  tabsArea: {
    flex: 1, // Ensure Tabs take up remaining space
    backgroundColor: 'transparent',
  },
  menuButton: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
    zIndex: 4,
  },
  menuText: {
    color: 'white',
    fontSize: 18,
  },
});
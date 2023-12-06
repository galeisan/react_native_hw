import React, {useEffect} from 'react';
import { Button, Linking, Text, TouchableOpacity } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from './screens/SettingsScreen';
import NewsScreen from './screens/NewsScreen';
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import Navigation from './navigation/Navigation';
import {DeepLinking} from './navigation/DeepLinking';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNavigation = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false, tabBarLabel: t('main.tabs.home.title')}}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: t('main.tabs.news'),
          headerTitle: t('main.tabs.news'),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: t('main.tabs.chat'),
          headerTitle: t('main.tabs.chat'),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: t('main.tabs.settings'),
          headerTitle: t('main.tabs.settings'),
        }}
      />
    </Tab.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  useEffect(() => {
    Linking.getInitialURL().then(async (deepLinkInitialURL: any) => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  }, []);

  return (
    <NavigationContainer
      linking={DeepLinking.linking}
      ref={Navigation.navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={'Tab'}
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

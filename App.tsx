import React, {useEffect} from 'react';
import {Linking} from 'react-native';
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
import {useTheme} from './modules/theme/useTheme';
import {ThemeProvider} from './modules/theme/ThemeProvider';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNavigation = () => {
  const {Colors} = useTheme();
  const colors = Colors;
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.accentPrimary,
        tabBarInactiveTintColor: colors.accentSecondary,
        headerStyle: {backgroundColor: colors.overlay},
        headerTitleStyle: {
          color: colors.textPrimary,
        },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: colors.overlay,
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
          elevation: 0,
          borderTopWidth: 0,
        },
      }}>
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
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
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
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;

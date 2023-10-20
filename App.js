import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import RegisterScreen from './screens/RegisterScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'cog';
            } else if (route.name === 'Login') {
              iconName = 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
        />
        <Tab.Screen name="Login" component={LoginScreen} options={{
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
        }} />
        <Tab.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        }} />
        <Tab.Screen name="Register" component={RegisterScreen} options={{
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        }} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}

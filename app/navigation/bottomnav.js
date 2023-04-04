import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from '../screen/pages/home';
import Chats from '../screen/pages/chats';
import Voom from '../screen/pages/voom';
import Calls from '../screen/pages/calls';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="comments" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Voom"
        component={Voom}
        options={{
          tabBarLabel: 'Voom',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="rocket" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: 'Calls',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="phone" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});

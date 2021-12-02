import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import TabScreen from './TabScreen'

function About() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
      <Text>Made with <Ionicons name="heart"/> by Rafli Ramadhan</Text>
      <Text style={{marginTop:10}}>Fienews v1.0</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function BottomTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="black"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Feed"
        component={TabScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="info" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabScreen;
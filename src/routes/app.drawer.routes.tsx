import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#8257e5'
        }
      }}
      initialRouteName="Home"
    >
      <Screen name='Home' component={Home}/>
      <Screen name='Profile' component={Profile} />
    </Navigator>
  )
}
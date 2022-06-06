import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerRoutes } from './app.drawer.routes';
import { Details } from '../screens/Details';

export type RootStackParamList = {
  Drawer: undefined;
  Details: {name: string};
}

export function StackRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Drawer' component={DrawerRoutes}/>
      <Screen name='Details' component={Details} />
    </Navigator>
  )
}
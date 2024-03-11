import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../screens';
import DefaultScreenOptions from './DefaultScreenOptions';
import Routes from './Routes';

const Stack = createStackNavigator();

export const StackNavigation: React.FC = () => {

  const screenOptions = () => {
    return { ...DefaultScreenOptions };
  }

  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={screenOptions}>
      <Stack.Screen
        name={Routes.Home}
        component={Screens.HomeScreen} />
        {/* All other screens here*/}
    </Stack.Navigator>
  );
};

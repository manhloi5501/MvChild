import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import BottomTab from './BottomTab';
import MovieDetailStack from './MovieDetailStack';
import {primaryTransitionSpec} from '../constants/configNavigation';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import AuthStack from './AuthStack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: primaryTransitionSpec,
          close: primaryTransitionSpec,
        },
        animationTypeForReplace: 'pop',
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MovieDetailStack" component={MovieDetailStack} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

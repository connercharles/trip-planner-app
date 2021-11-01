import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import HomeScreen from '../screens/homeScreen';
import IdeasBrowserScreen from '../screens/ideasBrowserScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import PackingChecklistScreen from '../screens/packingChecklistScreen';
import ScheduleScreen from '../screens/scheduleScreen';
import TicketHolderScreen from '../screens/ticketHolderScreen';
import TicketScreen from '../screens/ticketScreen';
import TripScreen from '../screens/tripScreen';
import MapScreen from '../screens/mapScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Trip" component={TripScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="PackingList" component={PackingChecklistScreen} />
      <Stack.Screen name="TicketHolder" component={TicketHolderScreen} />
      <Stack.Screen name="TicketScreen" component={TicketScreen} />
      <Stack.Screen name="IdeasBrowserScreen" component={IdeasBrowserScreen} />
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

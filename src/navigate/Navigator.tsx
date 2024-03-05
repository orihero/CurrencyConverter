import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {Screens} from './consts/screen';
import HomeScreen from '../screens/home/HomeScreen';
import CurrencyList from '../screens/list/CurrencyList';
import NavigationService from './NavigationService';

const Stack = createStackNavigator();

export const Navigator: React.FC = observer(() => {
  return (
    <NavigationContainer ref={NavigationService.ref}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screens.HOME} component={HomeScreen} />
        <Stack.Screen name={Screens.CURRENCY_LIST} component={CurrencyList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

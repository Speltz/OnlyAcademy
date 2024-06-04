import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/profile';
import CameraScreen from '../screens/camera';
import PagamentoScreen from "../screens/pagamento";
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }} initialRouteName='Profile'>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Pagamento" component={PagamentoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;

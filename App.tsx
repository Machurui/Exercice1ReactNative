/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ViewAccounts from './ViewAccounts';

enableScreens();

type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  ViewAccounts: undefined;
};

export const storage = new MMKV();

export type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;

export type SignInScreenProps = StackScreenProps<RootStackParamList, 'SignIn'>;

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => (
  <SafeAreaProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUp">
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ViewAccounts" component={ViewAccounts} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  </SafeAreaProvider>
);


export default App;

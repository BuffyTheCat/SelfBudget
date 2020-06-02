import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Navbar from './components/navbar'
import TabBar from './components/tab-bar'
import Login from './screens/login'
import store from './store';

const Stack = createStackNavigator();

export default function App() {
    
    return (
        <NavigationContainer>
            <Provider store={store}>
                <Navbar title="Self Budget" />
                <Stack.Navigator initialRouteName={store.getState().autorised ? 'MainFunctional' : 'LoginPage'}
                            screenOptions={{
                              headerShown: false,
                            }}>
                    <Stack.Screen name="LoginPage" component={Login} options={{gestureEnabled: false}} />
                    <Stack.Screen name="MainFunctional" component={TabBar} options={{gestureEnabled: false}} />
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    );
};

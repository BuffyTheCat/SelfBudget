import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen  from '../../screens/statistic'
import ScanRecept from '../../screens/scan-recept'
import Table from '../../screens/table'
import { ChartIcon, PhotoIcon, TableIcon } from '../../icons';
import { THEME } from '../../theme';


const Tab = createBottomTabNavigator();
const TabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {  
                    let iconName;  
                    if (route.name === 'Statistic') {
                        return <ChartIcon fill={iconName = focused ? THEME.BROWN_COLOR : 'gray'} />;
                    } else if (route.name === 'Scan Recept') {
                        return <PhotoIcon fill={iconName = focused ? THEME.BROWN_COLOR : 'gray'} />;
                    } else if (route.name === 'Detail table') {
                        return <TableIcon fill={iconName = focused ? THEME.BROWN_COLOR : 'gray'} />;
                    }
                },
            })}
            tabBarOptions={
                {
                    activeTintColor: THEME.BROWN_COLOR,
                    inactiveTintColor: 'gray',
                    style: {
                        backgroundColor: '#f7f7f7',
                    }
                }
            }
        >
            <Tab.Screen name="Statistic" component={MainScreen} />
            <Tab.Screen name="Scan Recept" component={ScanRecept} />
            <Tab.Screen name="Detail table" component={Table} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
    }
})

export default TabBar;
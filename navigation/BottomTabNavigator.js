import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomNavigator() {

    return (
        <BottomTab.Navigator tabBarOptions={{ showLabel: false }}>
            {/* <BottomTab.Screen name="Home"
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <HomeIcon fillColor={focused ? Colors.tabIconSelected : Colors.tabIconDefault} />
                    },
                }}
                component={HomeScreen} /> */}
        </BottomTab.Navigator >
    )
}

import React from "react";
import IMC from "@/components/IMC";
import Perfil from "@/components/perfil";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Home(){
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="IMC" component={IMC}/>
                <Tab.Screen name="Perfil" component={Perfil}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
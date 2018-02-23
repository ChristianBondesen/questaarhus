import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import MainScreen from '../login-module/MainScreen';
import RegisterScreen from '../login-module/RegisterScreen';
import RecommendedVenturesScreen from '../venture-module/RecommendedVentureScreen';
import VentureRouting from '../routing/VentureRouting';
import VentureScreen from '../venture-module/VentureScreen';

export const RootStack = StackNavigator(
    {
        Main: {
            screen: MainScreen
        },
        Register: {
            screen: RegisterScreen
        },
        VentureRouting: {
            screen: TabNavigator ({
                VentureScreen: {
                    screen: VentureScreen,
                    navigationOptions: ({ navigation }) => ({
                        title: 'Venture Home',
                    }),
                },
                RecommendVentures: {
                    screen: RecommendedVenturesScreen,
                    navigationOptions: ({ navigation }) => ({
                        title: 'Recommended Venture!'
                    }),
                },
            })
        }
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none'
    });
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../login-module/LoginScreen';
import MainScreen from '../login-module/MainScreen';

export const RootStack = StackNavigator(
    {
        Main: {
            screen: MainScreen
        },
        Login: {
            screen: LoginScreen
        }
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none'
    }
);
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import VentureScreen from '../venture-module/VentureScreen';
import RecommendedVenturesScreen from '../venture-module/RecommendedVentureScreen';

export const VentureRouting = TabNavigator(
    {
        Venture: {
            screen: VentureScreen 
        },
        Recommended: {
            screen: RecommendedVenturesScreen
        }
    },     
    {
        // initialRouteName: 'VentureScreen',
        // headerMode: 'none'
    }
);
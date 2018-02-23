import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import VentureRouting from '../routing/VentureRouting';

export default class VentureScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {    
        return (
                <View style={styles.flexContainer}>
                    <Text> VENTURE HERE VENTURE THTERE</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B8057',
        
        padding: 20        
    }
});
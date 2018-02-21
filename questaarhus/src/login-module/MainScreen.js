import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class MainScreen extends Component {
    render() {
        return (
            <View style={styles.flexContainer}>
                <View>
                    <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} style={styles.flexLogo} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B8057'
    },
    flexLogo: {
        flexGrow: 1,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: 100,
        height: 100    
    }
});

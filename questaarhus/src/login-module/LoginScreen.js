import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Constants, Facebook } from 'expo';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userLogin: '',
            userPassword: ''
        };
    }
    render() {
        return (
            <View style={styles.flexContainer}>
                <Text style={ {alignSelf: 'center'} }> Login! </Text>
                <TextInput style={flexItem} placeholder="UserName" onChangeText={(text) => this.setState({userLogin: text})} />        
                <TextInput style={flexItem} placeholder="Password" onChangeText={(text) => this.setState({userPassword: text})} />                                              
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    flexItem: {
        textAlign: 'center',
        margin: 1,     
    }
})

import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Button, KeyboardAvoidingView, TouchableOpacity, TextInput, Animated } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class MainScreen extends Component {

    constructor(props){
        super(props);
    }

    onScreenChange(text) {
        switch(text) {
            case('Register'): {
                this.props.navigation.navigate(text);
                break;
            }
            case('FacebookConnect'): {
                alert('Facebook connecT!');
                break;
            }
            case('VentureRouting'): {
                this.props.navigation.navigate(text);
                break;
            }
            default:
                alert('no such route');
                return;
        }
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }

    repeatAni() {

        console.log("jeg er kladt!");

        Animated.sequence([
            Animated.timing(this.animatedValue, {
                toValue: 1,
                duration: 2000
            }),
            Animated.timing(this.animatedValue, {
                toValue: 0,
                duration: 2000,
            })
        ]).start(() => {
            this.repeatAni();
        });
    }

    componentDidMount() {
        this.repeatAni();
    }

    render() {
        const interpolateRotation = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg'],
        });
        const animatedStyle = {
            transform: [
                { rotate: interpolateRotation }
            ]
        }
        return (
            <KeyboardAwareScrollView 
                contentContainerStyle={styles.flexContainer}
                enableOnAndroid={true}
                keyboardShouldPersistTaps="always"
                >
                <View style={styles.logoContent}>
                    <Animated.View style={animatedStyle}>
                        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}  style={styles.flexLogo}/>
                    </Animated.View>                    
                    <Text style={styles.mainTitle}>
                        Venture Aarhus!! 
                    </Text>
                    <View style={{flex: 0}}>
                        <TextInput 
                            underlineColorAndroid='transparent'                
                            style={styles.input}
                            placeholder="User name"
                            onChangeText={(text) => this.setState({userLogin: text})}
                            />

                        <TextInput
                            underlineColorAndroid='transparent'
                            style={styles.input} 
                            placeholder="Password" 
                            onChangeText={(text) => this.setState({userPassword: text})} 
                            />

                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.loginBtn}
                                  onPress={() => this.onScreenChange('VentureRouting')}
                                  > LOGIN 
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnContainer}>
                            <Text
                                style={styles.FacebookBtn}
                                onPress={() => this.onScreenChange('FacebookConnect')}
                                > CONNECT WITH FACEBOOK
                            </Text>
                        </TouchableOpacity>       
                        
                        <TouchableOpacity style={styles.btnContainer}>
                                <Text style={{color: 'white'}}>
                                    Don't have an account?{'\t'}
                                    <Text 
                                        style={styles.signUpBtn}
                                        onPress={() => this.onScreenChange('Register')}
                                        > -{'\t'}sign up here!  
                                    </Text>
                                </Text>
                        </TouchableOpacity>
                    </View>                  
                </View>
            </KeyboardAwareScrollView>
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
    },
    flexLogo: {
        borderRadius: 30,
        width: 100,
        height: 100  
    },
    logoContent:{
        flexGrow :1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainTitle: {
        width : 200,
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color :'#ffffff'
    },
    flexText: {
        textAlign: 'center',
        margin: 1,     
    },
    input: {
        minWidth:300,
        flexWrap:'wrap',
        height : 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal : 10,
        color:'#fff',
        marginBottom : 10,
        borderRadius: 5,
      },
      btnContainer: {
        marginTop: 10,
        marginBottom: 2,
      },
      loginBtn: {
          backgroundColor: '#0d422d',
          textAlign: 'center',
          fontWeight: '700',
          color: 'white',
          padding: 10,
          borderRadius: 5
      },
      FacebookBtn: {
        backgroundColor: '#308bdb',
        textAlign: 'center',
        fontWeight: '700',
        color: 'white',
        padding: 10,
        borderRadius: 5
      },
      signUpBtn: {
          color: '#4fa59e',
          fontWeight: '500',
          fontStyle: 'italic',
      }
});

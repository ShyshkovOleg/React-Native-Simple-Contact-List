import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default class FancyButton extends Component {
    constructor() {
        super();
        this.state = {
            pressStatus: false 
        };
    }

    render() {
        const {
            onPress,
            title,
            disabled,
            toggleModal
        } = this.props;
    
        return (
            <TouchableWithoutFeedback disabled={disabled} title={title} 
                onPressIn={() => this.setState({ pressStatus: true })}
                onPressOut={() => this.setState({ pressStatus: false })}
                onPress={onPress}
            >
                <View style={this.state.pressStatus ? styles.buttonPressed : styles.button}>
                    <Text style={{color: 'white'}} disabled={disabled}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#88D840',
        borderBottomColor: '#67B826',
        borderBottomWidth: 10,
        alignItems: 'center',
        justifyContent: "center",
        height: 50,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonPressed: {
        backgroundColor: '#88D840',
        alignItems: 'center',
        justifyContent: "center",
        height: 40,
        borderRadius: 5,
        opacity: 0.5
    },

});
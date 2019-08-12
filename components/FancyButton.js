import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touchable, TouchableHighlight, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class FancyButton extends Component {
    constructor() {
        super();
        this.state = {
            pressStatus: false 
        };
    }

    _onHideUnderlay(){
        this.setState({ pressStatus: false });
    }
    _onShowUnderlay(){
        this.setState({ pressStatus: true });
    }

    render() {
        const {
            onPress,
            title,
            disabled,
            toggleModal
        } = this.props;
    
        return (
            // <TouchableHighlight disabled={disabled} onPress={() => toggleModal(true, {}, true)} title={title}
            <TouchableHighlight disabled={disabled} onPress={onPress} title={title}
                style={this.state.pressStatus ? styles.buttonPressed : styles.button}
                onHideUnderlay={this._onHideUnderlay.bind(this)}
                onShowUnderlay={this._onShowUnderlay.bind(this)}
                underlayColor={'#88D840'}
            >
                {/* <View > */}
                <Text style={{color: 'white'}} disabled={disabled}>
                    {title}
                </Text>
                {/* </View> */}
            </TouchableHighlight>
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
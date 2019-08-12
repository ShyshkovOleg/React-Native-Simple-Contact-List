import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-community/async-storage';

import FancyButton from './FancyButton';

export default class InputForm extends Component {
    state = {
        // formValid: true,
        id: '',
        firstName: "ім'я",
        lastName: 'прізвище',
        cell: 'телефон',
        email: 'пошта'
    };

    render() {
        saveToLocal = () => {
            (async () => {
                try {
                  await AsyncStorage.setItem('contacts', JSON.stringify(this.state));
                } catch (error) {
                  // Error saving data
                }
            })();
            AsyncStorage.getAllKeys((res) => alert(res));
        }
        return (
            <View style={{flexDirecrtion: 'column',alignItems: 'center', flex: 1, marginTop: 15}}>

                <TextInput
                    style={styles.input} 
                    onChangeText={(firstName) => this.setState({firstName})}
                    onFocus={() => this.setState({firstName: ''})}
                    value={this.state.firstName}
                />
                {/* <Text style={{fontSize: 12,  transform: [{translateY: -25}]}}>ім'я</Text> */}
                
                <TextInput 
                    style={styles.input} 
                    onChangeText={(lastName) => this.setState({lastName})}
                    onFocus={() => this.setState({lastName: ''})}
                    value={this.state.lastName}
                />
                {/* <Text style={{fontSize: 12,  transform: [{translateY: -25}]}}>прізвище</Text> */}

                <TextInput 
                    keyboardType='numeric'
                    style={styles.input} 
                    onChangeText={(cell) => this.setState({cell})}
                    onFocus={() => this.setState({cell: ''})}
                    value={this.state.cell}
                />
                {/* <Text style={{fontSize: 12,  transform: [{translateY: -25}]}}>телефон</Text> */}

                <TextInput
                    keyboardType='email-address'
                    style={styles.input} 
                    onChangeText={(email) => this.setState({email})}
                    onFocus={() => this.setState({email: ''})}
                    value={this.state.email}
                />
                {/* <Text style={{fontSize: 12,  transform: [{translateY: -25}]}}>пошта</Text> */}
                
                <View style={{width: '95%', marginTop: 15}}>
                    <FancyButton title={'SAVE'} disabled={false} onPress={()=> saveToLocal()}/>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: '95%',
        color: '#272734',
        height: 40,
        // borderColor: 'gray',
        // borderWidth: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginTop: 5
        // marginTop: -10
    }
});

// export default InputForm;

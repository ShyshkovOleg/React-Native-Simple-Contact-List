import React, {Component} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import FancyButton from './FancyButton';

export default class InputForm extends Component {
    state = {
        id:  new Date().getTime(),
        firstName: "ім'я",
        lastName: 'прізвище',
        cell: 'телефон',
        email: 'пошта'
    };

    render() {
        const { inputData, closeModal } = this.props;

        return (
            <View style={styles.container}>

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
                
                <View style={styles.inputButton}>
                    <FancyButton title={'SAVE'} disabled={false} 
                    onPress={()=> {
                        closeModal(false, {}, true);
                        inputData(this.state);
                    }}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        marginTop: 15
    },
    input: {
        width: '95%',
        color: '#272734',
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginTop: 5
    },
    inputButton: {
        width: '95%',
        marginTop: 60,
        justifyContent: 'flex-end',
        flexDirection: 'column',
    }
});


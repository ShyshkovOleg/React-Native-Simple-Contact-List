import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const InputForm = (props) => {
    this.state = {
        formValid: true,
        credentials: {
            id: '',
            firstName: '',
            lastName: '',
            cell: '',
            email: ''
        }
    };
    return (
        // <View style={{flexDirecrtion: 'row', flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap'}}>
            //  <InputField
            //   labelText="FIRST NAME"
            //   labelTextSize={14}
            //   labelColor={colors.white}
            //   textColor={colors.white}
            //   borderBottomColor={Colors.dark}
            //   inputType="email"
            //   customStyle={{ marginBottom: 30 }}
            // //   onChangeText={this.handleEmailChange}
            //   showCheckmark={validEmail}
            //   autoFocus
            // />
            // <InputField
            //   labelText="LAST NAME"
            //   labelTextSize={14}
            //   labelColor={colors.white}
            //   textColor={colors.white}
            //   borderBottomColor={colors.white}
            //   inputType="password"
            //   customStyle={{ marginBottom: 30 }}
            // //   onChangeText={this.handlePasswordChange}
            //   showCheckmark={validPassword}
            // />
        // </View>
        <View>
            <Text>HELLO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    smallText: {
        color: '#272734',
    },
    bigText: {
        color: '#272734',
        fontWeight: 'bold',
    }
});

export default InputForm;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ContactCard = (props) => {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={{flexDirection: 'column', justifyContent: 'space-around', flex: 1, margin: 5}}>
                <Text style={styles.text}>ID:  {props.item.name}</Text>
                <Text style={styles.text}>ID:  {props.item.name}</Text>
                <Text style={styles.text}>ID:  {props.item.name}</Text>
            </View >

            {/* <View style={{width: 50, height: 50}}> */}
                <Image style={{resizeMode: 'stretch', width: '10%'}} source={require('../images/man.png')} style={styles.btnImage}/>
            {/* </View> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.dark,
        borderRadius: 10,
        height: 100,
        width: 100,
        flexDirection: 'row',
        margin: 10,
        alignItems: 'stretch',
        // borderColor: 'red',
        // borderWidth: 5
    },
    text: {
        color: '#ffffff',
    }
});

export default ContactCard;

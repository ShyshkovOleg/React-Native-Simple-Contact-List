import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

let screenWidth;

const ContactCard = (props) => {
    dynamicStyle = () => {
        if (props.isPortrait) {
            return {
                backgroundColor: Colors.dark,
                borderRadius: 5,
                height: 100,
                width: props.screenWidth - 20,
                flexDirection: 'row',
                margin: 5,
            };
        } else {
            return {
                backgroundColor: Colors.dark,
                borderRadius: 5,
                height: 100,
                width: props.screenWidth / 2 - 20,
                flexDirection: 'row',
                margin: 5,
            };
        }
    }
    return (
        <TouchableOpacity style={this.dynamicStyle()} onPress={() => props.toggleModal(true, props.item, false)}>

            <View style={{flexDirection: 'column', flex: 2, margin: 5}}>
                <Text style={styles.bigText}>{props.item.firstName + ' ' +  props.item.lastName}</Text>
                <Text style={styles.smallText}>{props.item.cell}</Text>
                <Text style={styles.smallText}>{props.item.email}</Text>
            </View >

            {
                props.isRearranged ?
                <View></View> :
                <View style={{flex: 1, justifyContent: "center", backgroundColor: "#67B826"}}>
                
                    {
                        props.item.id %2 === 0 ?
                        <Image style={{resizeMode: 'center', width: '100%'}} source={require('../images/man.png')}/> :
                        <Image style={{resizeMode: 'center', width: '100%'}} source={require('../images/girl.png')}/>
                    }
                
                </View>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    smallText: {
        color: '#ffffff',
    },
    bigText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default ContactCard;

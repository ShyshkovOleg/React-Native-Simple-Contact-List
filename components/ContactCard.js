import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

let screenWidth;

const ContactCard = (props) => {
    dynamicStyle = () => {
        if (props.isPortrait) {
            return {
                backgroundColor: Colors.dark,
                borderRadius: 5,
                height: 100,
                width: '100%',
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
        // <TouchableOpacity style={props.isPortrait ? styles.cardP : styles.cardL}>
        <TouchableOpacity style={this.dynamicStyle()}>

            <View style={{flexDirection: 'column', flex: 2, margin: 5}}>
                <Text style={styles.bigText}>{props.item.firstName + ' ' +  props.item.lastName}</Text>
                <Text style={styles.smallText}>{props.item.cell}</Text>
                <Text style={styles.smallText}>{props.item.email}</Text>
            </View >

            <View style={{flex: 1, justifyContent: "center", backgroundColor: "#67B826"}}>
                
                {
                    props.item.id %2 === 0 ?
                    <Image style={{resizeMode: 'center', width: '100%'}} source={require('../images/man.png')}/> :
                    <Image style={{resizeMode: 'center', width: '100%'}} source={require('../images/girl.png')}/>
                }
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardP: {
        backgroundColor: Colors.dark,
        // backgroundColor: "#88D840",
        borderRadius: 5,
        height: 100,
        width: '100%',
        flexDirection: 'row',
        margin: 5,
    },
    cardL: {
        backgroundColor: Colors.dark,
        // backgroundColor: "#88D840",
        borderRadius: 5,
        height: 100,
        // width: Dimensions.get('window').width / 1.8,
        width: screenWidth,
        flexDirection: 'row',
        margin: 5,
    },
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

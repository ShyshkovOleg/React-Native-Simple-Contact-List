import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

let screenWidth;

const ContactDetails = (props) => {
    return (
        <View style={{flexDirecrtion: 'row', flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap'}}>
            <View style={{flexDirection: 'column', margin: 10}}>
                <Text style={styles.smallText}>First name: </Text>
                <Text style={styles.smallText}>Last Name: </Text>
                <Text style={styles.smallText}>Phone: </Text>
                <Text style={styles.smallText}>Email: </Text>
            </View >
            <View style={{flexDirection: 'column', margin: 10}}>
                <Text style={styles.bigText}>{itemData.firstName}</Text>
                <Text style={styles.bigText}>{itemData.lastName}</Text>
                <Text style={styles.smallText}>{itemData.cell}</Text>
                <Text style={styles.smallText}>{itemData.email}</Text>
            </View >
        </View>
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

export default ContactDetails;

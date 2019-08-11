import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
                <Text style={styles.bigText}>{props.itemData.firstName}</Text>
                <Text style={styles.bigText}>{props.itemData.lastName}</Text>
                <Text style={styles.smallText}>{props.itemData.cell}</Text>
                <Text style={styles.smallText}>{props.itemData.email}</Text>
            </View >
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

export default ContactDetails;

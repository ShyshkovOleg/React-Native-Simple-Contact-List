import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  View,
  Image,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import colors from '../styles/colors';

export default class CustomModal extends Component {
    // constructor(props){
    //     super(props)
    // }

    render() {
        const { animationType, modalVisible, toggleModal, isPortrait, itemData } = this.props;
        return (
        <Modal animationType={animationType} transparent visible={modalVisible}>
            <View style={styles.wrapper}>
              <View style={isPortrait ? styles.modalContainer : styles.modalContainerLanscape}>
                
                <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'center', height: 50}} onPress={() => {toggleModal(false, {})}}>
                    <Image style={{height: 20, width: 20, marginRight: 15}} source={require('../images/close.png')}/>
                </TouchableOpacity>
                
                <View style={{flexDirection: 'column'}}>
                
                  {/* <View style={{flexDirecrtion: 'row', flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap'}}>
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
                  </View> */}

                  <View style={{flex: 1, justifyContent: "flex-end", alignItems: 'center', width: '100%'}}>
                    <Image style={{resizeMode: 'center', height: 100, width: 100, borderRadius: 100}} source={require('../images/placeholder.png')}/>
                  </View>
                </View>
                  
              </View>
            </View>
        </Modal>
        );
    }
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
    height: '100%',

    alignItems: "center",
    justifyContent: 'center'
  },
  modalContainer: {
    width: '90%',
    height: '25%',
    backgroundColor: Colors.lighter,
    borderRadius: 5,
  },
  modalContainerLanscape: {
    width: '90%',
    height: '50%',
    backgroundColor: Colors.lighter,
    borderRadius: 5,
  },
  smallText: {
    color: '#272734',
  },
  bigText: {
      color: '#272734',
      fontWeight: 'bold',
      // fontSize: 20
  }
});
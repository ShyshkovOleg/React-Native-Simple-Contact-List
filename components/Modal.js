import React, { Component } from 'react';
import {
  View,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import ContactDetails from "../components/ContactDetails";
import InputForm from "../components/InputForm";

export default class CustomModal extends Component {

    render() {
        const { animationType, modalVisible, toggleModal, isPortrait, itemData, isNewContact } = this.props;

        dynamicStyle = () => {
          switch (true) {
            case isPortrait && !isNewContact:
              return styles.modalContainer;
            case !isPortrait && !isNewContact:
              return styles.modalContainerLanscape;
            case isPortrait && isNewContact:
              return styles.modalContainerLanscape;
            case !isPortrait && isNewContact:
              return styles.modalContainerLanscapeNewContact;
          }
        }
        return (
        <Modal animationType={animationType} transparent visible={modalVisible}>
            <View style={styles.wrapper}>
              {/* <View style={isPortrait ? styles.modalContainer : styles.modalContainerLanscape}> */}
              <View style={dynamicStyle()}>
                
                <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'center', height: 50}} onPress={() => {toggleModal(false, {})}}>
                    <Image style={{height: 20, width: 20, marginRight: 15}} source={require('../images/close.png')}/>
                </TouchableOpacity>
                
                <View style={{flexDirection: 'column'}}>

                  {isNewContact ? <InputForm /> : <ContactDetails itemData={itemData}/>}

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
  modalContainerLanscapeNewContact: {
    width: '90%',
    height: '80%',
    backgroundColor: Colors.lighter,
    borderRadius: 5,
  },
});
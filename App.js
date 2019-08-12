import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
  Text
} from 'react-native';
  
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-community/async-storage';

import ContactCard from './components/ContactCard';
import FancyButton from './components/FancyButton';
import CustomModal from './components/Modal';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      isPortrait: true,
      screenWidth: Dimensions.get('window').width,
      isRearranged: false,
      modalVisible: false,
      itemData: {},
      isNewContact: false
    }
  }

  getFromLocal = async () => {
    try {
        const value = await AsyncStorage.getItem('contacts');
        const arr = JSON.parse(value)
        this.setState({items: arr})
    } catch (e) {
        console.info(e);
    }
  }

  
  saveToLocal = async (data) => {
      try {
          await AsyncStorage.setItem('contacts', JSON.stringify(data));
      } catch (error) {
          console.info(error);
      }
  }

  componentDidMount() {
    console.log("did mount");
    this.getFromLocal();

    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      width < height ? this.setState({isPortrait: true}) : this.setState({isPortrait: false});
      this.setState({screenWidth: Dimensions.get('window').width})
    })
  }

  addItem = () => {
    this.setState({
      items: [...this.state.items, {id: new Date().getTime(), firstName: 'Oleg', lastName: 'Shyshkov', cell: '+38098816004', email: "shyshkov.o.a@gmail.com"}],
    });
  }

  rearrangeLayout = () => {
    const screenWidth = Dimensions.get('window').width
    if(this.state.isPortrait) {
      this.state.isRearranged = !this.state.isRearranged;
      this.state.isRearranged ? this.setState({screenWidth: screenWidth / 2}) : this.setState({screenWidth: screenWidth});
    }
  }

  setModalVisible = (visible, itemData, isNew) => {
    this.setState({modalVisible: visible, itemData: itemData, isNewContact: isNew});
  }

  saveInput = (val) => {
    console.log(val);
    this.setState({items: [...this.state.items, val]});
    this.saveToLocal([...this.state.items, val]);
  }

  render () {
    return (
      <View style={{flexDirection: 'column', flex: 1}}>
        <StatusBar hidden />
        
        <CustomModal 
          modalVisible={this.state.modalVisible} 
          toggleModal={this.setModalVisible} 
          animationType="fade" 
          isPortrait={this.state.isPortrait}
          itemData={this.state.itemData}
          isNewContact={this.state.isNewContact}
          inputData={this.saveInput}
        />
        
        <View style={styles.header}>
          <Text style={styles.headerText}>Contact List</Text>
          <TouchableOpacity onPress={this.rearrangeLayout}>
            <Image style={{resizeMode: 'center', height: '100%', marginRight: 10}} source={require('./images/menu.png')}/>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>

          <ScrollView>
            <View style={styles.contacts}>
              {this.state.items.map(el => {
                  return (
                    <ContactCard key={el.id} item={el}
                    isPortrait={this.state.isPortrait}
                    screenWidth={this.state.screenWidth}
                    isRearranged={this.state.isRearranged}
                    toggleModal={this.setModalVisible}
                    />
                  )
                })
              }
            </View>
          </ScrollView>

          <View style={styles.button}>
              <FancyButton onPress={()=> this.setModalVisible(true, {}, true)} title={'ADD CONTACT'} disabled={false}/>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  header: {
    height: 55,
    marginTop: -5,
    backgroundColor: '#67B826',
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 10
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    backgroundColor: Colors.lighter,
    alignItems: 'stretch',
  },
  contacts: {
    flex: 9,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5
  },
  button: {
    justifyContent: 'flex-end',
    margin: 5,
    height: 60,
  },
});
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

import ContactCard from './components/ContactCard';
import FancyButton from './components/FancyButton';
import CustomModal from './components/Modal';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      items: [
        {id: 0, firstName: 'Oleg', lastName: 'Shyshkov', cell: '+38098816004', email: "shyshkov.o.a@gmail.com"},
        {id: 1, firstName: 'Вікторія', lastName: 'Шишкова', cell: 'немає', email: "немає"},
        {id: 2, firstName: 'Andrii', lastName: 'Shyshkov', cell: '+380978458000', email: "andrii@gmail.com"},
        {id: 3, firstName: 'Надія', lastName: 'Шишкова', cell: '+380679087261', email: "nadia@gmail.com"},
        {id: 4, firstName: 'Тетяна', lastName: 'Шишкова', cell: '+380977460988', email: "shyshkova.t.v@icloud.com"}
      ],
      isPortrait: true,
      screenWidth: Dimensions.get('window').width,
      isRearranged: false,
      modalVisible: false,
      itemData: {}
    }
  }

  componentDidMount() {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      width < height ? this.setState({isPortrait: true}) : this.setState({isPortrait: false});
      this.setState({screenWidth: Dimensions.get('window').width})
      // alert(Dimensions.get('window').width)
    })
  }

  addItem = () => {
    // this.state.items.push({name: new Date().getTime()});
    this.setState({
      items: [...this.state.items, {id: new Date().getTime(), firstName: 'Oleg', lastName: 'Shyshkov', cell: '+38098816004', email: "shyshkov.o.a@gmail.com"}],
    });
    // this.setModalVisible(true);

    // setTimeout(() => {
    //   this.setState({modalVisible: false})
    // }, 3000);
  }

  rearrangeLayout = () => {
    const screenWidth = Dimensions.get('window').width
    if(this.state.isPortrait) {
      this.state.isRearranged = !this.state.isRearranged;
      this.state.isRearranged ? this.setState({screenWidth: screenWidth / 2}) : this.setState({screenWidth: screenWidth});
    }
  }

  setModalVisible = (visible, itemData) => {
    this.setState({modalVisible: visible, itemData: itemData});
    // alert(JSON.stringify(data))
  }

  render () {
    let index;
    return (
      <View style={{flexDirection: 'column', flex: 1}}>
        <StatusBar hidden />
        
        <CustomModal 
          modalVisible={this.state.modalVisible} 
          toggleModal={this.setModalVisible} 
          animationType="fade" 
          isPortrait={this.state.isPortrait}
          itemData={this.state.itemData}
        />
        
        <View style={{height: 55, marginTop: -5, backgroundColor: '#67B826', justifyContent: "space-between", alignItems: 'center', flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 22, marginLeft: 10,}}>Contact List</Text>
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
              <FancyButton onPress={this.addItem} title={'ADD CONTACT'} disabled={false}/>
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

// export default App;

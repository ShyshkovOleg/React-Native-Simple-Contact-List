import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import ContactCard from './components/ContactCard';
import FancyButton from './components/FancyButton';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      items: [
        {id: 0, firstName: 'Oleg', lastName: 'Shyshkov', cell: '+38098816004', email: "shyshkov.o.a@gmail.com"},
        {id: 1, firstName: 'Oleg', lastName: 'Shyshkov', cell: '+38098816004', email: "shyshkov.o.a@gmail.com"},
        {id: 2, firstName: 'Oleg', lastName: 'Shyshkov', cell: '+38098816004', email: "shyshkov.o.a@gmail.com"},
        {id: 3, firstName: 'Oleg', lastName: 'Shyshkov', cell: '+38098816004', email: "shyshkov.o.a@gmail.com"},
        {id: 4, firstName: 'Oleg', lastName: 'Shyshkov', cell: '+38098816004', email: "shyshkov.o.a@gmail.com"},
        {id: 5, firstName: 'Oleg', lastName: 'Shyshkov', cell: '+38098816004', email: "shyshkov.o.a@gmail.com"},
        {id: 6, firstName: 'Oleg', lastName: 'Shyshkov', cell: '+38098816004', email: "shyshkov.o.a@gmail.com"},
        {id: 7, firstName: 'Oleg', lastName: 'Shyshkov', cell: '+38098816004', email: "shyshkov.o.a@gmail.com"},
        {id: 8, firstName: 'Oleg', lastName: 'Shyshkov', cell: '+38098816004', email: "shyshkov.o.a@gmail.com"},
        {id: 9, firstName: 'Oleg', lastName: 'Shyshkov', cell: '+38098816004', email: "shyshkov.o.a@gmail.com"}
      ],
      isPortrait: true,
      screenWidt: Dimensions.get('window').width
    }
  }

  componentDidMount() {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      width < height ? this.setState({isPortrait: true}) : this.setState({isPortrait: false});
      // alert(Dimensions.get('window').width)
    })
  }

  addItem = () => {
    // this.state.items.push({name: new Date().getTime()});
    this.setState({
      items: [...this.state.items, {name: new Date().getTime()}]
    })
  }

  render () {
    let index;
    return (
      <View style={styles.container}>
        <ScrollView>

          <View style={styles.contacts}>
            {this.state.items.map(el => {
                return (
                  <ContactCard key={el.id} item={el} isPortrait={this.state.isPortrait} screenWidth={Dimensions.get('window').width}/>
                )
              })
            }
          </View>

        </ScrollView>
        <View style={styles.button}>
            {/* <Button title="ADD" onPress={this.addItem} color="#841584"/> */}
            <FancyButton onPress={() => console.log("Pressed Add")} title={'ADD CONTACT'} disabled={false}/>
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
    // justifyContent: 'space-around', // determine last items positions
    justifyContent: 'center',
    // alignItems: 'stretch',
    margin: 5
  },
  button: {
    // alignItems: 'stretch',
    // flex: 2,
    justifyContent: 'flex-end',
    margin: 5,
    height: 60,
    // backgroundColor: '#272734'
  },
  // list: {
  //   flex: 9,
  //   alignItems: 'stretch',
  // }
});

// export default App;

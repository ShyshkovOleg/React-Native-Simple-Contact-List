/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ContactCard from './components/ContactCard';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      items: [
        {name: 1},
        {name: 2},
        {name: 3},
        {name: 4},
        {name: 5},
        {name: 6},
        {name: 7},
        {name: 8},
        {name: 9},
      ]
    }
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

        <View style={styles.contacts}>
          {this.state.items.map(el => {
              return (
                <ContactCard key={el.name} item={el} />
              )
            })
          }
        </View>

        <View style={styles.button}>
          <Button
            title="ADD"
            onPress={this.addItem}
            color="#841584"
          />
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
    paddingTop: 20,
    backgroundColor: Colors.lighter,    
  },
  contacts: {
    flex: 9,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around', // determine last items positions
  },
  button: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'flex-end',
    margin: 10
  },
  // list: {
  //   flex: 9,
  //   alignItems: 'stretch',
  // }
});

// export default App;

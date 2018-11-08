import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HideableList from './views/HideableList';

class MainScreen extends Component {

  renderAnimatingHeader(title) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
      </View>
    );
  }

  renderItem(item) {
    return (
      <View style={styles.separator}>
        <Text style={styles.item}>{item.title}</Text>
      </View>
    );
  }

  createItems = () => {
    let items = []

    for (let i = 0; i < 100; i++) {
      let item = { id: i, title: i }
      items.push(item)
    }
    return items
  }

  render() {

    const data = this.createItems()

    return (
      <HideableList
        data={data}
        renderItem={this.renderItem}
        headerHeight={150}
        footerHeight={150}
        renderAnimatingHeader={() => this.renderAnimatingHeader('Header')}
        renderAnimatingFooter={() => this.renderAnimatingHeader('Footer')}
        style={styles.list}
      >
      </HideableList>

    );
  }
}

export default MainScreen;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    alignItems: 'center'
  },
  list: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold'
  },
  separator: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'black'
  },
}
import React, { Component } from "react";
import { View, Text } from "react-native";

import HideableParallaxListView from "./common/HideableParallaxListView";

class MainScreen extends Component {
  state = {
    items: [
      { key: "Devin" },
      { key: "Jackson" },
      { key: "James" },
      { key: "Joel" },
      { key: "John" },
      { key: "Jillian" },
      { key: "Jimmy" },
      { key: "Julie" }
    ]
  };

  renderItem() {
    return this.state.items.map(item => (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }} key={item.key}>
          {item.key}
        </Text>
      </View>
    ));
  }

  render() {
    return (
      <HideableParallaxListView
        windowHeight={300}
        header={<Text style={styles.header}>Header Content</Text>}
      >
        <View>{this.renderItem()}</View>
      </HideableParallaxListView>
    );
  }
}

export default MainScreen;

const styles = {
  container: {
    flex: 1,
    flexDirection: "column"
  },
  header: {
    flex: 1,
    backgroundColor: "red"
  },
  body: {
    height: 500,
    backgroundColor: "white"
  },
  footer: {
    flex: 1,
    backgroundColor: "tomato"
  }
};

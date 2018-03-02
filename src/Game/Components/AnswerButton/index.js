import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from "react-native";
export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableHighlight
        style={style.answerButtonContainer}
        onPress={this.props.onPress}
      >
        <Text>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const style = StyleSheet.create({
  answerButtonContainer: {
    flex: 1
  }
});

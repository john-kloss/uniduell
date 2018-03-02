import React, { Component } from "react";
import { TouchableHighlight } from "react-native";

import styles from "./styles/Button";

/**
 * @requires @prop title
 * @requires @prop onPress()
 */

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles}
        title={this.props.title}
        onPress={this.props.onPress}
      />
    );
  }
}
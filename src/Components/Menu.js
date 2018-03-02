import React, { Component } from "react";
import { Button } from "./index";

/**
 * The menu can be filled with different elements
 */
export default class Menu extends Component {
  render() {
    return <View>{this.props.children}</View>;
  }
}

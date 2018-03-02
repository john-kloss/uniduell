/**
 * @providesModule Menu
 */

import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import I18n from "translation";

export default class MainMenu extends Component {
  render() {
    return (
      <View>
        <Text>{I18n.t("MAIN_MENU")}</Text>
        <Button
          title={I18n.t("MAIN_MENU_START_GAME")}
          onPress={() => this.props.navigation.navigate("SelectionScreen")}
        />
        <Button
          title={I18n.t("MAIN_MENU_ADD_QUESTIONS")}
          onPress={() => this.props.navigation.navigate("AddQuestions")}
        />
        <Button
          title={I18n.t("MAIN_MENU_SETTINGS")}
          onPress={() => this.props.navigation.navigate("SettingsScreen")}
        />
      </View>
    );
  }
}

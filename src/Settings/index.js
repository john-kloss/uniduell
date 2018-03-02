/**
 * @providesModule Settings
 */

import React, { Component } from "react";
import { Button, View, Text, TextInput, Picker } from "react-native";
import I18n from "translation";
import { api } from "helper";
import {
  updateUsernameActionCreator,
  updateSelectedUniversityActionCreator
} from "actions";
import { connect } from "react-redux";

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      universities: null,
      selectedUniversity: this.props.selectedUniversity,
      username: this.props.username || ""
    };
    this.fetchUniversities();
  }
  fetchUniversities = async () => {
    const response = await api("university/list");
    this.setState({ universities: response });
  };
  render() {
    return (
      <View>
        <Text>Settings</Text>
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <Button
          title={"save"}
          onPress={() => this.props.updateUsername(this.state.username)}
        />
        <Picker
          selectedValue={this.state.selectedUniversity}
          onValueChange={university => {
            this.setState({ selectedUniversity: university });
            this.props.updateSelectedUniversity(university);
          }}
        >
          {this.state.universities &&
            this.state.universities.map(university => (
              <Picker.Item
                key={university.id}
                label={university.name}
                value={university.id}
              />
            ))}
        </Picker>

        <Button
          title={"back"}
          onPress={() => this.props.navigation.goBack(null)}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ config }) => ({
  username: config.username,
  selectedUniversity: config.selectedUniversity
});

const mapDispatchToProps = dispatch => ({
  updateUsername: name => dispatch(updateUsernameActionCreator(name)),
  updateSelectedUniversity: selectedUniversity =>
    dispatch(updateSelectedUniversityActionCreator(selectedUniversity))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

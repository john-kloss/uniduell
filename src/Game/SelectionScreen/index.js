import React, { Component } from "react";
import { Button, View, Text, Picker, ToastAndroid } from "react-native";
import { connect } from "react-redux";
import { api } from "helper";
import _ from "lodash";

class SelectionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: "training",
      courses: [],
      selectedCourse: null,
      subjects: [],
      selectedSubject: null
    };
    this.loadCourses();
  }

  loadCourses = async () => {
    const courses = await api("questions/courses", {
      university: this.props.selectedUniversity
    });
    await this.setState({ courses });
    if (!_.isEmpty(courses)) this.setState({ selectedCourse: courses[0] });
    this.loadSubjects();
  };

  loadSubjects = async () => {
    const subjects = await api("questions/subjects", {
      university: this.props.selectedUniversity,
      course: this.state.selectedCourse
    });
    this.setState({ subjects });
    if (!_.isEmpty(subjects)) this.setState({ selectedSubject: subjects[0] });
  };

  loadQuestions = async () => {
    const questions = await api("questions/game", {
      university: this.props.selectedUniversity,
      course: this.state.selectedCourse,
      subject: this.state.selectedSubject
    });

    this.props.navigation.navigate("GameScreen", { questions });
  };

  render() {
    return (
      <View>
        <Text>SelectionScreen</Text>
        <Text>Choose game mode</Text>
        <Picker
          selectedValue={this.state.gameMode}
          onValueChange={gameMode => this.setState({ gameMode })}
        >
          <Picker.Item label="Duel" value="duel" />
          <Picker.Item label="Training" value="training" />
        </Picker>
        <Picker
          selectedValue={this.state.selectedCourse}
          onValueChange={async selectedCourse => {
            await this.setState({ selectedCourse });
            this.loadSubjects();
          }}
        >
          {this.state.courses.map(course => (
            <Picker.Item label={course} value={course} key={course} />
          ))}
        </Picker>
        <Picker
          selectedValue={this.state.selectedSubject}
          onValueChange={selectedSubject => this.setState({ selectedSubject })}
        >
          {this.state.subjects.map(subject => (
            <Picker.Item label={subject} value={subject} key={subject} />
          ))}
        </Picker>

        <Button title={"Start"} onPress={this.loadQuestions} />
        <Button
          title={"back"}
          onPress={() => this.props.navigation.goBack(null)}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ config }) => ({
  selectedUniversity: config.selectedUniversity
});

export default connect(mapStateToProps)(SelectionScreen);

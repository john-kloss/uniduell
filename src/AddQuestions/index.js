/**
 * @providesModule AddQuestions
 */

import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  Picker,
  ScrollView
} from "react-native";
import { api } from "helper";
import { connect } from "react-redux";
import _ from "lodash";

class AddQuestionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answers: ["", "", "", ""],
      newCourse: null,
      selectedCourse: null,
      courses: [],
      newSubject: null,
      selectedSubject: null,
      subjects: []
    };
    this.loadCourses();
  }

  loadCourses = async () => {
    const courses = await api("questions/courses", {
      university: this.props.selectedUniversity
    });
    this.setState({ courses });
    if (_.isEmpty(courses)) this.setState({ selectedCourse: "new" });
    else {
      await this.setState({ selectedCourse: courses[0] });
      this.loadSubjects();
    }
  };

  loadSubjects = async () => {
    const subjects = await api("questions/subjects", {
      university: this.props.selectedUniversity,
      course: this.state.selectedCourse
    });
    this.setState({ subjects });
    if (_.isEmpty(subjects)) this.setState({ selectedSubject: "new" });
    else {
      this.setState({ selectedSubject: subjects[0] });
    }
  };

  addQuestion = async () => {
    const response = await api("questions/add", {
      university: this.props.selectedUniversity,
      course: this.state.selectedCourse,
      subject: this.state.selectedSubject,
      question: this.state.question,
      answers: this.state.answers
    });
  };

  onValueChangeCourse = async selectedCourse => {
    await this.setState({ selectedCourse });
    this.loadSubjects();
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text>AddQuestionsScreen</Text>
        {/* Course picker */}
        <Picker
          selectedValue={this.state.selectedCourse}
          onValueChange={this.onValueChangeCourse}
        >
          {this.state.courses.map(course => (
            <Picker.Item label={course} value={course} key={course} />
          ))}
          <Picker.Item label="New Course" value="new" />
        </Picker>
        {this.state.selectedCourse === "new" && (
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={{ flex: 3 }}
              placeholder="New Course"
              onChangeText={newCourse => this.setState({ newCourse })}
            />
            <Button
              style={{ flex: 1 }}
              onPress={() =>
                this.setState({
                  courses: [this.state.newCourse, ...this.state.courses],
                  selectedCourse: this.state.newCourse,
                  selectedSubject: "new"
                })
              }
              title="Add"
            />
          </View>
        )}
        {/* Subject picker */}
        <Picker
          selectedValue={this.state.selectedSubject}
          onValueChange={selectedSubject => this.setState({ selectedSubject })}
          enabled={this.state.selectedCourse !== "new"}
        >
          {this.state.subjects.map(subject => (
            <Picker.Item label={subject} value={subject} key={subject} />
          ))}
          <Picker.Item label="New Subject" value="new" />
        </Picker>
        {this.state.selectedSubject === "new" && (
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={{ flex: 3 }}
              placeholder="New Subject"
              onChangeText={newSubject => this.setState({ newSubject })}
            />
            <Button
              style={{ flex: 1 }}
              onPress={() =>
                this.setState({
                  subjects: [this.state.newSubject, ...this.state.subjects],
                  selectedSubject: this.state.newSubject
                })
              }
              title="Add"
            />
          </View>
        )}
        {/* Question */}
        <TextInput
          style={{ height: 60 }}
          placeholder="What's the question"
          onChangeText={question => this.setState({ question })}
        />
        {/* Answers */}
        {[0, 1, 2, 3].map(id => (
          <TextInput
            key={id}
            style={{ height: 40 }}
            placeholder={"Answer " + id.toString()}
            returnKeyType={"next"}
            onChangeText={answer => {
              newAnswers = this.state.answers;
              newAnswers[id] = answer;
              this.setState({ answers: newAnswers });
            }}
          />
        ))}
        <Button title={"Submit"} onPress={this.addQuestion} />
        <Button
          title={"back"}
          onPress={() => this.props.navigation.goBack(null)}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ config }) => ({
  selectedUniversity: config.selectedUniversity
});

export default connect(mapStateToProps)(AddQuestionsScreen);

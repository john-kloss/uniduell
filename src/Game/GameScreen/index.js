import React, { Component } from "react";
import { Button, View, Text, ToastAndroid } from "react-native";
import _ from "lodash";
import { AnswerButton } from "../Components";
import styles from "./styles";

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    const questions = this.getQuestions();
    this.state = {
      displayedQuestion: 0,
      questions: questions
    };
  }

  getQuestions = () => {
    const { params } = this.props.navigation.state;
    const questions = params ? params.questions : null;
    return questions.map(question => {
      const correctAnswer = question.answers[0];
      // shuffle the answers
      question.answers = _.shuffle(question.answers);
      question.correctAnswerIndex = _.findIndex(
        question.answers,
        correctAnswer
      );
    });
  };

  onPress = index => {
    const result =
      index ==
      this.state.questions[this.state.displayedQuestion].correctAnswerIndex;
    ToastAndroid.show(result.toString(), ToastAndroid.SHORT);
    if (this.state.displayedQuestion < this.state.questions.length - 1) {
      this.setState({
        ...this.state,
        displayedQuestion: (this.state.displayedQuestion += 1)
      });
    } else {
      this.props.navigation.goBack();
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>GameScreen</Text>
        <Text>
          {this.state.questions[this.state.displayedQuestion].question}
        </Text>
        <View style={styles.answerButtonContainer}>
          <View style={styles.horizontalContainer}>
            <AnswerButton
              text={
                this.state.questions[this.state.displayedQuestion].answers[0]
              }
              onPress={() => this.onPress(0)}
            />
            <AnswerButton
              text={
                this.state.questions[this.state.displayedQuestion].answers[1]
              }
              onPress={() => this.onPress(1)}
            />
          </View>
          <View style={styles.horizontalContainer}>
            <AnswerButton
              text={
                this.state.questions[this.state.displayedQuestion].answers[2]
              }
              onPress={() => this.onPress(2)}
            />
            <AnswerButton
              text={
                this.state.questions[this.state.displayedQuestion].answers[3]
              }
              onPress={() => this.onPress(3)}
            />
          </View>
        </View>
        <Button
          title={"back"}
          onPress={() => this.props.navigation.goBack(null)}
        />
      </View>
    );
  }
}

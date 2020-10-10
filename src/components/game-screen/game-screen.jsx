import React, {PureComponent} from "react";
import {Redirect} from "react-router-dom";
import {GameType} from "../../utils/const";
import MusicianQuestionScreen from "../musician-question-screen/musician-question-screen";
import GenreQuestionSreen from "../genre-question-screen/genre-question-screen";
import {QuestionsType} from "../types/types";

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step >= questions.length || !question) {
      return (
        <Redirect to="/"/>
      );
    }

    switch (question.type) {
      case GameType.MUSICIAN:
        return (
          <MusicianQuestionScreen
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1
              }));
            }}
          />
        );
      case GameType.GENRE:
        return (
          <GenreQuestionSreen
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1
              }));
            }}
          />
        );
    }

    return <Redirect to="/"/>;
  }
}

GameScreen.propTypes = QuestionsType;

export default GameScreen;

import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {GameType} from "../../utils/const";
import MusicianQuestionScreen from "../musician-question-screen/musician-question-screen";
import GenreQuestionSreen from "../genre-question-screen/genre-question-screen";
import {questionsType} from "../types/types";
import withAudioPlayer from "../hocs/with-audio-player/with-audio-player";
import {ActionCreator} from "../../store/action";
import Mistakes from "../mistakes/mistakes";

const GenreQuestionSreenWrapper = withAudioPlayer(GenreQuestionSreen);
const MusicicanQuestionScreenWrapper = withAudioPlayer(MusicianQuestionScreen);

const GameScreen = (props) => {
  const {questions, step, onUserAnswer, resetGame, mistakes} = props;
  const question = questions[step];

  if (step >= questions.length || !question) {
    resetGame();

    return (
      <Redirect to="/" />
    );
  }

  switch (question.type) {
    case GameType.MUSICIAN:
      return (
        <MusicicanQuestionScreenWrapper
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>
        </MusicicanQuestionScreenWrapper>
      );
    case GameType.GENRE:
      return (
        <GenreQuestionSreenWrapper
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>
        </GenreQuestionSreenWrapper>
      );
  }

  return <Redirect to="/" />;
};

GameScreen.propTypes = questionsType;

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, answer));
  }
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);

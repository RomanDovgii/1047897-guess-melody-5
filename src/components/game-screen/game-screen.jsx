import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {GameType, MAX_MISTAKE_COUNT} from "../../utils/const";
import MusicianQuestionScreen from "../musician-question-screen/musician-question-screen";
import GenreQuestionSreen from "../genre-question-screen/genre-question-screen";
import {gameScreenType} from "../types/types";
import withAudioPlayer from "../hocs/with-audio-player/with-audio-player";
import withUserAnswer from "../hocs/with-user-answer/with-user-answer";
import {ActionCreator} from "../../store/action";
import Mistakes from "../mistakes/mistakes";

const GenreQuestionSreenWrapper = withAudioPlayer(withUserAnswer(GenreQuestionSreen));
const MusicicanQuestionScreenWrapper = withAudioPlayer(MusicianQuestionScreen);

const GameScreen = (props) => {
  const {questions, step, onUserAnswer, mistakes} = props;
  const question = questions[step];

  if (mistakes >= MAX_MISTAKE_COUNT) {
    return (
      <Redirect to="/lose"/>
    );
  }

  if (step >= questions.length || !question) {
    return (
      <Redirect to="/result"/>
    );
  }

  switch (question.type) {
    case GameType.MUSICIAN:
      return (
        <MusicicanQuestionScreenWrapper
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes mistakesCount={mistakes}/>
        </MusicicanQuestionScreenWrapper>
      );
    case GameType.GENRE:
      return (
        <GenreQuestionSreenWrapper
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes mistakesCount={mistakes}/>
        </GenreQuestionSreenWrapper>
      );
  }

  return <Redirect to="/" />;
};

GameScreen.propTypes = gameScreenType;

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

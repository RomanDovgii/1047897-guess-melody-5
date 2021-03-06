import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {GameType, MAX_MISTAKE_COUNT, AppRoute} from "../../utils/const";
import MusicianQuestionScreen from "../musician-question-screen/musician-question-screen";
import GenreQuestionSreen from "../genre-question-screen/genre-question-screen";
import {gameScreenType} from "../../types/types";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";
import {resetGame, incrementStep, incrementMistake} from "../../store/action";
import Mistakes from "../mistakes/mistakes";

const GenreQuestionSreenWrapper = withAudioPlayer(withUserAnswer(GenreQuestionSreen));
const MusicicanQuestionScreenWrapper = withAudioPlayer(MusicianQuestionScreen);

const GameScreen = (props) => {
  const {questions, step, onUserAnswer, mistakes} = props;
  const question = questions[step];

  if (mistakes >= MAX_MISTAKE_COUNT) {
    return (
      <Redirect to={AppRoute.LOSE}/>
    );
  }

  if (step >= questions.length || !question) {
    return (
      <Redirect to={AppRoute.RESULT}/>
    );
  }

  switch (question.type) {
    case GameType.MUSICIAN:
      return (
        <MusicicanQuestionScreenWrapper
          key={step}
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes mistakesCount={mistakes}/>
        </MusicicanQuestionScreenWrapper>
      );
    case GameType.GENRE:
      return (
        <GenreQuestionSreenWrapper
          key={step}
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes mistakesCount={mistakes}/>
        </GenreQuestionSreenWrapper>
      );
  }

  return <Redirect to={AppRoute.ROOT} />;
};

GameScreen.propTypes = gameScreenType;

const mapStateToProps = ({GAME, DATA}) => ({
  step: GAME.step,
  mistakes: GAME.mistakes,
  questions: DATA.questions
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(incrementStep());
    dispatch(incrementMistake(question, answer));
  }
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);

import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {winScreenType} from "../types/types";

const WinScreen = (props) => {
  const {questionsCount, mistakesCount, onReplayButtonClick, resetGame} = props;
  const correctQuestionsCount = questionsCount - mistakesCount;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>

      <h2 className="result__title">Вы настоящий меломан!</h2>

      <p className="result__total">Вы ответили правильно на {correctQuestionsCount} вопросов и совершили 2 ошибки</p>

      <button
        className="replay"
        type="button"
        onClick={() => {
          resetGame();
          onReplayButtonClick();
        }}>
          Сыграть ещё раз
      </button>
    </section>
  );
};

WinScreen.propTypes = winScreenType;

const mapStateToProps = (state) => ({
  questionsCount: state.step,
  mistakesCount: state.mistakes
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  }
});

export {WinScreen};

export default connect(mapStateToProps, mapDispatchToProps)(WinScreen);

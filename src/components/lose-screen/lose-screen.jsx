import React from "react";
import {connect} from "react-redux";
import {resetGame} from "../../store/action";
import {onReplayButtonClickType} from "../../types/types";

const LoseScreen = (props) => {
  const {onReplayButtonClick, resetGameAction} = props;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>

      <h2 className="result__title">Какая жалость!</h2>

      <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>

      <button
        className="replay"
        type="button"
        onClick={() => {
          resetGameAction();
          onReplayButtonClick();
        }}>
          Попробовать ещё раз
      </button>
    </section>
  );
};

LoseScreen.propTypes = onReplayButtonClickType;

const mapDispatchToProps = (dispatch) => ({
  resetGameAction() {
    dispatch(resetGame());
  }
});

export {LoseScreen};
export default connect(null, mapDispatchToProps)(LoseScreen);

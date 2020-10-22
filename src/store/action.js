import {isMusicianAnswerCorrect, isGenreAnswerCorrect} from "../utils/utils";
import {GameType, ActionType} from "../utils/const";

export const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1
  }),
  resetGame: () => ({
    type: ActionType.RESET_GAME
  }),
  incrementMistake: (question, userAnswer) => {
    let isCorrect = false;

    switch (question.type) {
      case GameType.MUSICIAN:
        isCorrect = isMusicianAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        isCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: isCorrect ? 0 : 1
    };
  }
};

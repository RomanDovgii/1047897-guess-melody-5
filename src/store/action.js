import {isMusicianAnswerCorrect, isGenreAnswerCorrect} from "../utils/utils";
import {GameType, ActionType} from "../utils/const";

export const incrementStep = () => ({
  type: ActionType.INCREMENT_STEP,
  payload: 1
});

export const resetGame = () => ({
  type: ActionType.RESET_GAME
});

export const incrementMistake = (question, userAnswer) => {
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
};

export const loadQuestions = (questions) => ({
  type: ActionType.LOAD_QUESTIONS,
  payload: questions
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

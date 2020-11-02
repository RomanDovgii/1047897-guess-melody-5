import PropTypes from "prop-types";

const requiredFunctionType = PropTypes.func.isRequired;

const isPlayingType = {
  isPlaying: PropTypes.bool.isRequired
};

const srcType = {
  src: PropTypes.string.isRequired
};


const musicianQuestionType = {
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      musician: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    })).isRequired,
    song: PropTypes.shape({
      musician: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }).isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
};

const genreQuestionType = {
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired
};

const onAnswerType = {
  onAnswer: PropTypes.func.isRequired
};

const errorsCountType = {
  errorsCount: PropTypes.number.isRequired
};

const renderPlayerType = {
  renderPlayer: requiredFunctionType
};

const onPlayButtonClickType = {
  onPlayButtonClick: requiredFunctionType
};

const childrenType = {
  children: PropTypes.element.isRequired
};

const questionType = {
  question: PropTypes.oneOfType([musicianQuestionType.question, genreQuestionType.question]).isRequired
};

export const questionsType = {
  questions: PropTypes.arrayOf(questionType.question).isRequired
};

export const mistakesType = {
  mistakes: PropTypes.number.isRequired
};

const questionsCountType = {
  questionsCount: PropTypes.number.isRequired
};

export const mistakesCountType = {
  mistakesCount: PropTypes.number.isRequired
};

export const onReplayButtonClickType = {
  onReplayButtonClick: PropTypes.func.isRequired
};

const stepType = {
  step: PropTypes.number.isRequired
};

const onUserAnswerType = {
  onUserAnswer: PropTypes.func.isRequired
};

const answerType = {
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  })
};

const idType = {
  id: PropTypes.number.isRequired
};

const onChangeType = {
  onChange: PropTypes.func.isRequired
};

const userAnswerType = {
  userAnswer: PropTypes.bool.isRequired
};

const userAnswersType = {
  userAnswers: PropTypes.arrayOf(userAnswerType.userAnswer).isRequired
};

const isLoadingType = {
  isLoading: PropTypes.bool.isRequired
};

const onSubmitType = {
  onSubmit: PropTypes.func.isRequired
};

const authorizationStatusType = {
  authorizationStatus: PropTypes.string.isRequired
};

const exactType = {
  exact: PropTypes.bool.isRequired
};

const pathType = {
  path: PropTypes.string.isRequired
};

const renderType = {
  render: PropTypes.func.isRequired
};

export const welcomeType = Object.assign({}, errorsCountType, onPlayButtonClickType);

export const musicianQuestionScreenType = Object.assign({}, onAnswerType, musicianQuestionType, renderPlayerType, childrenType);

export const genreQuestionScreenType = Object.assign({}, onAnswerType, onChangeType, genreQuestionType, renderPlayerType, childrenType, userAnswersType);

export const genreQuestionItemType = Object.assign({}, answerType, idType, onChangeType, renderPlayerType, userAnswerType);

export const audioPlayerType = Object.assign({}, onPlayButtonClickType, isPlayingType, srcType);

export const winScreenType = Object.assign({}, questionsCountType, mistakesCountType, onReplayButtonClickType);

export const gameScreenType = Object.assign({}, questionsType, stepType, onUserAnswerType, mistakesType);

export const PlayerType = Object.assign({}, isLoadingType, onPlayButtonClickType, isPlayingType, childrenType);

export const withUserAnswerType = Object.assign({}, questionType, onAnswerType);

export const withAudioType = Object.assign({}, isPlayingType, onPlayButtonClickType, srcType);

export const LoginScreenType = Object.assign({}, onSubmitType, onReplayButtonClickType);

export const PrivateRouteType = Object.assign({}, authorizationStatusType, exactType, pathType, renderType);

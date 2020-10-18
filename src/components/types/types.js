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

const answerType = {
  onAnswer: PropTypes.func.isRequired
};

const errorsCountType = {
  errorsCount: PropTypes.number.isRequired
};

const onPlayButtonClickType = {
  onPlayButtonClick: requiredFunctionType
};

export const questionsType = {
  questions: PropTypes.arrayOf(PropTypes.oneOfType([musicianQuestionType.question, genreQuestionType.question])).isRequired
};

export const welcomeType = Object.assign({}, errorsCountType, onPlayButtonClickType);

export const appType = Object.assign({}, errorsCountType, questionsType);

export const musicianQuestionScreenType = Object.assign({}, answerType, musicianQuestionType);

export const genreQuestionScreenType = Object.assign({}, answerType, genreQuestionType);

export const audioPlayerType = Object.assign({}, onPlayButtonClickType, isPlayingType, srcType);

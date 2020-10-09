import PropTypes from "prop-types";

const MusicianQuestionType = {
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

const GenreQuestionType = {
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired
};

const AnswerType = {
  onAnswer: PropTypes.func.isRequired
};

const ErrorsCountType = {
  errorsCount: PropTypes.number.isRequired
};

const OnPlayButtonClickType = {
  onPlayButtonClick: PropTypes.func.isRequired
};

export const QuestionsType = {
  questions: PropTypes.arrayOf(PropTypes.oneOfType([MusicianQuestionType.question, GenreQuestionType.question])).isRequired
};

export const welcomeType = Object.assign({}, ErrorsCountType, OnPlayButtonClickType);

export const appType = Object.assign({}, ErrorsCountType, QuestionsType);

export const MusicianQuestionScreenType = Object.assign({}, AnswerType, MusicianQuestionType);

export const GenreQuestionScreenType = Object.assign({}, AnswerType, GenreQuestionType);

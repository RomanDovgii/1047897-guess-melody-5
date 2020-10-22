export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const isMusicianAnswerCorrect = (question, userAnswer) => {
  return userAnswer.musician === question.song.musician;
};

export const isGenreAnswerCorrect = (question, userAnswer) => {
  return userAnswer.every((it, i) => {
    return it === (question.answers[i].genre === question.genre);
  });
};

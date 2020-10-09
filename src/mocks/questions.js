import {AVATAR_URL, AUDIO_URL, GameType, genres, musicians} from "../utils/const";

const getRandomElementFromArray = (array) => {
  const max = array.length;
  const randomNumber = Math.floor(Math.random() * max);

  return array[randomNumber];
};

const generateAnswers = (questionType) => {
  switch (questionType) {
    case GameType.GENRE:
      const genreQuestions = [];

      genres.map((genreLocal) => {
        const answer = {
          src: AUDIO_URL,
          genre: genreLocal
        };

        genreQuestions.push(answer);
      });


      return genreQuestions;

    case GameType.MUSICIAN:
      const musicianQuestions = [];

      musicians.map((musicianLocal) => {
        const answer = {
          picture: `${AVATAR_URL}/${Math.random()}`,
          musician: musicianLocal
        };

        musicianQuestions.push(answer);
      });

      return musicianQuestions;

    default:
      return [];
  }
};

export const questions = [
  {
    type: `genre`,
    genre: getRandomElementFromArray(genres),
    answers: generateAnswers(GameType.GENRE)
  },
  {
    type: `musician`,
    song: {
      musician: getRandomElementFromArray(musicians),
      src: AUDIO_URL
    },
    answers: generateAnswers(GameType.MUSICIAN)
  }
];

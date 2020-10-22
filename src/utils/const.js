export const AVATAR_URL = `https://api.adorable.io/avatars/128`;
export const AUDIO_URL = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;

export const GENRE_QUESTIONS_COUNT = 4;
export const MUSICIAN_QUESTIONS_COUNT = 4;
export const MAX_MISTAKE_COUNT = 3;

export const GameType = {
  MUSICIAN: `musician`,
  GENRE: `genre`
};

export const genres = [
  `rock`,
  `jazz`,
  `blues`,
  `hip-hop`
];

export const musicians = [
  `Jim Beam`,
  `John Snow`,
  `Jack Daniels`
];

export const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`
};

export const AVATAR_URL = `https://api.adorable.io/avatars/128`;
export const AUDIO_URL = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;
export const BACKEND_URL = `https://5.react.pages.academy/guess-melody`;

export const GENRE_QUESTIONS_COUNT = 4;
export const MUSICIAN_QUESTIONS_COUNT = 4;
export const MAX_MISTAKE_COUNT = 2;
export const REQUEST_TIMEOUT = 5000;

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
  RESET_GAME: `RESET_GAME`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
};

export const AppRoute = {
  LOGIN: `/login`,
  LOSE: `/lose`,
  RESULT: `/result`,
  ROOT: `/`,
  GANE: `/game`
};

export const APIRoute = {
  QUESTIONS: `/questions`,
  LOGIN: `/login`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

export const NameSpace = {
  DATA: `DATA`,
  GAME: `GAME`,
  USER: `USER`
};

export const HttpCode = {
  UNAUTHORIZED: 401
};

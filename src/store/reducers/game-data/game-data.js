import {extend} from "../../../utils/utils";
import {ActionType} from "../../../utils/const";

const initialState = {
  questions: []
};

const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return extend(state, {
        questions: action.payload
      });
  }

  return state;
};

export {gameData};

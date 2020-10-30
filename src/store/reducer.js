import {ActionType} from "../utils/const";
import {extend} from "../utils/utils";
import {questions} from "../mocks/questions";


const initalState = {
  mistakes: 0,
  step: 0,
  questions
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      const nextStep = state.step + action.payload;

      return extend(
          state,
          {
            step: nextStep
          }
      );
    case ActionType.INCREMENT_MISTAKES:
      return extend(
          state,
          {
            mistakes: state.mistakes + action.payload
          }
      );
    case ActionType.RESET_GAME:
      return extend({}, initalState);
  }

  return state;
};

export {reducer};

import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen";
import {noop} from "../../utils/utils";

configure({adapter: new Adapter()});

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: `path`,
      genre: `rock`
    },
    {
      src: `path`,
      genre: `jazz`
    },
    {
      src: `path`,
      genre: `jazz`
    },
    {
      src: `path`,
      genre: `blues`
    }
  ]
};

const userAnswers = [false, false, false, false];
const userAnswersAlternative = [false, true, false, false];

it(
    `User answers for genre questions form aren't sent`,
    () => {
      const onAnswer = jest.fn();

      const genreQuestion = shallow(
          <GenreQuestionScreen
            onAnswer={onAnswer}
            question={question}
            renderPlayer={noop}
            userAnswers={userAnswers}
          >
            <React.Fragment/>
          </GenreQuestionScreen>
      );

      const form = genreQuestion.find(`form`);
      const formSendPrevention = jest.fn();
      form.simulate(
          `submit`,
          {
            preventDefault: formSendPrevention
          }
      );

      expect(onAnswer).toHaveBeenCalledTimes(1);
      expect(formSendPrevention).toHaveBeenCalledTimes(1);
    }
);

it(
    `User answer passed to callback and is consistent with "userAnswer" prop`,
    () => {
      const onAnswer = jest.fn((...args) => [...args]);

      const genreQuestion = mount(
          <GenreQuestionScreen
            onAnswer={onAnswer}
            question={question}
            renderPlayer={noop}
            onChange={noop}
            userAnswers={userAnswersAlternative}
          >
            <React.Fragment/>
          </GenreQuestionScreen>
      );

      const form = genreQuestion.find(`form`);
      const inputTwo = genreQuestion.find(`input`).at(1);

      inputTwo.simulate(
          `change`,
          {
            target: {
              checked: true
            }
          }
      );
      form.simulate(
          `submit`,
          {
            preventDefault() {}
          }
      );

      expect(onAnswer).toHaveBeenCalledTimes(1);

      expect(onAnswer.mock.calls[0][0]).toEqual(void 0);

      expect(
          genreQuestion.find(`input`).map((it) => it.prop(`checked`))
      ).toEqual(userAnswersAlternative);
    }
);

import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen";
import {noop} from "../../utils/utils";

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

const userAnswers = [false, false, false, false];

it(
    `GenreQuestionScreen is rendered correctly`,
    () => {
      const tree = renderer
        .create(
            <GenreQuestionScreen
              question={question}
              onAnswer={noop}
              renderPlayer={noop}
              onChange={noop}
              userAnswers={userAnswers}
            >
              <React.Fragment/>
            </GenreQuestionScreen>,
            {
              createNodeMock: () => {
                return {};
              }
            }
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

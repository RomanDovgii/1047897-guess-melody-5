import React from "react";
import renderer from "react-test-renderer";
import MusicianQuestionScreen from "./musician-question-screen";
import {noop} from "../../utils/utils";

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `https://api.adorable.io/avatars/128/0`,
    artist: `John Snow`,
  }, {
    picture: `https://api.adorable.io/avatars/128/1`,
    artist: `Jack Daniels`,
  }, {
    picture: `https://api.adorable.io/avatars/128/2`,
    artist: `Jim Beam`,
  }],
};

it(
    `MusicianQuestionScreen is rendered correctly`,
    () => {
      const tree = renderer
      .create(
          <MusicianQuestionScreen
            question={question}
            onAnswer={noop}
            renderPlayer={noop}
          >
            <React.Fragment/>
          </MusicianQuestionScreen>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

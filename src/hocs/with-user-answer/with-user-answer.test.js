import React from "react";
import renderer from "react-test-renderer";
import {childrenTestType} from "../../types/types";
import withUserAnswer from "./with-user-answer";
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

const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = childrenTestType;

const MockComponentWrapped = withUserAnswer(MockComponent);

it(
    `withUserAnswer rendered correctly`,
    () => {
      const tree = renderer
      .create(
          <MockComponentWrapped
            question={question}
            onAnswer={noop}
          >
            <React.Fragment/>
          </MockComponentWrapped>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

import React from "react";
import renderer from "react-test-renderer";
import {childrenTestType} from "../../types/types";
import withActivePlayer from "./with-audio-player";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = childrenTestType;

const MockComponentWrapped = withActivePlayer(MockComponent);

it(
    `WithActivePlayer rendered correctly`,
    () => {
      const tree = renderer
      .create(
          <MockComponentWrapped>
            <React.Fragment/>
          </MockComponentWrapped>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

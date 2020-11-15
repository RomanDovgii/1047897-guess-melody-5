import React from "react";
import renderer from "react-test-renderer";
import withAudio from "./with-audio";
import {noop} from "../../utils/utils";
import {childrenTestType} from "../../types/types";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = childrenTestType;

const MockComponentWrapped = withAudio(MockComponent);

it(
    `withAudio rendered correctly`,
    () => {
      const tree = renderer
      .create(
          <MockComponentWrapped
            isPlaying={false}
            onPlayButtonClick={noop}
            src={``}
          />,
          {
            createNodeMock() {
              return {};
            }
          }
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

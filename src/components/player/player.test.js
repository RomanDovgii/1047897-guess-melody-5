import React from "react";
import renderer from "react-test-renderer";
import Player from "./player";
import {noop} from "../../utils/utils";

it(
    `Player is rendered correctly`,
    () => {
      const tree = renderer
      .create(
          <Player
            isPlaying={false}
            isLoading={true}
            onPlayButtonClick={noop}
          >
            <audio/>
          </Player>,
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

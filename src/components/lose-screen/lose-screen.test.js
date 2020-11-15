import React from "react";
import renderer from "react-test-renderer";
import {LoseScreen} from "./lose-screen";
import {noop} from "../../utils/utils";

it(
    `LoseScreen rendered correctly`,
    () => {
      const tree = renderer
        .create(
            <LoseScreen
              onReplayButtonClick={noop}
              resetGameAction={noop}
            />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

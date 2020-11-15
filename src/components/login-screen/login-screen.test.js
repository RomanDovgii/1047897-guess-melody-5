import React from "react";
import renderer from "react-test-renderer";
import {LoginScreen} from "./login-screen";
import {noop} from "../../utils/utils";

it(
    `LoginScreen component redered correctly`,
    () => {
      const tree = renderer
      .create(
          <LoginScreen
            onReplayButtonClick={noop}
            onSubmit={noop}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

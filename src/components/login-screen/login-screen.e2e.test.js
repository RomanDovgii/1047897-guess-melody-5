import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {noop} from "../../utils/utils";
import {LoginScreen} from "./login-screen";

Enzyme.configure({
  adapter: new Adapter()
});

it(
    `Should reply button be pressed`,
    () => {
      const handleReplayButtonClick = jest.fn();

      const wrapper = shallow(
          <LoginScreen
            onReplayButtonClick={handleReplayButtonClick}
            onSubmit={noop}
          />
      );

      const replayButton = wrapper.find(`button.replay`);
      replayButton.simulate(`click`);
      expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
    }
);

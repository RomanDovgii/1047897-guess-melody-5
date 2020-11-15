import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {LoseScreen} from "./lose-screen";

Enzyme.configure({
  adapter: new Adapter()
});

it(
    `Replay button is pressed`,
    () => {
      const handleReplayButtonClick = jest.fn();
      const handleResetAction = jest.fn();

      const wrapper = shallow(
          <LoseScreen
            resetGameAction={handleResetAction}
            onReplayButtonClick={handleReplayButtonClick}
          />
      );

      const replayButton = wrapper.find(`button.replay`);

      replayButton.simulate(`click`);
      expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
      expect(handleResetAction).toHaveBeenCalledTimes(1);
    }
);

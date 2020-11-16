import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withUserAnswer from "./with-user-answer";
import {noop} from "../../utils/utils";

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: `path`,
      genre: `rock`,
    },
    {
      src: `path`,
      genre: `jazz`,
    },
    {
      src: `path`,
      genre: `jazz`,
    },
    {
      src: `path`,
      genre: `blues`,
    },
  ],
};

configure({
  adapter: new Adapter()
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withUserAnswer(MockComponent);

it(
    `Change answer`,
    () => {
      const wrapper = shallow(
          <MockComponentWrapped
            question={question}
            onAnswer={noop}
          />
      );

      expect(wrapper.props().userAnswers).toEqual([false, false, false, false]);

      wrapper.props().onChange(0, true);
      expect(wrapper.props().userAnswers).toEqual([true, false, false, false]);

      wrapper.props().onChange(0, false);
      expect(wrapper.props().userAnswers).toEqual([false, false, false, false]);

      wrapper.props().onChange(1, true);
      expect(wrapper.props().userAnswers).toEqual([false, true, false, false]);
    }
);
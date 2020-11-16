import React from "react";
import renderer from "react-test-renderer";
import Mistakes from "./mistakes";

describe(
    `Mistakes rendered correctly`,
    () => {
      it(
          `With zero count`,
          () => {
            const tree = renderer
            .create(
                <Mistakes
                  mistakesCount={0}
                />
            )
            .toJSON();

            expect(tree).toMatchSnapshot();
          }
      );

      it(
          `With one count`,
          () => {
            const tree = renderer
            .create(
                <Mistakes
                  mistakesCount={1}
                />
            )
            .toJSON();

            expect(tree).toMatchSnapshot();
          }
      );
    }
);

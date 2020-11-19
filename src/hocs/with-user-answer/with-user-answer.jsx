import React, {useState} from "react";
import {withUserAnswerType} from "../../types/types";

const withUserAnswer = (Component) => {
  const WithUserAnswer = (props) => {
    const {onAnswer, question} = props;
    const [answers, updateAnswers] = useState(new Array(question.answers.length).fill(false));

    return (
      <Component
        {...props}
        userAnswers={answers}
        onAnswer={() => {
          onAnswer(question, answers);
        }}
        onChange={(i, value) => {
          const userAnswers = answers.slice();
          userAnswers[i] = value;

          updateAnswers(userAnswers);
        }}
      />
    );
  };

  WithUserAnswer.propTypes = withUserAnswerType;

  return WithUserAnswer;
};

export default withUserAnswer;

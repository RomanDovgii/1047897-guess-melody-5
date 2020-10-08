import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import LoginScreen from "../login-screen/login-screen";
import MusicianQuestionScreen from "../musician-question-screen/musician-question-screen";
import GenreQuestionSreen from "../genre-question-screen/genre-question-screen";
import WinScreen from "../win-screen/win-screen";
import LoseScreen from "../lose-screen/lose-screen";
import GameScreen from "../game-screen/game-screen";

const App = (props) => {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />
        <Route exact path="/dev-artist">
          <MusicianQuestionScreen
            question={firstQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionSreen
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/result">
          <WinScreen />
        </Route>
        <Route exact path="/lose">
          <LoseScreen />
        </Route>
        <Route exact path="/game">
          <GameScreen
            errorsCount={errorsCount}
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;

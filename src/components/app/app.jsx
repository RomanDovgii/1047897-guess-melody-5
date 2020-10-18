import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import LoginScreen from "../login-screen/login-screen";
import MusicianQuestionScreen from "../musician-question-screen/musician-question-screen";
import GenreQuestionSreen from "../genre-question-screen/genre-question-screen";
import WinScreen from "../win-screen/win-screen";
import LoseScreen from "../lose-screen/lose-screen";
import GameScreen from "../game-screen/game-screen";
import {appType} from "../types/types";

const App = (props) => {
  const {errorsCount, questions} = props;
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

App.propTypes = appType;

export default App;

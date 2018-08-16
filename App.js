import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MemoryRouter as Router, Route, Switch } from "react-router-native";
import Home from "./app/components/Home";
import { PacmanIndicator } from "react-native-indicators";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ? (
      <PacmanIndicator />
    ) : (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

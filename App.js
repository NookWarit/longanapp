import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MemoryRouter as Router, Route, Switch } from "react-router-native";
import Home from "./app/components/Home";
import { PacmanIndicator } from "react-native-indicators";
import Page from "./app/components/page/Page";
import {Provider} from 'react-redux';
import Store from "./app/store";
import { getArticles } from "./app/store/actions/article";

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

  componentDidMount() {
    Store.dispatch(getArticles())
  }
  render() {
    return this.state.isLoading ? (
      <PacmanIndicator />
    ) : (
      <Provider store={Store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Page} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-native";
import Home from "./app/components/Home";
import { PacmanIndicator } from "react-native-indicators";
import Page from "./app/components/page/Page";
import {Provider} from 'react-redux';
import Store from "./app/store";
import { getArticles } from "./app/store/actions/article";
import Profile from "./app/components/Profile";
import { getNewss } from "./app/store/actions/news";
import Calendars from "./app/components/Calendar";
import Settings from "./app/components/Settings";
import Chat from "./app/components/Chat";
import Info from "./app/components/Info";
import Contact from "./app/components/Contact";
import History from "./app/components/History";


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
    Store.dispatch(getArticles()),
    Store.dispatch(getNewss())
  }
  render() {
    return this.state.isLoading ? (
      <PacmanIndicator />
    ) : (
      <Provider store={Store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page" component={Page} />
            <Route path="/profile" component={Profile} />
            <Route path="/calendar" component={Calendars} />
            <Route path="/settings" component={Settings} />
            <Route path="/chat" component={Chat} />
            <Route path="/info" component={Info} />
            <Route path="/contact" component={Contact} />
            <Route path="/history" component={History} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

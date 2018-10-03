import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-native";
import Home from "./app/components/Home";
import { PacmanIndicator } from "react-native-indicators";
import Page from "./app/components/page/Page";
import { Provider } from "react-redux";
import Store from "./app/store";
import { getAllArticles } from "./app/store/actions/article";
import Profile from "./app/components/Profile";
import { getAllNews } from "./app/store/actions/news";
import Calendars from "./app/components/Calendar";
import Settings from "./app/components/Settings";
import Chat from "./app/components/Chat";
import Info from "./app/components/Info";
import Contact from "./app/components/Contact";
import History from "./app/components/History";
import Login from "./app/components/Login";
import Signup from "./app/components/Signup";
import DetailArticle from "./app/components/page/DetailArticle";
import DetailNews from "./app/components/page/DetailNews";
import { setUser } from "./app/store/actions/user";
import { AsyncStorage } from "react-native";
import DetailMedia from "./app/components/DetailMedia";
import calculate from "./app/components/Calculate";
import soil from "./app/components/Soil";
import { getAllMedia } from "./app/store/actions/media";
import { getAllNotification } from "./app/store/actions/notification";

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

  async componentDidMount() {
    //await AsyncStorage.clear();
    let user = JSON.parse(await AsyncStorage.getItem("user"));
    if (user) {
      Store.dispatch(setUser(user));
    }
    Store.dispatch(getAllArticles())
    Store.dispatch(getAllNews())
    Store.dispatch(getAllMedia())
    Store.dispatch(getAllNotification())
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
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/detailarticle" component={DetailArticle} />
            <Route path="/detailnews" component={DetailNews} />
            <Route path="/detailmedia" component={DetailMedia} />
            <Route path="/calculate" component={calculate} />
            <Route path="/soil" component={soil} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

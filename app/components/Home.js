import React, { Component } from "react";
import { Text } from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Right
} from "native-base";
import Master from "./layouts/Master";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Master>
          <Text>Home</Text>
      </Master>
    );
  }
}

export default Home;

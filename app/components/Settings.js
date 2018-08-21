import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Button
} from "native-base";
import Master from "./layouts/Master";
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Master title="การตั้งค่า">
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="options" />
              </Button>
            </Left>
            <Body>
              <Text>เปลี่ยนภาษา</Text>
            </Body>
            <Right>
            <Text>ภาษาไทย</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="phone-portrait" />
              </Button>
            </Left>
            <Body>
              <Text>เปลี่ยนธีม</Text>
            </Body>
            <Right>
              <Text>เขียว</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
      </Master>
    );
  }
}

export default Settings;

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
  Right,
  Card,
  CardItem
} from "native-base";
import Master from "./layouts/Master";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Master title="โปรไฟล์">
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Profile
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>

      </Master>
    );
  }
}

export default Profile;

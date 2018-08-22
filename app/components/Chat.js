import React, { Component } from 'react';
import {Text} from 'react-native';
import Master from './layouts/Master';
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
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
        <Master title="การสนทนา">
            <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Chat
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

export default Chat;
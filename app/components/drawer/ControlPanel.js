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
import { StyleSheet, View } from "react-native";
class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Content style={styles.drawerBackground}>
          <View
            style={{
              backgroundColor: "#4dffb8",
              height: 170,
              alignContent: "center",
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Text>logo</Text>
            <Text>longan</Text>
          </View>
          <Content>
          <List>
          <ListItem itemDivider>
              <Text>เมนู</Text>
            </ListItem>  
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#80ffcc" }}>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>หน้าหลัก</Text>
            </Body>
        
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#80ffcc" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#80ffcc" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>On</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#80ffcc" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>On</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          </List>
          </Content>
          
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  drawerBackground: { backgroundColor: "#FFF" }
});

export default ControlPanel;

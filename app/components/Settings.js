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
  Button,
  styles
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
          <ListItem icon>
            <Left>
              <Button >
                <Icon active name="switch" />
              </Button>
            </Left>
            <Body>
              <Text>เปิด-ปิดระบบน้ำ</Text>
            </Body>
            <Right>
              <Switch
                // value={this.props.water.isOn}
                // onValueChange={() =>
                //   this.props.toggleWater(!this.props.water.isOn)
                // }
              />
            </Right>
          </ListItem>
          <ListItem
            icon
            // onPress={() => {
            //   this.context.router.history.push("/contact");
            // }}
          >
            <Left>
              <Button >
                <Icon active name="call" />
              </Button>
            </Left>
            <Body>
              <Text>ติดต่อเรา</Text>
            </Body>
          </ListItem>
          <ListItem
            icon
            // onPress={() => {
            //   this.context.router.history.push("/info");
            // }}
          >
            <Left>
              <Button >
                <Icon active name="information-circle" />
              </Button>
            </Left>
            <Body>
              <Text>เกี่ยวกับโปรแกรม</Text>
            </Body>
          </ListItem>
      </Master>
    );
  }
}

export default Settings;

import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Text
} from "native-base";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item regular>
            <Icon active name="person" />
            <Input placeholder="ชื่อผู้ใช้" />
          </Item>
          <Item regular>
            <Icon active name="lock" />
            <Input placeholder="รหัสผ่าน" />
          </Item>
          <Item regular>
            <Icon active name="mail" />
            <Input placeholder="อีเมลล์" />
          </Item>
          <Item regular>
            <Icon active name="call" />
            <Input placeholder="โทรศัพท์" />
          </Item>
          <Item regular>
            <Icon active name="pin" />
            <Input placeholder="ที่อยู่" />
          </Item>
          <Button light>
            <Text> ล็อคอิน </Text>
          </Button>
          <Button
            block
            info
            // onPress={() => {
            //   this.context.router.history.push("/signup");
            // }}
          >
            <Text> สร้างบัญชี </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Signup;

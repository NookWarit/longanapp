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
class Login extends Component {
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
          <Button light>
            <Text> ล็อคอิน </Text>
          </Button>
          <Button block info
          onPress={() => {
            this.context.router.history.push("/signup");
          }}>
            <Text> ลงทะเบียนสมาชิก </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;

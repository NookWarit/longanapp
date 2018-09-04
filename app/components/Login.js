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
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../store/actions/user";
import update from "immutability-helper";
class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      input: {
        email: "",
        password: ""
      }
    };
  }
  componentDidMount() {
    if (this.props.user) {
      this.context.router.history.push("/");
    }
  }
  onChangeTextHandler(text, param) {
    let oldInput = this.state.input;
    oldInput[param] = text;
    this.setState({ input: oldInput });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item regular>
            <Icon active name="person" />
            <Input
              placeholder="ชื่อผู้ใช้"
              keyboardType="email-address"
              onChangeText={text => this.onChangeTextHandler(text, "email")}
              value={this.state.input.email}
            />
          </Item>
          <Item regular>
            <Icon active name="lock" />
            <Input
              placeholder="รหัสผ่าน"
              secureTextEntry={true}
              onChangeText={text => this.onChangeTextHandler(text, "password")}
              value={this.state.input.password}
            />
          </Item>
          <Button
            light
            onPress={() => {
              this.props.login(this.state.input);
            }}
          >
            <Text> ล็อคอิน </Text>
          </Button>
          <Button
            block
            info
            onPress={() => {
              this.context.router.history.push("/signup");
            }}
          >
            <Text> ลงทะเบียนสมาชิก </Text>
          </Button>

          {this.props.hasError ? (
            <Text style={{ color: "red" }}>{this.props.hasError}</Text>
          ) : null}
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.user,
  hasError: state.app.hasError.message
});
const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

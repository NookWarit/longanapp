import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Button,
  ListItem,
  Thumbnail,
  Text
} from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../store/actions/user";
import update from "immutability-helper";
import { Grid, Row, Col } from "react-native-easy-grid";
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
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.user != nextProps.user) {
      this.context.router.history.push("/");
    }
    return true;
  }
  onChangeTextHandler(text, param) {
    let oldInput = this.state.input;
    oldInput[param] = text;
    this.setState({ input: oldInput });
  }

  render() {
    return (
      <Container>
        <Grid>
          <Row size={35} style={{ alignSelf: "center" }}>
            <Thumbnail
              source={require("../assets/images/logo.png")}
              style={{
                alignSelf: "center",
                width: 150,
                height: 200,
                resizeMode: "contain"
              }}
            />
          </Row>
          <Row size={65}>
            <Content style={{ paddingTop: 10 }}>
              <Item regular>
                <Icon active name="person" />
                <Input
                  placeholder="ชื่อผู้ใช้ หรือ อีเมลล์"
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
                  onChangeText={text =>
                    this.onChangeTextHandler(text, "password")
                  }
                  value={this.state.input.password}
                />
              </Item>
              <ListItem last style={{ alignSelf: "center" }}>
                <Button
                  //bordered
                  onPress={() => {
                    if (this.state.input.email === "" || this.state.input.password === "") {
                      alert("กรุณากรอกข้อมูลให้ครบ");
                    } else if (this.props.hasError != ""){
                      console.log(this.props.hasError);
                      alert("อีเมลล์หรือรหัสผ่านไม่ถูกต้อง");
                    } else{
                      this.props.login(this.state.input);
                    }
                  }}
                >
                  <Text> ล็อคอิน </Text>
                </Button>

                <Button
                  info
                  onPress={() => {
                    this.context.router.history.push("/signup");
                  }}
                  style={{ marginLeft: 50 }}
                >
                  <Text> ลงทะเบียนสมาชิก </Text>
                </Button>
              </ListItem>
              <TouchableOpacity
              onPress={() => {
                this.context.router.history.push(
                  "/forgotpass"
                );
              }}
              >
                <Text style={{ marginLeft: 10}}>ลืมรหัสผ่าน?</Text>
              </TouchableOpacity>
            </Content>
          </Row>
        </Grid>
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

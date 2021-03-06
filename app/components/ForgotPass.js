import React, { Component } from "react";
import { TouchableOpacity, Alert ,StyleSheet , Platform} from "react-native";
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
  Text,
  Left,
  Body,
  Title,
  Right
} from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { forgot } from "../store/actions/user";
import { Grid, Row, Col } from "react-native-easy-grid";
class ForgotPass extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      input: {
        email: ""
      }
    };
  }
  onChangeTextHandler(text, param) {
    let oldInput = this.state.input;
    oldInput[param] = text;
    this.setState({ input: oldInput });
  }

  render() {
    return (
      <Container style={styles.container}>
          <Header >
          <Left>
            <Button transparent onPress={() => this.props.history.goBack()}>
              <Icon name="arrow-round-back" style={{ color: "#000000" }} />
            </Button>
          </Left><Body><Title>ลืมรหัสผ่าน?</Title></Body>
          <Right />
        </Header>
        <Grid>
          <Row size={30} style={{ alignSelf: "center" }}>
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
          <Row size={70}>
            <Content style={{ paddingTop: 10 }}>
            <Text style={{ alignSelf:"center", margin:5}}>กรุณากรอกอีเมลที่ใช้สมัคร</Text>
              <Item regular>
                <Icon active name="person" />
                <Input
                  placeholder="อีเมลผู้ใช้"
                  keyboardType="email-address"
                  onChangeText={text => this.onChangeTextHandler(text, "email")}
                  value={this.state.input.email}
                />
              </Item>
              <ListItem last style={{ alignSelf: "center" }}>
                <Button
                  //bordered
                  onPress={() => {
                    let reg = (this.props.hasError = true);
                    if (this.state.input.email === "") {
                      alert("กรุณากรอกอีเมลล์");
                    } else{
                      this.props.forgot(this.state.input);
                      Alert.alert(
                        "ส่งรหัสผ่านเรียบร้อยแล้ว",
                        "สามารถไปดูรหัสได้ในอีเมลล์ของคุณ",
                        [
                          {
                            text: "ตกลง",
                            onPress: async () => {
                              //await this.props.getAllHistory();
                              await this.context.router.history.push("/login");
                            }
                          }
                        ],
                        { cancelable: false }
                      );
                    }
                  }}
                >
                  <Text> ยืนยัน </Text>
                </Button>

                </ListItem>
            </Content>
          </Row>
        </Grid>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        //marginTop: 64
      },
      android: {
        paddingTop: 25
      }
    })
  },
  background: {
    backgroundColor: "#FFF"
  }
});
const mapStateToProps = state => ({
  user: state.user.user,
  hasError: state.app.hasError.message
});
const mapDispatchToProps = dispatch => ({
  forgot: data => dispatch(forgot(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPass);

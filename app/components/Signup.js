import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Left,
  Form,
  Thumbnail,
  Body,
  Right,
  Title
} from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import Expo, { ImagePicker } from "expo";
import { TouchableOpacity } from "react-native";
import { signup } from "../store/actions/user";
import {
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  Alert
} from "react-native";

class Signup extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      input: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        tel: "",
        address: "",
        district: "",
        province: ""
      }
    };
    //this._pickImage = this._pickImage.bind(this);
  }

  componentDidMount() {
    //this.alertIfCameraIsNotGrant();
    // if(Platform.OS === 'ios') {
    //   marginTop: 64
    //   console.log(" ios")
    //  } else {
    //        console.log("android")
    // }
  }
  onTextChangeHandler(text, field) {
    let oldInput = this.state.input;
    oldInput[field] = text;
    this.setState({ input: oldInput });
  }

  // async alertIfCameraIsNotGrant() {
  //   const { Permissions } = Expo;
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //   if (status !== "granted") {
  //     alert("มึงต้องเปิดกล้องอิหอกหัก.");
  //   }
  // }

  // _pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     aspect: [4, 3]
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     let oldInput = this.state.input;
  //     oldInput["image"] = result.uri;
  //     this.setState({ input: oldInput });
  //   }
  // };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.history.goBack()}>
              <Icon name="arrow-round-back" style={{ color: "#000000" }} />
            </Button>
          </Left>
          <Body>
            <Title>สมัครสมาชิก</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <KeyboardAvoidingView
            //style={styles.container}
            behavior="padding"
            enabled
          >
            <Form>
              {/* <Item style={{alignSelf:'center'}}>
              <TouchableOpacity onPress={this._pickImage}>
                <Thumbnail
                  large square
                  source={{ uri: this.state.input.image }}
                  style={{width:100,height:100}}
                />
              </TouchableOpacity>
            </Item> */}
              <Item regular>
                <Icon active name="person" />
                <Input
                  placeholder="ชื่อผู้ใช้"
                  value={this.state.input.name}
                  onChangeText={text => this.onTextChangeHandler(text, "name")}
                />
              </Item>
              <Item regular>
                <Icon active name="person" />
                <Input
                  placeholder="นามสกุล"
                  value={this.state.input.lastname}
                  onChangeText={text =>
                    this.onTextChangeHandler(text, "lastname")
                  }
                />
              </Item>
              <Item regular>
                <Icon active name="mail" />
                <Input
                  placeholder="อีเมลล์"
                  keyboardType="email-address"
                  value={this.state.input.email}
                  onChangeText={text => this.onTextChangeHandler(text, "email")}
                />
              </Item>
              <Item regular>
                <Icon active name="lock" />
                <Input
                  placeholder="รหัสผ่าน"
                  secureTextEntry={true}
                  value={this.state.input.password}
                  onChangeText={text =>
                    this.onTextChangeHandler(text, "password")
                  }
                />
              </Item>
              <Item regular>
                <Icon active name="lock" />
                <Input
                  placeholder="ยืนยันรหัสผ่าน"
                  secureTextEntry={true}
                  value={this.state.input.confirmPassword}
                  onChangeText={text =>
                    this.onTextChangeHandler(text, "confirmPassword")
                  }
                />
              </Item>
              <Item regular>
                <Icon active name="call" />
                <Input
                  placeholder="โทรศัพท์"
                  keyboardType="number-pad"
                  value={this.state.input.tel}
                  onChangeText={text => this.onTextChangeHandler(text, "tel")}
                />
              </Item>
              <Item regular>
                <Icon active name="pin" />
                <Input
                  placeholder="ที่อยู่"
                  value={this.state.input.address}
                  onChangeText={text =>
                    this.onTextChangeHandler(text, "address")
                  }
                />
              </Item>
              <Item regular>
                <Icon active name="pin" />
                <Input
                  placeholder="อำเภอ"
                  value={this.state.input.district}
                  onChangeText={text =>
                    this.onTextChangeHandler(text, "district")
                  }
                />
                <Icon active name="pin" />
                <Input
                  placeholder="จังหวัด"
                  value={this.state.input.province}
                  onChangeText={text =>
                    this.onTextChangeHandler(text, "province")
                  }
                />
              </Item>

              <Button
                block
                info
                onPress={() => {
                  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                  if (
                    this.state.input.name === "" ||
                    this.state.input.lastname === "" ||
                    this.state.input.email === "" ||
                    this.state.input.password === "" ||
                    this.state.input.confirmPassword === "" ||
                    this.state.input.tel === "" ||
                    this.state.input.address === "" ||
                    this.state.input.district === "" ||
                    this.state.input.province === ""
                  ) {
                    alert("กรุณากรอกข้อมูลให้ครบ!");
                  } else if (reg.test(this.state.input.email) === false) {
                    alert("อีเมลล์ไม่ถูกต้อง");
                  } else if (
                    this.state.input.password !=
                    this.state.input.confirmPassword
                  ) {
                    alert("รหัสผ่านไม่ตรงกัน");
                  } else if (
                    this.props.hasError != ""
                  ) {
                    alert("ข้อมูลไม่ถูกต้อง");
                  } else {
                    this.props.signup(this.state.input);
                    Alert.alert(
                      "Alert",
                      "สมัครเรียบร้อยแล้ว",
                      [
                        {
                          text: "ตกลง",
                          onPress: async () => {
                            await this.context.router.history.push("/");
                          }
                        }
                      ],
                      { cancelable: false }
                    );
                  }
                }}
                style={{ marginTop: 10 }}
              >
                <Text> สร้างบัญชี </Text>
              </Button>
              {/* {this.props.hasError ? (
                <Text style={{ color: "red" }}>{this.props.hasError}</Text>
              ) : null} */}
            </Form>
          </KeyboardAvoidingView>
        </Content>
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
  hasError: state.app.hasError.message
});
const mapDispatchToProps = dispatch => ({
  signup: data => dispatch(signup(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

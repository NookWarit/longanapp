import React, { Component } from "react";
import { Text, Modal, TouchableOpacity } from "react-native";
import {
  List,
  Content,
  ListItem,
  FooterTab,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Right,
  Card,
  CardItem,
  Item,
  Image,
  Thumbnail,
  Form,
  Input,
  Container,
  Header,
  H1,
  H3
} from "native-base";
import Master from "./layouts/Master";
import { connect } from "react-redux";
import config from "../config";
import PropTypes from "prop-types";
import { update } from "../store/actions/user";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

class Profile extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      showModal: false
    };
    this.onEditBtnPress = this.onEditBtnPress.bind(this);
  }
  onTextChangeHandler(text, field) {
    let oldInput = this.state.input;
    oldInput[field] = text;
    this.setState({ input: oldInput });
  }

  onEditBtnPress() {
    let user = {
      id: this.props.user.user_id,
      name: this.props.user.name,
      lastname: this.props.user.lastname,
      email: this.props.user.email,
      password: this.props.user.password,
      tel: this.props.user.tel,
      address: this.props.user.address,
      district: this.props.user.district,
      province: this.props.user.province
    };
    this.setState({ input: user });
    this.setState({ showModal: true });
  }

  render() {
    return (
      <Master title="โปรไฟล์" isBack>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showModal}
          onRequestClose={() => undefined}
        >
          <Container>
            <Header>
              <Left>
                <Button
                  transparent
                  onPress={() => {
                    this.setState({ showModal: false });
                  }}
                >
                  <Icon name="arrow-round-back" />
                </Button>
              </Left>
              <Body>
                <Text>แก้ไขข้อมูลส่วนตัว</Text>
              </Body>
              <Right />
            </Header>
            <Content>
              <Form>
                {/* <Item>
                <TouchableOpacity onPress={this._pickImage}>
                  <Thumbnail
                    large
                    square
                    source={{ uri: this.state.input.image }}
                  />
                </TouchableOpacity>
              </Item> */}
                <Item regular>
                  <Icon active name="person" />
                  <Input
                    placeholder="ชื่อผู้ใช้"
                    value={this.state.input.name}
                    onChangeText={text =>
                      this.onTextChangeHandler(text, "name")
                    }
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
                    disabled
                    placeholder="อีเมลล์"
                    keyboardType="email-address"
                    value={this.state.input.email}
                    onChangeText={text =>
                      this.onTextChangeHandler(text, "email")
                    }
                  />
                </Item>
                <Item regular>
                  <Icon active name="lock" />
                  <Input
                    placeholder="รหัสผ่าน"
                    value={this.state.input.password}
                    onChangeText={text =>
                      this.onTextChangeHandler(text, "password")
                    }
                  />
                </Item>
                <Item regular>
                  <Icon active name="call" />
                  <Input
                    placeholder="โทรศัพท์"
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
                  success
                  onPress={() => {
                    this.props.update(this.state.input);
                    this.setState({ showModal: false });
                  }}
                  style={{ marginTop: 20 }}
                >
                  <Text style={{ color: "#FFF" }}> บันทึก </Text>
                </Button>
                {/* {this.props.hasError ? (
                  <Text style={{ color: "red" }}>{this.props.hasError}</Text>
                ) : null} */}
              </Form>
            </Content>
          </Container>
        </Modal>
        <Card>
          <CardItem
            header
            bordered
            style={{ justifyContent: "center", height: 50 }}
          >
            <Text>ข้อมูลส่วนตัว</Text>
          </CardItem>
          <CardItem bordered>
            <Content>
              <List style={{ justifyContent: "center" }}>
                {/* <ListItem>
                    <Thumbnail
                      large
                      square
                      source={{ uri: this.props.user.image }}
                      //style={{ width: 64, height: 64, resizeMode:'contain'}}
                    />
                  </ListItem> */}
                <ListItem icon>
                  <Left>
                    <Icon name="person" style={{ paddingRight: 10 }} />
                  </Left>
                  <Body>
                    <Text>
                      ชื่อ : {this.props.user.name} นามสกุล :{" "}
                      {this.props.user.lastname}{" "}
                    </Text>
                  </Body>
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Icon active name="mail" style={{ paddingRight: 10 }} />
                  </Left>
                  <Body>
                    <Text>อีเมลล์ : {this.props.user.email} </Text>
                  </Body>
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Icon active name="lock" style={{ paddingRight: 10 }} />
                  </Left>
                  <Body>
                    <Text>รหัสผ่าน : {this.props.user.password} </Text>
                  </Body>
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Icon active name="call" style={{ paddingRight: 10 }} />
                  </Left>
                  <Body>
                    <Text>เบอร์โทร : {this.props.user.tel} </Text>
                  </Body>
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Icon active name="pin" style={{ paddingRight: 10 }} />
                  </Left>
                  <Body>
                    <Text> ที่อยู่ : {this.props.user.address} </Text>
                  </Body>
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Icon active name="pin" style={{ paddingRight: 10 }} />
                  </Left>
                  <Body>
                    <Text>
                      อำเภอ : {this.props.user.district} จังหวัด :
                      {this.props.user.province}
                    </Text>
                  </Body>
                </ListItem>
                <Button
                  bordered
                  block
                  dark
                  style={{ margin: 10 }}
                  onPress={() => this.onEditBtnPress()}
                >
                  <Text>แก้ไข</Text>
                </Button>
              </List>
            </Content>
          </CardItem>
        </Card>
      </Master>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.user
});
const mapDispatchToProps = dispatch => ({
  update: data => dispatch(update(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

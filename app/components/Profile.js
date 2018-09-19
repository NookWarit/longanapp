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
  Input
} from "native-base";
import Master from "./layouts/Master";
import { connect } from "react-redux";
import config from "../config";
import PropTypes from "prop-types";
import { update } from "../store/actions/user";

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
  onTextChangeHandler(text, field){
    let oldInput = this.state.input;
    oldInput[field] = text;
    this.setState({ input:oldInput });
  }

  onEditBtnPress() {
    let user = {
      id: this.props.user.user_id,
      image: this.props.user.image,
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
      <Master title="โปรไฟล์">
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showModal}
        >
          <Content>
            <Form>
              <Item>
                <TouchableOpacity onPress={this._pickImage}>
                  <Thumbnail
                    large
                    square
                    source={{ uri: this.state.input.image }}
                  />
                </TouchableOpacity>
              </Item>
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
              <Item>
                <Button
                  block
                  info
                  onPress={() => {
                    this.props.update(this.state.input);
                  }}
                >
                  <Text> แก้ไขข้อมูล </Text>
                </Button>
                <Button
                  block
                  info
                  onPress={() => {
                    this.setState({ showModal: false });
                  }}
                >
                  <Text> ยกเลิก </Text>
                </Button>
              </Item>
              {this.props.hasError ? (
                <Text style={{ color: "red" }}>{this.props.hasError}</Text>
              ) : null}
            </Form>
          </Content>
        </Modal>
        <Content padder>
          <Card>
            <CardItem header bordered style={{ justifyContent: "center" }}>
              <Text>ข้อมูลส่วนตัว</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <List>
                  <ListItem>
                    <Thumbnail
                      large
                      square
                      source={{ uri: this.props.user.image }}
                      //style={{ width: 64, height: 64, resizeMode:'contain'}}
                    />
                  </ListItem>
                  <ListItem>
                    <Text>ชื่อ </Text>
                    <Text>{this.props.user.name} </Text>
                    <Text> นามสกุล </Text>
                    <Text>{this.props.user.lastname} </Text>
                  </ListItem>
                  <ListItem>
                    <Text>อีเมลล์ </Text>
                    <Text>{this.props.user.email} </Text>
                  </ListItem>
                  <ListItem>
                    <Text>รหัสผ่าน </Text>
                    <Text>{this.props.user.password} </Text>
                  </ListItem>
                  <ListItem>
                    <Text>เบอร์โทร </Text>
                    <Text>{this.props.user.tel} </Text>
                  </ListItem>
                  <ListItem>
                    <Text>ที่อยู่ </Text>
                    <Text>{this.props.user.address} </Text>
                  </ListItem>
                  <ListItem>
                    <Text>อำเภอ </Text>
                    <Text>{this.props.user.district} </Text>
                    <Text> จังหวัด </Text>
                    <Text>{this.props.user.province} </Text>
                  </ListItem>
                  <Button
                    bordered
                    full
                    dark
                    style={{ marginTop: 10 }}
                    onPress={() => this.onEditBtnPress()}
                  >
                    <Text>แก้ไข</Text>
                  </Button>
                </List>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Master>
    );
  }
}
const mapStateToProps = state => ({
  // articles: state.article.articles
  user: state.user.user
});
const mapDispatchToProps = dispatch => ({
  update: data => dispatch(update(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

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
  Thumbnail
} from "native-base";
import { StyleSheet, View, TouchableOpacity, AsyncStorage } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleDrawer, toggleWater } from "../../store/actions/app";
import { setUser } from "../../store/actions/user";
class ControlPanel extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {};
    this._handleLogOut = this._handleLogOut.bind(this);
  }

  async _handleLogOut() {
    await AsyncStorage.clear();
    this.props.setUser(null);
    alert("คุณได้ออกจากระบบแล้ว");
  }

  render() {
    return (
      <Content style={styles.drawerBackground}>
        <View style={styles.drawerProfile}>
          <Thumbnail
            square
            large
            source={require("../../assets/images/logo_longan.png")}
            style={{resizeMode:'contain'}}
          />
          <Button
            style={styles.drawerButtonSignout}
            onPress={() => {
              this._handleLogOut();
            }}
          >
            <Text>ออกจากระบบ</Text>
          </Button>
        </View>
        <Content>
          <ListItem itemDivider>
            <Text>เมนู</Text>
          </ListItem>
          <ListItem
            icon
            onPress={() => {
              this.context.router.history.push("/");
              this.props.toggleDrawer(false);
            }}
          >
            <Left>
              <Button>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>หน้าหลัก</Text>
            </Body>
          </ListItem>

          <ListItem
            icon
            onPress={() => {
              this.context.router.history.push("/profile");
              this.props.toggleDrawer(false);
            }}
          >
            <Left>
              <Button>
                <Icon active name="contact" />
              </Button>
            </Left>
            <Body>
              <Text>ข้อมูลส่วนตัว</Text>
            </Body>
          </ListItem>
          <ListItem
            icon
            onPress={() => {
              this.context.router.history.push("/page");
              this.props.toggleDrawer(false);
            }}
          >
            <Left>
              <Button>
                <Icon active name="document" />
              </Button>
            </Left>
            <Body>
              <Text>ข่าวสาร-บทความ</Text>
            </Body>
          </ListItem>
          <ListItem
            icon
            onPress={() => {
              this.context.router.history.push("/chat");
              this.props.toggleDrawer(false);
            }}
          >
            <Left>
              <Button>
                <Icon active name="chatboxes" />
              </Button>
            </Left>
            <Body>
              <Text>ถาม-ตอบ</Text>
            </Body>
          </ListItem>
          <ListItem
            icon
            onPress={() => {
              this.context.router.history.push("/settings");
              this.props.toggleDrawer(false);
            }}
          >
            <Left>
              <Button>
                <Icon active name="settings" />
              </Button>
            </Left>
            <Body>
              <Text>การตั้งค่า</Text>
            </Body>
          </ListItem>
        </Content>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  drawerBackground: {
    backgroundColor: "#FFF"
  },
  drawerProfile: {
    height: 170,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  drawerButtonSignout: {
    borderRadius: 50,
    alignSelf: "center"
  }
});
const mapStateToProps = state => ({
  user: state.user.user
});
const mapDispatchToProps = dispatch => ({
  toggleDrawer: data => dispatch(toggleDrawer(data)),
  setUser: data => dispatch(setUser(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel);

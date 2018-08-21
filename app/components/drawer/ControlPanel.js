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
  Button
} from "native-base";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleDrawer } from "../../store/actions/app";
class ControlPanel extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Content style={styles.drawerBackground}>
          <View style={styles.drawerProfile}>
            <Icon active name="contact" />
            <Button style={styles.drawerButtonSignout}>
              <Text>ออกจากระบบ</Text>
            </Button>
          </View>
          <Content>
            <List>
              <ListItem itemDivider>
                <Text>เมนู</Text>
              </ListItem>
              <ListItem icon onPress={() => {
                this.context.router.history.push("/");
                this.props.toggleDrawer(false);
              }}>
                <Left>
                  <Button style={styles.drawerButton}>
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
                  <Button style={styles.drawerButton}>
                    <Icon active name="contact" />
                  </Button>
                </Left>
                <Body>
                  <Text>ข้อมูลส่วนตัว</Text>
                </Body>
              </ListItem>
              <ListItem icon
              onPress={() => {
                this.context.router.history.push("/page");
                this.props.toggleDrawer(false);
              }}>
                <Left>
                  <Button style={styles.drawerButton}>
                    <Icon active name="document" />
                  </Button>
                </Left>
                <Body>
                  <Text>ข่าวสาร-บทความ</Text>
                </Body>
              </ListItem>
              <ListItem icon
              onPress={() => {
                this.context.router.history.push("/chat");
                this.props.toggleDrawer(false);
              }}>
                <Left>
                  <Button style={styles.drawerButton}>
                    <Icon active name="chatboxes" />
                  </Button>
                </Left>
                <Body>
                  <Text>ถาม-ตอบ</Text>
                </Body>
              </ListItem>
              <ListItem icon
              onPress={() => {
                this.context.router.history.push("/info");
                this.props.toggleDrawer(false);
              }}>
                <Left>
                  <Button style={styles.drawerButton}>
                    <Icon active name="information-circle" />
                  </Button>
                </Left>
                <Body>
                  <Text>เกี่ยวกับโปรแกรม</Text>
                </Body>
              </ListItem>
              <ListItem icon
              onPress={() => {
                this.context.router.history.push("/settings");
                this.props.toggleDrawer(false);
              }}>
                <Left>
                  <Button style={styles.drawerButton}>
                    <Icon active name="settings" />
                  </Button>
                </Left>
                <Body>
                  <Text>การตั้งค่า</Text>
                </Body>
              </ListItem>
              <ListItem icon
              onPress={() => {
                this.context.router.history.push("/contact");
                this.props.toggleDrawer(false);
              }}>
                <Left>
                  <Button style={styles.drawerButton}>
                    <Icon active name="call" />
                  </Button>
                </Left>
                <Body>
                  <Text>ติดต่อเรา</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button style={styles.drawerButton}>
                    <Icon active name="switch" />
                  </Button>
                </Left>
                <Body>
                  <Text>เปิด-ปิดระบบน้ำ</Text>
                </Body>
                <Right>
                  <Switch value={false} />
                </Right>
              </ListItem>
            </List>
          </Content>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  drawerBackground: {
    backgroundColor: "#e6fff5"
  },
  drawerProfile: {
    backgroundColor: "#99ffd6",
    height: 170,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  drawerButton: {
    backgroundColor: "#00cc99"
  },
  drawerButtonSignout: {
    backgroundColor: "#001a14",
    borderRadius: 50,
    alignSelf: "center"
  }
});
const mapDispatchToProps = dispatch => ({
  toggleDrawer: data => dispatch(toggleDrawer(data))
});

export default connect(null,mapDispatchToProps)(ControlPanel);

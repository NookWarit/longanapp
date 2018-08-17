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
import { StyleSheet, View } from "react-native";
class ControlPanel extends Component {
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
              <Text>Sign-Out</Text>
            </Button>
          </View>
          <Content>
            <List>
              <ListItem itemDivider>
                <Text>เมนู</Text>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button style={styles.drawerButton}>
                    <Icon active name="home" />
                  </Button>
                </Left>
                <Body>
                  <Text>หน้าหลัก</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button style={styles.drawerButton}>
                    <Icon active name="contact" />
                  </Button>
                </Left>
                <Body>
                  <Text>ข้อมูลส่วนตัว</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button style={styles.drawerButton}>
                    <Icon active name="document" />
                  </Button>
                </Left>
                <Body>
                  <Text>ข่าวสาร-บทความ</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button style={styles.drawerButton}>
                    <Icon active name="chatboxes" />
                  </Button>
                </Left>
                <Body>
                  <Text>ถาม-ตอบ</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button style={styles.drawerButton}>
                    <Icon active name="information-circle" />
                  </Button>
                </Left>
                <Body>
                  <Text>เกี่ยวกับโปรแกรม</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button style={styles.drawerButton}>
                    <Icon active name="settings" />
                  </Button>
                </Left>
                <Body>
                  <Text>การตั้งค่า</Text>
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
  drawerProfile:{
    backgroundColor: "#99ffd6",
    height: 170,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  drawerButton:{
    backgroundColor: "#00cc99"
    
  },
  drawerButtonSignout:{
    backgroundColor: "#001a14",
    borderRadius:50
  }
});

export default ControlPanel;

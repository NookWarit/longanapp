import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Thumbnail,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Right,
  Card,
  CardItem
} from "native-base";
import Master from "./layouts/Master";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Master title="หน้าแรก">
        <Content padder>
          <Card>
            <CardItem header bordered style={styles.background}>
              <Icon name="calculator" />
              <Text>ระบบคำนวณ</Text>
            </CardItem>
            <CardItem>
              <Grid>
                <Row>
                  <Col
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                      borderColor: "red",
                      borderWidth: 1,
                      padding: 10
                    }}
                    onPress={() => alert("สวัสดี ปุ๋ย")}
                  >
                    <Thumbnail
                      square
                      small
                      source={require("../assets/images/fertilizer.png")}
                    />
                    <Text style={styles.text}>ปริมาณสัดส่วนปุ๋ย</Text>
                  </Col>
                  <Col
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                      borderWidth: 1,
                      padding: 10
                    }}
                    onPress={() => alert("สวัสดี ดิน")}
                  >
                    <Thumbnail
                      square
                      small
                      source={require("../assets/images/grass.png")}
                    />
                    <Text style={styles.text}>ปริมาณธาตุอาหารในดิน</Text>
                  </Col>
                  <Col
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                      borderColor: "red",
                      borderWidth: 1,
                      padding: 10
                    }}
                    onPress={() => alert("สวัสดี น้ำ")}
                  >
                    <Thumbnail
                      square
                      small
                      source={require("../assets/images/water2.png")}
                    />
                    <Text style={styles.text}>ปริมาณน้ำที่ต้องการ</Text>
                  </Col>
                </Row>
              </Grid>
            </CardItem>

           
          </Card>
          <Card>
            <CardItem header bordered style={styles.background}>
              <Icon name="videocam" />
              <Text>แบบตัวอย่าง</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.block}>
                <Button transparent full style={styles.button}>
                  <Text style={styles.text}>วิธีวัดขนาดต้นลำไย</Text>
                </Button>
                <Button transparent full style={styles.button}>
                  <Text style={styles.text}>วิธีวัดธาตุอาหารในดิน</Text>
                </Button>
                <Button transparent full style={styles.button}>
                  <Text style={styles.text}>วิธีวัดธาตุอาหารในดิน</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Master>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#00e6b0"
  },
  block: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    borderColor: "red",
    borderWidth: 1,
    width: 100,
    height: 100,
    alignSelf: "center",
    margin: 4
  },
  text: {
    textAlign: "center"
  }
});

export default Home;

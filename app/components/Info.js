import React, { Component } from "react";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import { Container, CardItem, Card, Thumbnail, Text, Body } from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import Master from "./layouts/Master";
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Master title="เกี่ยวกับโปรแกรม" isBack>
        <Grid>
          <Card>
            <Row size={40}>
              <Thumbnail
                square
                source={require("../assets/images/logo.png")}
                style={{
                  resizeMode: "contain",
                  height: 200,
                  width: width,
                  alignSelf: "center"
                }}
              />
            </Row>
            <Row size={60}>
              <CardItem bordered style={{ width: width, height: height - (height * 50 /100)}}>
                <Body style={{ alignItems: "center" }}>
                  <Text>โปรแกรมแอปพลิเคชัน</Text>
                  <Text>สำหรับเกษตรกรผู้ผลิตลำไย</Text>
                  <Text>version 1.1.2 [ Beta ]</Text>
                  <Text style={{ paddingTop: 10 ,paddingBottom:5}}>Programmer</Text>
                  <Text>Phubadee Rinkaew</Text>
                  <Text note>[FB: Phubadee Rinkaew || T.0956847399]</Text>
                  <Text>Warittha Wangthiyong</Text>
                  <Text note>[LineID: nookwrt || T.0942394514]</Text>
                </Body>
              </CardItem>
            </Row>
          </Card>
        </Grid>
      </Master>
    );
  }
}

export default Info;

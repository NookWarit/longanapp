import React, { Component } from "react";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import { Container, CardItem, Card, Thumbnail, Text, Body } from "native-base";
import { Grid , Row , Col} from "react-native-easy-grid"
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
        <Row size={1}>
          <Thumbnail
              square
              source={require("../assets/images/logo.png")}
             style={{resizeMode:'contain',height:200,width:width, alignSelf:"center"}}/>
            
            </Row>
            <Row size={3}>
            <CardItem bordered style={{width:width }}>
            <Body>
            <Text style={{alignSelf:"center"}}>โปรแกรมแอปพลิเคชัน</Text>
            <Text style={{alignSelf:"center"}}>สำหรับเกษตรกรผู้ผลิตลำไย</Text>
            <Text style={{alignSelf:"center"}}>version 1.1</Text>
            <Text style={{alignSelf:"center" ,padding:10}}>create by</Text>
            <Text style={{alignSelf:"center"}}>Phubadee  Rinkaew</Text>
            <Text note style={{alignSelf:"center"}}>[Backend Programmer]</Text>
            <Text style={{alignSelf:"center"}}>Warittha  Wangthiyong</Text>
            <Text note style={{alignSelf:"center"}}>[Frontend Programmer]</Text>
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

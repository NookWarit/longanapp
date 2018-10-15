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
        <Row size={40}>
          <Thumbnail
              square
              source={require("../assets/images/logo.png")}
             style={{resizeMode:'contain',height:200,width:width, alignSelf:"center"}}/>
            
            </Row>
            <Row size={60}>
            <CardItem bordered style={{width:width ,height:height}}>
            <Body style={{alignItems:"center"}}>
            <Text >โปรแกรมแอปพลิเคชัน</Text>
            <Text >สำหรับเกษตรกรผู้ผลิตลำไย</Text>
            <Text >version 1.1</Text>
            <Text style={{padding:10}}>create by</Text>
            <Text >Phubadee  Rinkaew</Text>
            <Text note >[Backend Programmer]</Text>
            <Text >Warittha  Wangthiyong</Text>
            <Text note >[Frontend Programmer]</Text>
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

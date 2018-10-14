import React, { Component } from "react";
import { Container, CardItem, Card, Thumbnail, Text, Body } from "native-base";
import Master from "./layouts/Master";
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Master title="เกี่ยวกับโปรแกรม" isBack>
        <Card>
          <CardItem header bordered style={{alignSelf:"center"}}>
          <Thumbnail
              square
              source={require("../assets/images/logo.png")}
             style={{resizeMode:'contain',height:200,width:200}}/>
            
            </CardItem>
            <CardItem bordered>
            <Body>
            <Text style={{alignSelf:"center"}}>โปรแกรมแอปพลิเคชันสำหรับเกษตรกรผู้ผลิตลำไย</Text>
            <Text style={{alignSelf:"center"}}>version 1.0</Text>
            <Text style={{alignSelf:"center" ,padding:10}}>create by</Text>
            <Text style={{alignSelf:"center"}}>Phubadee  Rinkaew [Backend Programmer]</Text>
            <Text style={{alignSelf:"center"}}>Warittha  Wangthiyong [Frontend Programmer]</Text>
            </Body>
          </CardItem>
        </Card>
      </Master>
    );
  }
}

export default Info;

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
      <Master title="เกี่ยวกับโปรแกรม">
        <Card>
          <CardItem header bordered >
          <Thumbnail
              square
              large
              source={require("../assets/images/logo_longan.png")}
             style={{resizeMode:'contain'}}/>
            
            </CardItem>
            <CardItem bordered>
            <Body>
            <Text>โปรแกรมแอปพลิเคชันสำหรับเกษตรผู้ผลิตลำไย</Text>
            <Text>เวอร์ชั่น 1.0</Text>
            <Text>โดย</Text>
            <Text>นายภูบดี  รินแก้ว [Backend Programmer]</Text>
            <Text>นางสาววริษฐา  วังธิยอง [Mobile Programmer]</Text>
            </Body>
          </CardItem>
        </Card>
      </Master>
    );
  }
}

export default Info;

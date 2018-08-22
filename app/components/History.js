import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button
} from "native-base";
import Master from "./layouts/Master";
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Master title="ประวัติการใช้งาน">
        <Content padder>
          <Card>
            <CardItem
              header
            >
              <Text>History</Text>
            </CardItem>
            <CardItem >
              <Body>
                <Text>History !!</Text>
                <Button 
              onPress={() => alert("This is History")}><Text>ดูเพิ่มเติม >></Text> </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Master>
    );
  }
}

export default History;

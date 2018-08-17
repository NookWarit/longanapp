import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: "https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GTKjuLKVgzWCMxxnHI.jpg" }} />
                <Body>
                  <Text>อินโดเตะถ่วงนำเข้าลำไยไทย</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{
                    uri:
                      "https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GTKjuLKVgzWCMxxnHI.jpg"
                  }}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
                <Text>
                  ผู้สื่อข่าวรายงานจากกระทรวงพาณิชย์ถึงกรณีที่กระทรวงเกษตรของอินโดนีเซียได้ออกระเบียบพืชสวนฉบับใหม่
                  โดยยกเลิกการกำหนดช่วงเวลานำเข้าพืชสวนมายังอินโดนีเซี
                  อ่านข่าวต่อได้ที่: https://www.thairath.co.th/content/1344745
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default News;

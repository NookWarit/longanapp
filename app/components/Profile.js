import React, { Component } from "react";
import { Text } from "react-native";
import {
  List,
  Content,
  ListItem,
  FooterTab,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Right,
  Card,
  CardItem,
  Item,
  Image
} from "native-base";
import Master from "./layouts/Master";
import { connect } from "react-redux";
//import config from "../../config";
import PropTypes from "prop-types";

class Profile extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.user.name);
    return (
      <Master title="โปรไฟล์">
        <Content padder>
          <Card>
            <CardItem header bordered style={{justifyContent:"center"}}>
              <Text >ข้อมูลส่วนตัว</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <List>
                  <ListItem>
                    {/* <Thumbnail
                  square
                  source={{ uri: `${config.server.api}/api/article/image/${article.image}`}}
                  //style={{ width: 64, height: 64, resizeMode:'contain'}}
                /> */}
                  </ListItem>
                  <ListItem>
                  <Text>ชื่อ </Text>
                  <Text>{this.props.user.name} </Text>
                  <Text> นามสกุล </Text>
                  <Text>{this.props.user.lastname} </Text>
                  </ListItem>
                  <ListItem>
                    <Text>อีเมลล์ </Text>
                    <Text>{this.props.user.email} </Text>
                  </ListItem>
                  <ListItem>
                    <Text>รหัสผ่าน </Text>
                    <Text>{this.props.user.password} </Text>
                  </ListItem>
                  <ListItem>
                    <Text>เบอร์โทร </Text>
                    <Text>{this.props.user.tel} </Text>
                  </ListItem>
                  <ListItem>
                    <Text>ที่อยู่ </Text>
                    <Text>{this.props.user.address} </Text>
                  </ListItem>
                  <ListItem >
                    <Text>อำเภอ </Text>
                    <Text>{this.props.user.district} </Text>
                    <Text> จังหวัด </Text>
                    <Text>{this.props.user.province} </Text>
                  </ListItem>
                  <Button bordered full dark style={{marginTop: 10}}>
                    <Text>แก้ไข</Text>
                  </Button>
                </List>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Master>
    );
  }
}
const mapStateToProps = state => ({
  // articles: state.article.articles
  user: state.user.user
});
const mapDispatchToProps = dispatch => ({
  // toggleArticle: data => dispatch(toggleArticle(data)),
  // setWebview: data => dispatch(setWebview(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Left
} from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.history.goBack()}>
              <Icon name="arrow-round-back" />
            </Button>
          </Left>
        </Header>
        <Content>
          <Item regular>
            <Icon active name="person" />
            <Input placeholder="ชื่อผู้ใช้" />
          </Item>
          <Item regular>
            <Icon active name="lock" />
            <Input placeholder="รหัสผ่าน" />
          </Item>
          <Item regular>
            <Icon active name="mail" />
            <Input placeholder="อีเมลล์" />
          </Item>
          <Item regular>
            <Icon active name="call" />
            <Input placeholder="โทรศัพท์" />
          </Item>
          <Item regular>
            <Icon active name="pin" />
            <Input placeholder="ที่อยู่" />
          </Item>

          <Button
            block
            info
            // onPress={() => {
            //   this.context.router.history.push("/signup");
            // }}
          >
            <Text> สร้างบัญชี </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  //articles: state.article.articles
});
const mapDispatchToProps = dispatch => ({
  // toggleArticle: data => dispatch(toggleArticle(data)),
  // setWebview: data => dispatch(setWebview(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

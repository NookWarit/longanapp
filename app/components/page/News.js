import React, { Component } from "react";
import {
  Content,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Item,
  Input,
  List,
  ListItem
} from "native-base";
import { connect } from "react-redux";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Content>
        <Item>
          <Icon name="ios-people" style={{ marginLeft: 5 }} />
          <Input
            returnKeyType="search"
            onSubmitEditing={this.onSubmitButtonClickHandler}
            onChangeText={this.onInputChangeHandler}
            placeholder="กรอกคำค้น..."
          />
          <Button onPress={this.onSubmitButtonClickHandler} transparent>
            <Icon name="search" />
          </Button>
        </Item>
        <List>
          {this.props.newss.map(news => (
            <ListItem thumbnail key={news.id}>
              <Left>
                <Thumbnail
                  square
                  source={{ uri:"http://10.105.6.169/longanapp/api/news/image/"+news.image}}
                  //style={{ width: 64, height: 64, resizeMode:'contain'}}
                />
              </Left>
              <Body>
                <Text>เรื่อง {news.title_th}</Text>
                <Text note numberOfLines={1}>
                  {news.detail_th}
                </Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {
                this.context.router.history.push("/DetailArticle");
                this.props.toggleDrawer(false);
              }}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    );
  }
}
const mapStateToProps = state => ({
  newss: state.news.newss
});
const mapDispatchToProps = dispatch => ({
  toggleNews: data => dispatch(toggleNews(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);

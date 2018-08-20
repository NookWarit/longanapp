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

class Article extends Component {
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
          {this.props.articles.map(article => (
            <ListItem thumbnail key={article.id}>
              <Left>
                <Thumbnail
                  square
                  source={{ uri:"http://10.65.10.24/longanapp/api/article/image/"+article.image}}
                  //style={{ width: 64, height: 64, resizeMode:'contain'}}
                />
              </Left>
              <Body>
                <Text>เรื่อง {article.title_th}</Text>
                <Text note numberOfLines={1}>
                  {article.detail_th}
                </Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {
                this.context.router.history.push("/DetailArticle");
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
  articles: state.article.articles
});
const mapDispatchToProps = dispatch => ({
  toggleArticle: data => dispatch(toggleArticle(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);

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
        <List>
          {this.props.articles.map(article => (
            <ListItem thumbnail key={article.id}>
              <Left>
                <Thumbnail
                  square
                  source={{ uri: article.image }}
                  //style={{ width: 64, height: 64, resizeMode:'contain'}}
                />
              </Left>
              <Body>
                <Text>เรื่อง {article.title}</Text>
                <Text note numberOfLines={1}>
                  {article.detail}
                </Text>
              </Body>
              <Right>
                <Button transparent>
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

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
import config from "../../config";
import { setWebview } from "../../store/actions/app";
import PropTypes from "prop-types";

class Article extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
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
                  source={{ uri: `${config.server.api}/api/article/image/${article.image}`}}
                  //style={{ width: 64, height: 64, resizeMode:'contain'}}
                />
              </Left>
              <Body>
                <Text>{article.title_th}</Text>
                
              </Body>
              <Right>
                <Button transparent onPress={() => {
                  this.props.setWebview({
                    title: "google",
                    url:`${config.server.api}/info/article/${article.id}`
                  })
                  this.context.router.history.push("/detailarticle");
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
  toggleArticle: data => dispatch(toggleArticle(data)),
  setWebview: data => dispatch(setWebview(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);

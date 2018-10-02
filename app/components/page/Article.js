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
import { findArticleByKeyword } from "../../store/actions/article";

class Article extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      keyword:''
    };
  }
  onChangeTextHandler(text) {
    this.setState({ keyword: text });
  }
  render() {
    return (
      <Content>
        <Item>
          <Icon name="ios-people" style={{ marginLeft: 5 }} />
          <Input
            returnKeyType="search"
            onSubmitEditing={()=>this.props.findArticleByKeyword(this.state.keyword)}
            onChangeText={(text)=> this.onChangeTextHandler(text)}
            placeholder="กรอกคำค้น..."
            value={this.state.keyword}
          />
          <Button onPress={() => this.props.findArticleByKeyword(this.state.keyword)} transparent>
            <Icon name="search" />
          </Button>
        </Item>
        <List>
          {this.props.articles.map((article,index) => (
            <ListItem thumbnail key={index}>
              <Left>
                <Thumbnail
                  square
                  source={{ uri: `${config.server.api}/api/article/image/${article.image}`}}
                  //style={{ width: 64, height: 64, resizeMode:'contain'}}
                />
              </Left>
              <Body>
                <Text>{article.title}</Text>
                
              </Body>
              <Right>
                <Button transparent onPress={() => {
                  this.props.setWebview({
                    url:`${config.server.api}/info/article/${article.article_id}`
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
  setWebview: data => dispatch(setWebview(data)),
  findArticleByKeyword: data => dispatch(findArticleByKeyword(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);

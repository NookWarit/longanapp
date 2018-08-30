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

class News extends Component {
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
          {this.props.newss.map(news => (
            <ListItem thumbnail key={news.id}>
              <Left>
                <Thumbnail
                  square
                  source={{ uri: `${config.server.api}/api/news/image/${news.image}`}}
                  
                  //style={{ width: 64, height: 64, resizeMode:'contain'}}
                />
              </Left>
              <Body>
                <Text>{news.title_th}</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {
                this.props.setWebview({
                  title:'',
                  url:`${config.server.api}/info/news/${news.id}`
                })
                this.context.router.history.push("/detailnews");
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
  toggleNews: data => dispatch(toggleNews(data)),
  setWebview: data => dispatch(setWebview(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);

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
import { findNewsByKeyword } from "../../store/actions/news";
import {
  Dimensions,
  ScrollView,
  Platform,
  TouchableOpacity
} from "react-native";
const { width, height } = Dimensions.get("window");

class News extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  onChangeTextHandler(text) {
    this.setState({ keyword: text });
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.keyword.length == 0){
      this.props.findNewsByKeyword(this.state.keyword);
    }
    return true
  }

  render() {
    return (
      <React.Fragment>
        <Item>
          <Icon name="ios-people" style={{ marginLeft: 5 }} />
          <Input
            returnKeyType="search"
            onSubmitEditing={() =>
              this.props.findNewsByKeyword(this.state.keyword)
            }
            onChangeText={text => {
              
              this.onChangeTextHandler(text);
            }}
            placeholder="กรอกคำค้น..."
            value={this.state.keyword}
          />
          <Button
            transparent
            onPress={() => {
              // if (this.props.findNewsByKeyword(this.state.keyword) == false) {
              //       alert("ไม่มีรายการที่ค้นหา");
              //     }else{
              this.props.findNewsByKeyword(this.state.keyword);
            }}
          >
            <Icon name="search" />
          </Button>
        </Item>
        <Content style={{ height: height - (height * 30) / 100 }}>
          <List
            dataArray={this.props.news}
            renderRow={n => (
              <ListItem thumbnail>
                <Left>
                  <Thumbnail
                    square
                    source={{
                      uri: `${config.server.api}/api/news/image/${n.image}`
                    }}

                    //style={{ width: 64, height: 64, resizeMode:'contain'}}
                  />
                </Left>
                <Body>
                  <TouchableOpacity
                    transparent
                    onPress={() => {
                      this.props.setWebview({
                        url: `${config.server.api}/info/news/${n.news_id}`
                      });
                      this.context.router.history.push("/detailnews");
                    }}
                  >
                    <Text>{n.title}</Text>
                  </TouchableOpacity>
                </Body>
                <Right />
              </ListItem>
            )}
          />
        </Content>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  news: state.news.news
});
const mapDispatchToProps = dispatch => ({
  toggleNews: data => dispatch(toggleNews(data)),
  setWebview: data => dispatch(setWebview(data)),
  findNewsByKeyword: data => dispatch(findNewsByKeyword(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);

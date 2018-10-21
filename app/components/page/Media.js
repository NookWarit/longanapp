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
  ListItem,
  Container
} from "native-base";
import { connect } from "react-redux";
import config from "../../config";
import { setWebview } from "../../store/actions/app";
import PropTypes from "prop-types";
import { Dimensions, ScrollView, Platform, TouchableOpacity} from "react-native";
import { findMediaByKeyword } from "../../store/actions/media";
const { width, height } = Dimensions.get("window");

class Media extends Component {
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
      this.props.findMediaByKeyword(this.state.keyword);
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
              this.props.findMediaByKeyword(this.state.keyword)
            }
            onChangeText={text => this.onChangeTextHandler(text)}
            placeholder="กรอกคำค้น..."
            value={this.state.keyword}
          />
          <Button
            onPress={() => this.props.findMediaByKeyword(this.state.keyword)}
            transparent
          >
            <Icon name="search" />
          </Button>
        </Item>
          <Content  style={{ height: height - (height * 30 /100) }}>
            <List
              dataArray={this.props.media}
              renderRow={m => (
                <ListItem avatar last  style={{padding:5}}>
                            <Left>
                                <Button>
                              <Icon name="videocam" />
                              </Button>
                            </Left>
                            <Right style={{paddingLeft:15}}>
                              <TouchableOpacity
                                transparent
                                onPress={() => {
                                  this.props.setWebview({
                                    url: `${config.server.api}/info/media/${
                                      m.media_id
                                    }`
                                  });
                                  this.context.router.history.push(
                                    "/detailmedia"
                                  );
                                }}
                              >
                              <Text>{m.title}</Text>
                              </TouchableOpacity>
                            </Right>
                          </ListItem>
              )}
            />
          </Content>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
    media: state.media.media
});
const mapDispatchToProps = dispatch => ({
  getAllMedia: data => dispatch(getAllMedia(data)),
  setWebview: data => dispatch(setWebview(data)),
  findMediaByKeyword: data => dispatch(findMediaByKeyword(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Media);

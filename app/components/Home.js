import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Thumbnail,
  Content,
  Icon,
  Card,
  CardItem,
  Button,
  List,
  ListItem,
  Left,
  Body,
  Right
} from "native-base";
import { connect } from "react-redux";
import config from "../config";
import { setWebview } from "../store/actions/app";
import PropTypes from "prop-types";
import Master from "./layouts/Master";
import { Dimensions } from "react-native";
import { getLastArticles } from "../store/actions/article";
import { getLastNews } from "../store/actions/news";
const { height, width } = Dimensions.get("window");

class Home extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Master title="หน้าแรก">
        <Grid style={{ flex: 1, height: height - (height * 18 /100)}}>
          <Row size={1}>
            <Card style={{ width: width }}>
              <CardItem header bordered style={styles.background}>
                <Icon name="calculator" />
                <Text>ระบบสนับสนุนการตัดสินใจใช้ปุ๋ย</Text>
              </CardItem>
              <CardItem>
                <List style={{ flexDirection: "row" }}>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail
                        small
                        square
                        source={require("../assets/images/fertilizer.png")}
                        style={{
                          backgroundColor: "#ECF0F1",
                          resizeMode: "contain",
                          padding: 5,
                          marginTop:5,
                          margin: 5
                        }}
                      />
                    </Left>
                    <Right>
                      <Button
                        transparent
                        onPress={() =>
                          this.context.router.history.push("/calculate")
                        }
                      >
                        <Text>ความต้องการปุ๋ย</Text>
                      </Button>
                    </Right>
                  </ListItem>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail
                        small
                        square
                        source={require("../assets/images/grass.png")}
                        style={{ backgroundColor: "#ECF0F1" ,
                        resizeMode: "contain",
                        padding: 5,
                        marginTop:5,
                        margin: 5}}
                      />
                    </Left>
                    <Right>
                      <Button transparent
                      onPress={() =>
                        this.context.router.history.push("/soil")
                      }>
                        <Text>วิเคราะห์ดิน</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </List>
              </CardItem>
            </Card>
          </Row>
          <Row size={3}>
            <Card style={{ width: width }}>
              <CardItem header bordered style={styles.background}>
                <Icon name="film" />
                <Text>ข่าวสารล่าสุด</Text>
              </CardItem>
              <CardItem bordered>
                <Content>
                  <List
                    dataArray={this.props.lastnews}
                    renderRow={news => (
                      <ListItem thumbnail>
                        <Left>
                          <Thumbnail
                            square
                            source={{
                              uri: `${config.server.api}/api/news/image/${
                                news.image
                              }`
                            }}
                            //style={{ width: 64, height: 64, resizeMode:'contain'}}
                          />
                        </Left>
                        <Body>
                          <TouchableOpacity
                            transparent
                            onPress={() => {
                              this.props.setWebview({
                                url: `${config.server.api}/info/news/${
                                  news.article_id
                                }`
                              });
                              this.context.router.history.push("/detailnews");
                            }}
                          >
                            <Text>{news.title}</Text>
                          </TouchableOpacity>
                        </Body>
                        <Right />
                      </ListItem>
                    )}
                  />
                </Content>
              </CardItem>
            </Card>
          </Row>
        </Grid>
      </Master>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    //height:50,
    padding: 5
  },
  block: {
    alignItems: "center",
    padding: 15
    //borderWidth:1
  },
  button: {
    borderColor: "red",
    borderWidth: 1,
    //width: 300,
    //height: 300,
    alignSelf: "center",
    margin: 4
  },
  text: {
    textAlign: "center"
  }
});
const mapStateToProps = state => ({
  article: state.article.article,
  lastnews: state.news.lastnews
});
const mapDispatchToProps = dispatch => ({
  getLastArticles: data => dispatch(getLastArticles(data)),
  getLastNews: data => dispatch(getLastNews(data)),
  setWebview: data => dispatch(setWebview(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

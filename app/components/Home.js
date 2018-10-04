import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Thumbnail, Content, Icon, Card, CardItem, Button, List, ListItem, Left, Body, Right } from "native-base";
import { connect } from "react-redux";
import config from "../config";
import { setWebview } from "../store/actions/app";
import PropTypes from "prop-types";
import Master from "./layouts/Master";
import { getAllMedia } from "../store/actions/media";

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
        <Content padder>
          <Card>
            <CardItem header bordered style={styles.background}>
              <Icon name="calculator" />
              <Text>ระบบคำนวณ</Text>
            </CardItem>
            <CardItem>
              <Grid>
                <Row>
                  <Col
                    style={styles.block}
                    onPress={() =>
                      this.context.router.history.push("/calculate")
                    }
                  >
                    <Thumbnail
                      square
                      small
                      source={require("../assets/images/fertilizer.png")}
                    />
                    <Text style={styles.text}>ปริมาณสัดส่วนปุ๋ย</Text>
                  </Col>
                  <Col
                    style={styles.block}
                    onPress={() => this.context.router.history.push("/soil")}
                  >
                    <Thumbnail
                      square
                      small
                      source={require("../assets/images/grass.png")}
                    />
                    <Text style={styles.text}>วิเคราะห์ดิน</Text>
                  </Col>
                  <Col
                    style={styles.block}
                    onPress={() => this.context.router.history.push("/soil")}
                  >
                    <Thumbnail
                      square
                      small
                      source={require("../assets/images/water1.png")}
                    />
                    <Text style={styles.text}>วิเคราะห์น้ำ</Text>
                  </Col>
                </Row>
              </Grid>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered style={styles.background}>
              <Icon name="videocam" />
              <Text>แบบตัวอย่าง</Text>
            </CardItem>
            <CardItem bordered>
              <Grid>
                <Row>
                  <List>
                    {this.props.media.map(
                      (media, index) => (
                        console.log(media),
                        (
                          <ListItem thumbnail key={index}>
                            <Left>
                              <Icon name="film" />
                            </Left>
                            <Body>
                              <Text>{media.title}</Text>
                              <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                              <Button
                                transparent
                                onPress={() => {
                                  this.props.setWebview({
                                    url: `${config.server.api}/info/media/${
                                      media.media_id
                                    }`
                                  });
                                  this.context.router.history.push(
                                    "/detailmedia"
                                  );
                                }}
                              >
                                <Text>View</Text>
                              </Button>
                            </Right>
                          </ListItem>
                        )
                      )
                    )}
                  </List>
                </Row>
              </Grid>
            </CardItem>
          </Card>
        </Content>
      </Master>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#00cf9e"
  },
  block: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 10
  },
  button: {
    borderColor: "red",
    borderWidth: 1,
    width: 100,
    height: 100,
    alignSelf: "center",
    margin: 4
  },
  text: {
    textAlign: "center"
  }
});
const mapStateToProps = state => ({
  media: state.media.media
});
const mapDispatchToProps = dispatch => ({
  getAllMedia: data => dispatch(getAllMedia(data)),
  setWebview: data => dispatch(setWebview(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  ListItem,
  Right,
  Left,
  List,
  Icon
} from "native-base";
import Master from "./layouts/Master";
import { connect } from "react-redux";
import { getAllHistory } from "../store/actions/history";
import PropTypes from "prop-types";
import config from "../config";
import { setWebview } from "../store/actions/app";
import { ListView, Alert } from "react-native";
class History extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);

    this.state = {};
  }
  async componentDidMount() {
    await this.props.getAllHistory();
  }

  render() {
    return (
      <Master title="ประวัติการคำนวณ">
        <Content padder>
          <Card>
            <CardItem>
              <Content>
                <List>
                  {this.props.historys.map((his, index) => (
                    <ListItem
                      thumbnail
                      key={index}
                      onPress={() => {
                        this.props.setWebview({
                          url: `${config.server.api}/info/history/${
                            his.history_id
                          }`
                        });
                        this.context.router.history.push("/detailhistory");
                      }}
                    >
                      <Left>
                        <Icon active name="home" />
                      </Left>
                      <Body>
                        <Text>สถานที่ : {his.place} </Text>
                        <Text note>คาดว่าจะเก็บ : {his.harvestday}</Text>
                      </Body>
                      <Right>
                        <Button
                          transparent
                          onPress={() => {
                            Alert.alert(
                              "Are you sure ?",
                              "This will delete pemanently! ",
                              [
                                {
                                  text: "Cancel",
                                  onPress: () => alert("fuck"),
                                  style: "cancel"
                                },
                                { text: "OK", onPress: () => alert("deleted") }
                              ],
                              { cancelable: false }
                            );
                          }}
                        >
                          <Icon name="trash" color="#ff0000" />
                        </Button>
                      </Right>
                    </ListItem>
                  ))}
                </List>
              </Content>
            </CardItem>
          </Card>
        </Content>
      </Master>
    );
  }
}
const mapStateToProps = state => ({
  historys: state.history.history
});
const mapDispatchToProps = dispatch => ({
  getAllHistory: data => dispatch(getAllHistory(data)),
  setWebview: data => dispatch(setWebview(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);

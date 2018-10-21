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
import { getAllHistory, deleteHistory } from "../store/actions/history";
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
                              "ยืนยันที่จะลบข้อมูล?",
                              "ข้อมูลการแจ้งเตือนจะถูกลบไปด้วย! ",
                              [
                                {
                                  text: "ตกลง",
                                  onPress: async () => {
                                    await this.props.deleteHistory({
                                      history_id: his.history_id});
                                    //   if (this.props.errorMessage === "DATA_NULL" || this.props.errorMessage === ""){
                                    //     alert("ไม่มีข้อมูลประวัติการคำนวณแล้ว");
                                    //   await this.context.router.history.push("/");
                                    // }
                                  }
                                },
                                {
                                  text: "ยกเลิก",
                                  style: "cancel"
                                }
                              ],
                              { cancelable: false }
                            );
                          }}
                        >
                          <Icon name="trash" />
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
  historys: state.history.history,
  errorMessage: state.app.hasError.message
});
const mapDispatchToProps = dispatch => ({
  getAllHistory: data => dispatch(getAllHistory(data)),
  setWebview: data => dispatch(setWebview(data)),
  deleteHistory: data => dispatch(deleteHistory(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);

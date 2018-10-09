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
  List
} from "native-base";
import Master from "./layouts/Master";
import { connect } from "react-redux";
import { getAllHistory } from "../store/actions/history";
import PropTypes from "prop-types";
import config from "../config";
import { setWebview } from "../store/actions/app";
class History extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getAllHistory();
  }
  render() {
    return (
      <Master title="ประวัติการคำนวณ">
        <Content padder>
          <Card>
            <CardItem header>
              <Text>History</Text>
            </CardItem>
            <CardItem>
              <Content>
              <List>
                {this.props.historys.map(
                  (his, index) => (
                    (
                      <ListItem thumbnail key={index}>
                        <Left>
                        
                        </Left>
                        <Body>
                        <Text>สถานที่ : {his.place}</Text>
                        </Body>
                        <Right>
                          <Button transparent onPress={() => {
                    this.props.setWebview({
                      url:`${config.server.api}/info/history/${his.history_id}`
                    })
                    this.context.router.history.push("/detailhistory");
                }}>
                    <Text>ดูเพิ่มเติม</Text>
                  </Button>
                        </Right>
                      </ListItem>
                    )
                  )
                )}
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

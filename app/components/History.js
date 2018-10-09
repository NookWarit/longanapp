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
      <Master title="ประวัติการใช้งาน">
        <Content padder>
          <Card>
            <CardItem header>
              <Text>History</Text>
            </CardItem>
            <CardItem>
              <List>
              {this.props.historys.map((history, index) => (
                console.log(this.props.history),
                <ListItem thumbnail key={index}>
                <Left>
                  {/* <Thumbnail
                    square
                    source={{ uri: `${config.server.api}/api/article/image/${article.image}`}}
                    //style={{ width: 64, height: 64, resizeMode:'contain'}}
                  /> */}
                </Left>
                <Body>
                  <Text>สถานที่ : {history.place}</Text>
                  
                </Body>
                <Right>
                  {/* <Button transparent onPress={() => {
                    this.props.setWebview({
                      url:`${config.server.api}/info/article/${article.article_id}`
                    })
                    this.context.router.history.push("/detailarticle");
                }}>
                    <Text>View</Text>
                  </Button> */}
                </Right>
              </ListItem>
              ))}
              </List>
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
  getAllHistory: data => dispatch(getAllHistory(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);

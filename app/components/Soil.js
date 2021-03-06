import React, { Component } from "react";
import Master from "./layouts/Master";
import {
  Icon,
  Picker,
  Form,
  Text,
  CardItem,
  Card,
  Body,
  Item,
  Button,
  List,
  Content,
  H3,
  Right,
  Left,
  ListItem,
  Input
} from "native-base";
import { connect } from "react-redux";
import { getSoil } from "../store/actions/soil";
import { Dimensions } from "react-native";
import { setWebview } from "../store/actions/app";
import config from "../config";
import PropTypes from "prop-types";
const { height, width } = Dimensions.get("window");

class soil extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      valuePH: "ปานกลาง",
      valueOM: "ปานกลาง",
      valueP: "ปานกลาง",
      valueK: "ปานกลาง"
    };
    this.onValueChange1 = this.onValueChange1.bind(this);
    this.onValueChange2 = this.onValueChange2.bind(this);
    this.onValueChange3 = this.onValueChange3.bind(this);
    this.onValueChange4 = this.onValueChange4.bind(this);
  }
  onValueChange1(value) {
    this.setState({ valuePH: value });
  }
  onValueChange2(value) {
    this.setState({ valueOM: value });
  }
  onValueChange3(value) {
    this.setState({ valueP: value });
  }
  onValueChange4(value) {
    this.setState({ valueK: value });
  }
  render() {
    return (
      <Master title="วิเคราะห์ดิน" isBack>
        <List>
          <ListItem itemHeader first>
            <Left>
              <Text>ค่า PH [ความเป็นกรด - ด่าง]</Text>
            </Left>
            <Right>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                itemStyle={{
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                selectedValue={this.state.valuePH}
                onValueChange={this.onValueChange1}
              >
                <Picker.Item label="> 5.5" value="สูง" />
                <Picker.Item label="5.0 - 5.5" value="ปานกลาง" />
                <Picker.Item label="4.5 - 5.0" value="ต่ำ" />
              </Picker>
            </Right>
          </ListItem>
          <ListItem itemHeader first>
            <Left>
              <Text>ค่า OM [อินทรียวัตถุ]</Text>
            </Left>
            {/* <Body>
              <Text note>ต่ำคือน้อยกว่า 1.5</Text>
              <Text note>ปานกลางคือระหว่าง1.5กับ2.0</Text>
              <Text note>สูงคือมากกว่า2.0</Text>
            </Body> */}
            <Right>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                itemStyle={{
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                selectedValue={this.state.valueOM}
                onValueChange={this.onValueChange2}
              >
                <Picker.Item label="สูง          > 2.5 " value="สูง" />
                <Picker.Item label="ปานกลาง     1.5 - 2.0" value="ปานกลาง" />
                <Picker.Item label="ต่ำ          < 1.5 " value="ต่ำ" />
              </Picker>
            </Right>
          </ListItem>
          <ListItem itemHeader first>
            <Left>
              <Text>ค่า P [ฟอสฟอรัส]</Text>
            </Left>
            <Right>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                itemStyle={{
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                selectedValue={this.state.valueP}
                onValueChange={this.onValueChange3}
              >
                <Picker.Item label="สูง           > 60" value="สูง" />
                <Picker.Item label="ปานกลาง     30 - 60" value="ปานกลาง" />
                <Picker.Item label="ต่ำ          < 30" value="ต่ำ" />
              </Picker>
            </Right>
          </ListItem>
          <ListItem itemHeader first>
            <Left>
              <Text>ค่า K [โพแทสเซียม]</Text>
            </Left>
            <Right>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                itemStyle={{
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                selectedValue={this.state.valueK}
                onValueChange={this.onValueChange4}
              >
                <Picker.Item label="สูง           > 100" value="สูง" />
                <Picker.Item label="ปานกลาง     60 - 100" value="ปานกลาง" />
                <Picker.Item label="ต่ำ           < 60" value="ต่ำ" />
              </Picker>
            </Right>
          </ListItem>
          <Button
            //onPress={() => this.props.getsoil({ value: this.state.value })}
            onPress={() => {
              this.props.setWebview({
                url: `${config.server.api}/info/soil/${this.state.valuePH}/${
                  this.state.valueOM
                }/${this.state.valueP}/${this.state.valueK}`
              });
              this.context.router.history.push("/detailhistory");
            }}
            bordered
            style={{ alignSelf: "center", padding: 10, margin: 10 }}
          >
            <Text>วิเคราะห์</Text>
          </Button>
          {/* <Card>
              <CardItem>
                <Content>
                  <CardItem style={{paddingTop:30 ,paddingLeft:10}}>
                  <Text>คำแนะนำสำหรับจัดการดิน</Text>
                  </CardItem>
                  <Text style={{paddingTop:15 ,paddingLeft:5}}>{this.props.soil.description}</Text>
                </Content>
              </CardItem>
            </Card> */}
        </List>
      </Master>
    );
  }
}
const mapStateToProps = state => ({
  soil: state.soil.value
});
const mapDispatchToProps = dispatch => ({
  setWebview: data => dispatch(setWebview(data)),
  getsoil: data => dispatch(getSoil(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(soil);

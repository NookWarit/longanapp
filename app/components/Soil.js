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
  Left
} from "native-base";
import { connect } from "react-redux";
import { getSoil } from "../store/actions/soil";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

class soil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "สูง"
    };
    this.onValueChange = this.onValueChange.bind(this);
  }
  onValueChange(value) {
    this.setState({ value: value });
  }
  render() {
    return (
      <Master title="วิเคราะห์ดิน" isBack>
            <Card style={{ width: width, padding: 15 }}>
              <CardItem>
                <Left>
                  <H3>ค่าของดิน</H3>
                  </Left>
                  <Body>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    itemStyle={{
                      marginLeft: 0,
                      paddingLeft: 10
                    }}
                    selectedValue={this.state.value}
                    onValueChange={this.onValueChange}
                  >
                    <Picker.Item label="สูง" value="สูง" />
                    <Picker.Item label="ปานกลาง" value="ปานกลาง" />
                    <Picker.Item label="ต่ำ" value="ต่ำ" />
                  </Picker>
                  </Body>
                  <Right>
                  <Button
                    onPress={() =>
                      this.props.getsoil({ value: this.state.value })
                    }
                    bordered
                    style={{margin:5}}
                  >
                    <Text>วิเคราะห์</Text>
                  </Button>
                  </Right>
              </CardItem>
              <CardItem>
                <Content>
                  <CardItem style={{paddingTop:30}}>
                  <H3>คำแนะนำสำหรับจัดการดิน</H3>
                  </CardItem>
                  <Text style={{paddingTop:15}}>{this.props.soil.description}</Text>
                </Content>
              </CardItem>
            </Card>
      </Master>
    );
  }
}
const mapStateToProps = state => ({
  soil: state.soil.value
});
const mapDispatchToProps = dispatch => ({
  getsoil: data => dispatch(getSoil(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(soil);

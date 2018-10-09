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
  Header,
  H1,
  H3,
  Right
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";
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
            <Card style={{ width: width, margin: 5 }}>
              <CardItem>
                <Form>
                <CardItem>
                  <H3>ค่าของดิน</H3>
                  </CardItem>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    placeholder="เลือก"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    itemStyle={{
                      backgroundColor: "#d3d3d3",
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
                  <Right>
                  <Button
                    onPress={() =>
                      this.props.getsoil({ value: this.state.value })
                    }
                    bordered
                  >
                    <Text>วิเคราะห์</Text>
                  </Button>
                  </Right>
                </Form>
              </CardItem>
              <CardItem>
                <Content>
                  <CardItem>
                  <H3>คำแนะนำสำหรับจัดการดิน</H3>
                  </CardItem>
                  <Text>{this.props.soil.description}</Text>
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

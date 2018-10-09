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
  List
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
      value: ""
    };
    this.onValueChange = this.onValueChange.bind(this);
  }
  onValueChange(value) {
    this.setState({ value: value });
  }
  render() {
    return (
      <Master title="วิเคราะห์ดิน" isBack>
        <Grid>
          <Row>
            <Card style={{ width: width, margin: 5 }}>
              <CardItem>
                <Form>
                  {/* <Picker
                mode="dropdown"
                iosHeader="Select your SIM"
                iosIcon={
                  <Icon
                    name="arrow-dropdown-circle"
                    style={{ color: "#007aff", fontSize: 25 }}
                  />
                }
                style={{ width: undefined }}
                selectedValue={this.state.value}
                onValueChange={this.onValueChange}
              > */}
                  <Item Picker>
                    <Text>ค่าของดิน</Text>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      style={{ width: undefined }}
                      placeholder="เลือก"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={this.state.value}
                      onValueChange={this.onValueChange}
                    >
                      <Picker.Item label="สูง" value="สูง" />
                      <Picker.Item label="ปานกลาง" value="ปานกลาง" />
                      <Picker.Item label="ต่ำ" value="ต่ำ" />
                    </Picker>
                    <Button
                      onPress={() => this.props.getsoil(this.state.value)}
                      bordered
                    >
                      <Text>วิเคราะห์</Text>
                    </Button>
                    {console.log(this.state.value)}
                  </Item>
                </Form>
              </CardItem>
              <CardItem>
                <Text>คำแนะนำสำหรับจัดการดิน</Text>

                {/* <Text>{soil.description}</Text> */}
              </CardItem>
            </Card>
          </Row>
        </Grid>
      </Master>
    );
  }
}
const mapStateToProps = state => ({
  soil: state.soil
});
const mapDispatchToProps = dispatch => ({
  getsoil: data => dispatch(getSoil(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(soil);

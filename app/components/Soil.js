import React, { Component } from "react";
import Master from "./layouts/Master";
import { Icon, Picker, Form, Text, CardItem, Card, Body } from "native-base";
import { Grid, Row } from "react-native-easy-grid";

class soil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Master title="วิเคราะห์ดิน" isBack>
          <Grid>
              <Row>
        <Form>
          <Picker
            mode="dropdown"
            iosHeader="Select your SIM"
            iosIcon={
              <Icon
                name="arrow-dropdown-circle"
                style={{ color: "#007aff", fontSize: 25 }}
              />
            }
            style={{ width: undefined }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Form>
        </Row>
        <Row>
        <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>
                  Click on any carditem
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Row>
        </Grid>
      </Master>
    );
  }
}

export default soil;

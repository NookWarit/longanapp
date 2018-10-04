import React, { Component } from "react";
import { Form, Item, Icon, Input, Text, Picker, Button } from "native-base";
import Master from "./layouts/Master";
import DatePicker from "react-native-datepicker";
import {connect} from "react-redux";

class calculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //selected1: undefined,
      date: "",
      input: {
        place: "",
        harvestday: "",
        size: "",
        expected: ""
      }
    };
    //this.state = {chosenDate: new Date()};
    //this.setDate = this.setDate.bind(this);
  }
  //   setDate(newDate) {
  //     this.setState({ chosenDate: newDate });
  //   }
  onValueChange1(value: string) {
    this.setState({
      selected1: value
    });
  }
  render() {
    return (
      <Master title="คำนวณปุ๋ย" isBack>
        <Form>
          <Item>
            {/* <Icon active name="person" /> */}
            <Text> สถานที่ :</Text>
            <Input
              placeholder="สถานที่"
              value={this.state.input.place}
              //   onChangeText={text => this.onTextChangeHandler(text, "name")}
            />
          </Item>
          <Item>
            <Text> ระยะเวลาที่จะเก็บเกี่ยว :</Text>
            <DatePicker
              style={{ width: 200 }}
              date={this.state.date}
              mode="date"
              placeholder="เลือกวันที่"
              format="YYYY-MM-DD"
              confirmBtnText="ยืนยัน"
              cancelBtnText="ยกเลิก"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={date => {
                this.setState({ date: harvestday });
              }}
            />
          </Item>
          <Item>
            <Text> ขนาดทรงพุ่ม :</Text>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              //placeholder="เดือน"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.size}
              onValueChange={this.onValueChange1.bind(this)}
            >
              <Picker.Item label="1" value="key1" />
              <Picker.Item label="2" value="key2" />
              <Picker.Item label="3" value="key3" />
              <Picker.Item label="4" value="key4" />
              <Picker.Item label="5" value="key5" />
              <Picker.Item label="6" value="key6" />
              <Picker.Item label="7" value="key7" />
            </Picker>
          </Item>
          <Item>
            {/* <Icon active name="person" /> */}
            <Text> ผลผลิตโดยเฉลี่ยปีก่อน :</Text>
            <Input
              placeholder="กิโลกรัมต่อต้น"
              value={this.state.input.expected}
              //   onChangeText={text => this.onTextChangeHandler(text, "name")}
            />
          </Item>
          <Button
            style={{ alignSelf: "center", padding: 5, margin: 10 }}
            onPress={() => alert("รอแปร้บบบบบ")}
          >
            <Text>คำนวณ</Text>
          </Button>
        </Form>
      </Master>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(calculate);

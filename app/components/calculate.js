import React, { Component } from "react";
import {
  Form,
  Item,
  Icon,
  Input,
  DatePicker,
  Text,
  Picker,
  Button
} from "native-base";
import Master from "./layouts/Master";

class calculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: undefined,
      selected2: undefined,
      selected3: undefined
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
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  onValueChange3(value: string) {
    this.setState({
      selected3: value
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
              //   value={this.state.input.name}
              //   onChangeText={text => this.onTextChangeHandler(text, "name")}
            />
          </Item>
          <Item>
            {/* <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            />
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
            <Text> ระยะเวลาที่จะเก็บเกี่ยว :</Text>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              placeholder="เดือน"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange1.bind(this)}
            >
              <Picker.Item label="มกราคม" value="key0" />
              <Picker.Item label="กุมภาพันธ์" value="key1" />
              <Picker.Item label="มีนาคม" value="key2" />
              <Picker.Item label="เมษายน" value="key3" />
              <Picker.Item label="พฤษภาคม" value="key4" />
            </Picker>
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
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
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
              //   value={this.state.input.name}
              //   onChangeText={text => this.onTextChangeHandler(text, "name")}
            />
          </Item>
          <Item>
            <Text> สัดส่วนที่ต้องการใส่ปุ๋ยช่วงที่ 2 :</Text>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              placeholder="ติดดอก - เก็บเกี่ยว"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected3}
              onValueChange={this.onValueChange3.bind(this)}
            >
              <Picker.Item label="3" value="key3" />
              <Picker.Item label="4" value="key4" />
              <Picker.Item label="5" value="key5" />
            </Picker>
          </Item>
          <Button onPress={() => alert("รอแปร้บบบบบ")} style={{alignSelf:"center",padding:5,margin:10}}>
            <Text>คำนวณ</Text>
          </Button>
        </Form>
      </Master>
    );
  }
}

export default calculate;

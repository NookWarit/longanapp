import React, { Component } from "react";
import { Form, Item, Icon, Input, Text, Picker, Button } from "native-base";
import Master from "./layouts/Master";
import DatePicker from "react-native-datepicker";
import { connect } from "react-redux";
import { sentHistory, getAllHistory } from "../store/actions/history";
import PropTypes from "prop-types";
import { Alert , Dimensions} from "react-native";
const {width,height} =Dimensions.get("window");

class calculate extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      input: {
        user_id: "",
        place: "",
        harvestday: "",
        size: "1",
        expected: ""
      }
    };
    this.onValueChange = this.onValueChange.bind(this);
  }
  componentDidMount() {
    let oldInput = this.state.input;
    oldInput["user_id"] = this.props.user.user_id;
    this.setState({ input: oldInput });
  }
  onValueChange(field, value) {
    let oldInput = this.state.input;
    oldInput[field] = value;
    this.setState({ input: oldInput });
  }
  render() {
    return (
      <Master title="คำนวณปุ๋ย" isBack>
        <Form style={{width:width}}>
          <Item>
            {/* <Icon active name="person" /> */}
            <Text> สถานที่ :</Text>
            <Input
              placeholder="สถานที่"
              value={this.state.input.place}
              onChangeText={text => this.onValueChange("place", text)}
            />
          </Item>
          <Item>
            <Text> ระยะเวลาที่จะเก็บเกี่ยว :</Text>
            <DatePicker
              style={{ width: 200 }}
              date={this.state.input.harvestday}
              mode="date"
              placeholder="เลือกวันที่"
              format="YYYY-MM-DD"
              minDate={new Date()}
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
              }}
              onDateChange={date => this.onValueChange("harvestday", date)}
            />
          </Item>
          <Item>
            <Text> ขนาดทรงพุ่ม :</Text>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.input.size}
              onValueChange={value => this.onValueChange("size", value)}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
            </Picker>
          </Item>
          <Item>
            <Text> ผลผลิตโดยเฉลี่ยปีก่อน :</Text>
            <Input
              placeholder="กิโลกรัมต่อต้น"
              keyboardType="number-pad"
              value={this.state.input.expected}
              onChangeText={text => this.onValueChange("expected", text)}
            />
          </Item>
          <Button
            style={{ alignSelf: "center", padding: 5, margin: 10 }}
            onPress={() => {
              if (
                (this.state.input.place,
                this.state.input.size,
                this.state.input.harvestday,
                this.state.input.expected == "")
              ) {
                alert("กรุณากรอกข้อมูลให้ครบ");
              } else {
                this.props.sentHistory(this.state.input);
                Alert.alert(
                  "คำนวณเรียบร้อย",
                  "ไปดูได้ที่หน้าประวัติการคำนวณ",
                  [
                    {
                      text: "ตกลง",
                      onPress: async () => {
                        await this.props.getAllHistory();
                        this.context.router.history.push("/history");
                      }
                    }
                  ],
                  { cancelable: false }
                );
              }
            }}
          >
            <Text>คำนวณ</Text>
          </Button>
        </Form>
      </Master>
    );
  }
}
const mapStateToProps = state => ({
  historys: state.history.history,
  user: state.user.user
});
const mapDispatchToProps = dispatch => ({
  getAllHistory: data => dispatch(getAllHistory(data)),
  sentHistory: data => dispatch(sentHistory(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(calculate);

import React, { Component } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import Master from "./layouts/Master";
const { height, width } = Dimensions.get("window");
import { connect } from "react-redux";
import { getAllNotification } from "../store/actions/notification";
import { Card, CardItem, Text, Content } from "native-base";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

class Calendars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: {}
    };
  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}>
        <Text>{item.text}</Text>
      </View>
    );
  }
  

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }

  componentDidMount() {
    //console.log();
    // let notifications = this.props.notification.map(noti => noti.date)
    let newDaysObject = {};

    this.props.notification.forEach(obj => {
      newDaysObject = {
        ...newDaysObject,
        [obj.date]: [
          {
            text: `สถานที่: ${obj.place} \n\r ระยะ: ${obj.phase} \n\r ควรใส่ปุ๋ยปริมาณ: ${obj.fertilizer}`
          }
        ]
      };
    });
    //console.log(newDaysObject)
    this.setState({ notifications: newDaysObject });
  }
  render() {
    return (
      <Master title="การแจ้งเตือน">
        <Agenda
          items={this.state.notifications}
          //loadItemsForMonth={(month) => this.state.notifications}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          renderKnob={() => {return (<View />);}}
  // specify what should be rendered instead of ActivityIndicator
  renderEmptyData = {() => {return (<View style={{padding:10}}><Text> ไม่มีข้อมูลสำหรับวันนี้</Text></View>);}}
          rowHasChanged={this.rowHasChanged.bind(this)}

          style={{ height: height }}
        />
      </Master>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.user,
  hasError: state.app.hasError.message,
  notification: state.notification.notification
});
const mapDispatchToProps = dispatch => ({
  getAllNotification: data => dispatch(getAllNotification(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendars);

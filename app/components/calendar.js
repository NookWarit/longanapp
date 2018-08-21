import React, { Component } from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import Master from "./layouts/Master";

class Calendars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Master title="การแจ้งเตือน">
        <CalendarList
          // Enable horizontal scrolling, default = false
          horizontal={true}
          // Enable paging on horizontal, default = false
          pagingEnabled={false}
          // Set custom calendarWidth.
          calendarWidth={370}
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        />
      </Master>
    );
  }
}

export default Calendars;
